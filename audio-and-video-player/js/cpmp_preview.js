jQuery(function($){
    var $form = $('#cpmp_media_player_form');
    if (!$form.length || $('#cpmp-preview-iframe').length === 0) return;

    var $iframe = $('#cpmp-preview-iframe'),
        $placeholder = $('#cpmp-preview-placeholder'),
        playerId = parseInt($form.find('input[name="cpmp_player_id"]').val(), 10) || 0,
        debounceTimer = null;

    function getVal(name, defaultValue) {
        var $el = $form.find('[name="' + name + '"]');
        if (!$el.length) return defaultValue;
        var type = ($el.attr('type') || '').toLowerCase();
        if (type === 'checkbox') return $el.is(':checked') ? 'true' : 'false';
        var v = $el.val();
        if (v === undefined || v === null || v === '') return defaultValue;
        return v;
    }

    function escapeAttr(s) {
        return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#039;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function buildItemShortcodes() {
        // Pull the current in-memory playlist (kept in sync by add_item/delete_item/move_item/edit_item).
        // Falling back to [] if cpmp isn't loaded yet (e.g. create-new mode).
        var items = (window.cpmp && Array.isArray(window.cpmp.items)) ? window.cpmp.items : [];
        if (items.length === 0) return '';

        return items.map(function(item) {
            // Defensive type-check: window.cpmp.items is mutated by the plugin's
            // add_item/edit_item, but assume nothing — anything that is not a
            // plain object with the expected string/array fields is silently skipped.
            if (!item || typeof item !== 'object') return null;

            var attrs = [];

            var files = Array.isArray(item.files) ? item.files : [];
            var file = (typeof files[0] === 'string') ? files[0] : '';
            if (file) attrs.push('file="' + escapeAttr(file) + '"');

            if (typeof item.annotation === 'string' && item.annotation) {
                attrs.push('name="' + escapeAttr(item.annotation) + '"');
            }
            if (typeof item.link === 'string' && item.link) {
                attrs.push('link="' + escapeAttr(item.link) + '"');
            }
            if (typeof item.poster === 'string' && item.poster) {
                attrs.push('poster="' + escapeAttr(item.poster) + '"');
            }

            var subs = Array.isArray(item.subtitles) ? item.subtitles : [];
            var sub = (subs[0] && typeof subs[0] === 'object') ? subs[0] : null;
            if (sub) {
                if (typeof sub.link === 'string' && sub.link) {
                    attrs.push('subtitle="' + escapeAttr(sub.link) + '"');
                }
                if (typeof sub.language === 'string' && sub.language) {
                    attrs.push('lang="' + escapeAttr(sub.language) + '"');
                }
            }

            // Always emit a (possibly empty) cpm-item so it appears in the playlist
            // even without a file (mirrors how the plugin renders empty items).
            return '[cpm-item' + (attrs.length ? ' ' + attrs.join(' ') : '') + ' /]';
        }).filter(function(s) { return s !== null; }).join('');
    }

    function buildShortcode() {
        var itemsXml = buildItemShortcodes();
        // Need either a player id (existing player, DB-backed preview) OR items
        // in memory (new player, items added before first save). Without either
        // there is nothing to preview.
        if (!playerId && !itemsXml) return null;

        var parts = [];
        if (playerId) {
            parts.push('cpm-player id="' + playerId + '"');
        } else {
            parts.push('cpm-player');
        }
        var v;
        v = getVal('cpmp_type', 'audio');
        if (v) parts.push('type="' + v + '"');
        v = getVal('cpmp_width', '');
        if (v) parts.push('width="' + v + '"');
        v = getVal('cpmp_height', '');
        if (v) parts.push('height="' + v + '"');
        v = getVal('cpmp_skin', 'device-player-skin');
        if (v) parts.push('skin="' + v + '"');
        function addBool(inputName, attrName) {
            var v = getVal(inputName, null);
            if (v === null) return;
            parts.push(attrName + '="' + v + '"');
        }
        addBool('cpmp_loop', 'loop');
        addBool('cpmp_autoplay', 'autoplay');
        addBool('cpmp_show_playlist', 'playlist');
        addBool('cpmp_playlist_download_links', 'playlist_download_links');
        // preload: 'true' → 'metadata', 'false' → 'none' (HTML spec values)
        var preloadVal = getVal('cpmp_preload', null);
        if (preloadVal !== null) {
            parts.push('preload="' + (preloadVal === 'true' ? 'metadata' : 'none') + '"');
        }
        return itemsXml
            ? '[' + parts.join(' ') + ']' + itemsXml + '[/cpm-player]'
            : '[' + parts.join(' ') + ']';
    }

    function updatePreview() {
        if (!window.cpmp_preview_data || typeof window.cpmp_preview_data.home_url !== 'string') return;
        var sc = buildShortcode();
        if (!sc) {
            $iframe.attr('src', 'about:blank').hide();
            var msg = (window.cpmp_preview_data && window.cpmp_preview_data.add_item_message) || '';
            $placeholder.text(msg).show();
            return;
        }
        var url = window.cpmp_preview_data.home_url + '?cpmp-avp-preview=' + encodeURIComponent(sc);
        if ($iframe.attr('src') !== url) {
            $iframe.attr('src', url).show();
            $placeholder.hide();
        }
    }

    updatePreview();

    function attachAutoResize($iframe) {
        var innerDoc;
        try { innerDoc = $iframe[0].contentDocument; } catch(e) { return; }
        if (!innerDoc || !innerDoc.body) return;

        var measure = function() {
            // +40 buffer for the .cpmp-preview-container wrapper padding/margin
            // around the actual rendered player; without it any inner padding
            // would force a scrollbar inside the iframe.
            var h = innerDoc.body.scrollHeight + 40;
            if (h > 0) $iframe.css('height', h + 'px');
        };

        setTimeout(measure, 50);
        setTimeout(measure, 300);
        setTimeout(measure, 800);

        if (typeof ResizeObserver !== 'undefined') {
            try { new ResizeObserver(measure).observe(innerDoc.body); } catch(e) {}
        }

        if (typeof MutationObserver !== 'undefined') {
            try { new MutationObserver(measure).observe(innerDoc.body, {
                childList: true,
                subtree: true,
                attributes: true
            }); } catch(e) {}
        }

        var media = innerDoc.querySelectorAll('img, video, audio');
        [].forEach.call(media, function(m) {
            m.addEventListener('load', measure);
            m.addEventListener('loadeddata', measure);
        });
    }

    $iframe.on('load', function(){
        attachAutoResize($iframe);
    });

    $form.on('change input', 'input, select, textarea', function(){
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(updatePreview, 300);
    });

    $(document).on('cpmp_playlist_changed', function(){
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(updatePreview, 300);
    });
});
