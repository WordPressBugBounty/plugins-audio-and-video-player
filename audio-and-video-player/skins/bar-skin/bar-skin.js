/* BAR-SKIN */
var cp_skin_js = cp_skin_js || {};
cp_skin_js['bar-skin'] = function($){
    function resize(){
        $('.mejs-container.bar-skin').each(function(){
            var me = $(this);		
			setTimeout(function(){
				me.find('.mejs-controls').outerWidth(Math.max(me.outerWidth()-50, 0));
				var ct = me.find('.mejs-currenttime-container'),
					ct_o = ct.offset(),
					dc = me.find('.mejs-duration-container'),
					dc_o = dc.offset(),
					w = Math.max(dc_o['left'] - ( ct_o['left'] + ct.width() ), 0)+'px';
				me.find('.mejs-time-rail,.mejs-time-total').css({'maxWidth':w,'width':w});
			}, 200);
        });
    };
    resize();
    $(window).resize(function(){
       resize();
    });

    // Re-resize when the <video> finishes loading metadata or first frame:
    // mediaelement's wrapper grows/shrinks to the source's intrinsic dimensions
    // at that point, and the controls' absolute coordinates need to be recalculated.
    $('.mejs-container.bar-skin video').on('loadedmetadata loadeddata', function(){
        resize();
    });

    // Also observe the wrapper itself for any other dynamic size change.
    if (typeof ResizeObserver !== 'undefined') {
        $('.mejs-container.bar-skin').each(function(){
            try { new ResizeObserver(function(){ resize(); }).observe(this); } catch(e) {}
        });
    }

};
/* END: BAR-SKIN */
