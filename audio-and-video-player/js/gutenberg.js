jQuery(function(){
	( function( blocks, element ) {
		var el 					= element.createElement,
			InspectorControls  	= ('blockEditor' in wp) ? wp.blockEditor.InspectorControls : wp.editor.InspectorControls,
			MediaUpload			= ('blockEditor' in wp) ? wp.blockEditor.MediaUpload : wp.editor.MediaUpload;

		/* Plugin Category */
		blocks.getCategories().push({slug: 'cpmp', title: 'Audio and Video Player'});

		/* ICONS */
		const iconCPMP_gallery = el('img', { width: 20, height: 20, src:  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41IiB2aWV3Qm94PSIwIDAgNDggNDgiPjxwYXRoIGQ9Ik0wIDBoNDh2NDhIMHoiIHN0eWxlPSJmaWxsOiMyMTQ1ZTYiLz48cGF0aCBkPSJNOC43MjQgMTUuNDE5aDI3LjQ1NXYyNy40NTVIOC43MjR6IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmZmO3N0cm9rZS13aWR0aDoyLjA4cHgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcuMDgzIC05LjE0NikiLz48cGF0aCBkPSJNNC4yOTkgOS40MTloMzMuNTkyVjM2LjM3SDQuMjk5eiIgc3R5bGU9ImZpbGw6IzIxNDVlNiIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLjk0MDg2IC40NCAyLjQ2KSIvPjxwYXRoIGQ9Ik0xMS43MjQgNi43NzVoNS40OTl2MS40N2gtNS40OTl6IiBzdHlsZT0iZmlsbDojMjE0NWU2IiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxLjY2MzY4IC4wODMgLTMuOTU4KSIvPjxwYXRoIGQ9Ik00MC4zMTEgMzAuMDY5aDEuNzg2djUuNDloLTEuNzg2eiIgc3R5bGU9ImZpbGw6IzIxNDVlNiIgdHJhbnNmb3JtPSJtYXRyaXgoMS4yNDU1OCAwIDAgMSAtMTAuMTk5IC45MTQpIi8+PHBhdGggZD0iTTguNzI0IDE1LjQxOWgyNy40NTV2MjcuNDU1SDguNzI0eiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2ZmZjtzdHJva2Utd2lkdGg6Mi4wOHB4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjA4MyAtNS4xNDYpIi8+PHBhdGggZD0iTTQuMjk5IDkuNDE5aDMzLjU5MlYzNi4zN0g0LjI5OXoiIHN0eWxlPSJmaWxsOiMyMTQ1ZTYiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC45NDA4NiAuNDQgMi40NikiLz48cGF0aCBkPSJNNC4yOTkgOS40MTloMzMuNTkyVjM2LjM3SDQuMjk5eiIgc3R5bGU9ImZpbGw6IzIxNDVlNiIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLjk0MDg2IC40NCAyLjQ2KSIvPjxwYXRoIGQ9Ik0zNi4yMDcgMzQuMjc3aDIuMDA5djQuNjExaC0yLjAwOXoiIHN0eWxlPSJmaWxsOiMyMTQ1ZTYiIHRyYW5zZm9ybT0ibWF0cml4KDEuMTMzOCAwIDAgMSAtNSAuODg5KSIvPjxwYXRoIGQ9Ik04LjcyNCAxNS40MTloMjcuNDU1djI3LjQ1NUg4LjcyNHoiIHN0eWxlPSJmaWxsOiMyMTQ1ZTY7c3Ryb2tlOiNmZmY7c3Ryb2tlLXdpZHRoOjIuMDhweCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLS45MTcgLTEuMTQ2KSIvPjxwYXRoIGQ9Im0yNS4xMDIgMTkuNDcgOS4yMjQgOS4yMjQtOS4yMjQgOS4yMjN6IiBzdHlsZT0iZmlsbDojZmZmIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjUyMjY2IDAgMCAxIC0yMy43MSAtLjY5NCkiLz48L3N2Zz4=" } );

		const iconCPMP_audio = el('img', { width: 20, height: 20, src:  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS41IiB2aWV3Qm94PSIwIDAgNDggNDgiPjxwYXRoIGQ9Ik0wIDBoNDh2NDhIMHoiIHN0eWxlPSJmaWxsOiMyMTQ1ZTYiLz48cGF0aCBkPSJNMTYuODU4IDE2LjMzOXYyMS4xODhjMCAuNzgxLS42NzIgMS40MTYtMS40OTkgMS40MTZINC45NWMtLjgyNyAwLTEuNDk5LS42MzUtMS40OTktMS40MTZWMTYuMzM5YzAtLjc4Mi42NzItMS40MTYgMS40OTktMS40MTZoMTAuNDA5Yy44MjcgMCAxLjQ5OS42MzQgMS40OTkgMS40MTYiIHN0eWxlPSJmaWxsOiNmZmYiIHRyYW5zZm9ybT0ibWF0cml4KC42NTg0MyAwIDAgLjY5Njg5IDQuMzY2IDUuMjMxKSIvPjxwYXRoIGQ9Ik0zMS43MDEgOS43MnYzMS40NzNhMS44MiAxLjgyIDAgMCAxLTEuODIgMS44MTlzLTE0LjI0Mi02LjgxNS0xNC4yNDItNy44MTlWMTUuNzJjMC0xLjAwNCAxNC4yNDItNy44MiAxNC4yNDItNy44MiAxLjAwNCAwIDEuODIuODE2IDEuODIgMS44MiIgc3R5bGU9ImZpbGw6I2ZmZiIgdHJhbnNmb3JtPSJtYXRyaXgoLjgwOTAyIDAgMCAuODIyNiAxLjgyOCAzLjA2KSIvPjxwYXRoIGQ9Ik01Ny4xMTcgNy45NmExNy42IDE3LjYgMCAwIDEgNS4yNyAzLjYyOEExNy41IDE3LjUgMCAwIDEgNjcuNTMxIDI0YzAgNy4xNDctNC4yOCAxMy4zMDItMTAuNDE0IDE2LjA0IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmZmO3N0cm9rZS13aWR0aDoyLjU1cHgiIHRyYW5zZm9ybT0ibWF0cml4KC44MDkwMiAwIDAgLjgyMjYgLTEzLjI3MyA0LjI1OCkiLz48cGF0aCBkPSJNNTguNzUzIDguNzk2YzUuMjQ2IDMuMDM3IDguNzc4IDguNzExIDguNzc4IDE1LjIwNHMtMy41MzIgMTIuMTY3LTguNzc4IDE1LjIwNCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2ZmZjtzdHJva2Utd2lkdGg6NC41MXB4IiB0cmFuc2Zvcm09Im1hdHJpeCguNDU4MjYgMCAwIC40NjU5NSA0LjM5NCAxMi44MTcpIi8+PC9zdmc+" } );

		const iconCPMP_video = el('img', { width: 20, height: 20, src:  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MiIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNMCAwaDQ4djQ4SDB6IiBzdHlsZT0iZmlsbDojMjE0NWU2Ii8+PHBhdGggZD0iTTE2Ljg1OCAxNi4ydjIxLjQ2NWMwIC43MDUtLjM1NyAxLjI3OC0uNzk3IDEuMjc4SDQuMjQ4Yy0uNDQgMC0uNzk3LS41NzMtLjc5Ny0xLjI3OFYxNi4yYzAtLjcwNS4zNTctMS4yNzcuNzk3LTEuMjc3aDExLjgxM2MuNDQgMCAuNzk3LjU3Mi43OTcgMS4yNzciIHN0eWxlPSJmaWxsOiNmZmYiIHRyYW5zZm9ybT0ibWF0cml4KDIuNDMyMzEgMCAwIDEuNTE2NjUgLS43IC0xNi44NDcpIi8+PHBhdGggZD0iTTE2LjAxNCAxNi4yMjJoMTQuMTU0djE4LjQyNkgxNi4wMTR6IiBzdHlsZT0iZmlsbDojMjE0NWU2IiB0cmFuc2Zvcm09Im1hdHJpeCgxLjIyMDcyIDAgMCAxIC0zLjYyNSAtMS40MzUpIi8+PHBhdGggZD0iTTE2LjAxNCAxNi4yMjJoMTQuMTU0djE4LjQyNkgxNi4wMTR6IiBzdHlsZT0iZmlsbDojMjE0NWU2IiB0cmFuc2Zvcm09Im1hdHJpeCgxLjIyMDcyIDAgMCAuMzIyNTcgLTMuNjI1IC41NTIpIi8+PHBhdGggZD0iTTE2LjAxNCAxNi4yMjJoMTQuMTU0djE4LjQyNkgxNi4wMTR6IiBzdHlsZT0iZmlsbDojMjE0NWU2IiB0cmFuc2Zvcm09Im1hdHJpeCgxLjIyMDcyIDAgMCAuMzIyNTcgLTMuNjI1IDMxLjAzOCkiLz48cGF0aCBkPSJNMTEuODA2IDkuMjQxdjEuNDY2YS43MzQuNzM0IDAgMCAxLS43MzQuNzMzSDkuMzUxYS43MzMuNzMzIDAgMCAxLS43MzMtLjczM1Y5LjI0MWMwLS40MDUuMzI4LS43MzQuNzMzLS43MzRoMS43MjFjLjQwNSAwIC43MzQuMzI5LjczNC43MzQiIHN0eWxlPSJmaWxsOiMyMTQ1ZTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMDU3IC0uOTc0KSIvPjxwYXRoIGQ9Ik0xMS44MDYgOS4yNDF2MS40NjZhLjczNC43MzQgMCAwIDEtLjczNC43MzNIOS4zNTFhLjczMy43MzMgMCAwIDEtLjczMy0uNzMzVjkuMjQxYzAtLjQwNS4zMjgtLjczNC43MzMtLjczNGgxLjcyMWMuNDA1IDAgLjczNC4zMjkuNzM0LjczNCIgc3R5bGU9ImZpbGw6IzIxNDVlNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS4wNTcgNC4wMjYpIi8+PHBhdGggZD0iTTExLjgwNiA5LjI0MXYxLjQ2NmEuNzM0LjczNCAwIDAgMS0uNzM0LjczM0g5LjM1MWEuNzMzLjczMyAwIDAgMS0uNzMzLS43MzNWOS4yNDFjMC0uNDA1LjMyOC0uNzM0LjczMy0uNzM0aDEuNzIxYy40MDUgMCAuNzM0LjMyOS43MzQuNzM0IiBzdHlsZT0iZmlsbDojMjE0NWU2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjA1NyA5LjAyNikiLz48cGF0aCBkPSJNMTEuODA2IDkuMjQxdjEuNDY2YS43MzQuNzM0IDAgMCAxLS43MzQuNzMzSDkuMzUxYS43MzMuNzMzIDAgMCAxLS43MzMtLjczM1Y5LjI0MWMwLS40MDUuMzI4LS43MzQuNzMzLS43MzRoMS43MjFjLjQwNSAwIC43MzQuMzI5LjczNC43MzQiIHN0eWxlPSJmaWxsOiMyMTQ1ZTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMDU3IDE0LjAyNikiLz48cGF0aCBkPSJNMTEuODA2IDkuMjQxdjEuNDY2YS43MzQuNzM0IDAgMCAxLS43MzQuNzMzSDkuMzUxYS43MzMuNzMzIDAgMCAxLS43MzMtLjczM1Y5LjI0MWMwLS40MDUuMzI4LS43MzQuNzMzLS43MzRoMS43MjFjLjQwNSAwIC43MzQuMzI5LjczNC43MzQiIHN0eWxlPSJmaWxsOiMyMTQ1ZTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMDU3IDE5LjAyNikiLz48cGF0aCBkPSJNMTEuODA2IDkuMjQxdjEuNDY2YS43MzQuNzM0IDAgMCAxLS43MzQuNzMzSDkuMzUxYS43MzMuNzMzIDAgMCAxLS43MzMtLjczM1Y5LjI0MWMwLS40MDUuMzI4LS43MzQuNzMzLS43MzRoMS43MjFjLjQwNSAwIC43MzQuMzI5LjczNC43MzQiIHN0eWxlPSJmaWxsOiMyMTQ1ZTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMDU3IDI0LjAyNikiLz48cGF0aCBkPSJNMTEuODA2IDkuMjQxdjEuNDY2YS43MzQuNzM0IDAgMCAxLS43MzQuNzMzSDkuMzUxYS43MzMuNzMzIDAgMCAxLS43MzMtLjczM1Y5LjI0MWMwLS40MDUuMzI4LS43MzQuNzMzLS43MzRoMS43MjFjLjQwNSAwIC43MzQuMzI5LjczNC43MzQiIHN0eWxlPSJmaWxsOiMyMTQ1ZTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMDU3IDI5LjAyNikiLz48cGF0aCBkPSJNMTEuODA2IDkuMjQxdjEuNDY2YS43MzQuNzM0IDAgMCAxLS43MzQuNzMzSDkuMzUxYS43MzMuNzMzIDAgMCAxLS43MzMtLjczM1Y5LjI0MWMwLS40MDUuMzI4LS43MzQuNzMzLS43MzRoMS43MjFjLjQwNSAwIC43MzQuMzI5LjczNC43MzQiIHN0eWxlPSJmaWxsOiMyMTQ1ZTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI3LjA1NyAtLjk3NCkiLz48cGF0aCBkPSJNMTEuODA2IDkuMjQxdjEuNDY2YS43MzQuNzM0IDAgMCAxLS43MzQuNzMzSDkuMzUxYS43MzMuNzMzIDAgMCAxLS43MzMtLjczM1Y5LjI0MWMwLS40MDUuMzI4LS43MzQuNzMzLS43MzRoMS43MjFjLjQwNSAwIC43MzQuMzI5LjczNC43MzQiIHN0eWxlPSJmaWxsOiMyMTQ1ZTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI3LjA1NyA0LjAyNikiLz48cGF0aCBkPSJNMTEuODA2IDkuMjQxdjEuNDY2YS43MzQuNzM0IDAgMCAxLS43MzQuNzMzSDkuMzUxYS43MzMuNzMzIDAgMCAxLS43MzMtLjczM1Y5LjI0MWMwLS40MDUuMzI4LS43MzQuNzMzLS43MzRoMS43MjFjLjQwNSAwIC43MzQuMzI5LjczNC43MzQiIHN0eWxlPSJmaWxsOiMyMTQ1ZTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI3LjA1NyA5LjAyNikiLz48cGF0aCBkPSJNMTEuODA2IDkuMjQxdjEuNDY2YS43MzQuNzM0IDAgMCAxLS43MzQuNzMzSDkuMzUxYS43MzMuNzMzIDAgMCAxLS43MzMtLjczM1Y5LjI0MWMwLS40MDUuMzI4LS43MzQuNzMzLS43MzRoMS43MjFjLjQwNSAwIC43MzQuMzI5LjczNC43MzQiIHN0eWxlPSJmaWxsOiMyMTQ1ZTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI3LjA1NyAxNC4wMjYpIi8+PHBhdGggZD0iTTExLjgwNiA5LjI0MXYxLjQ2NmEuNzM0LjczNCAwIDAgMS0uNzM0LjczM0g5LjM1MWEuNzMzLjczMyAwIDAgMS0uNzMzLS43MzNWOS4yNDFjMC0uNDA1LjMyOC0uNzM0LjczMy0uNzM0aDEuNzIxYy40MDUgMCAuNzM0LjMyOS43MzQuNzM0IiBzdHlsZT0iZmlsbDojMjE0NWU2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNy4wNTcgMTkuMDI2KSIvPjxwYXRoIGQ9Ik0xMS44MDYgOS4yNDF2MS40NjZhLjczNC43MzQgMCAwIDEtLjczNC43MzNIOS4zNTFhLjczMy43MzMgMCAwIDEtLjczMy0uNzMzVjkuMjQxYzAtLjQwNS4zMjgtLjczNC43MzMtLjczNGgxLjcyMWMuNDA1IDAgLjczNC4zMjkuNzM0LjczNCIgc3R5bGU9ImZpbGw6IzIxNDVlNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjcuMDU3IDI0LjAyNikiLz48cGF0aCBkPSJNMTEuODA2IDkuMjQxdjEuNDY2YS43MzQuNzM0IDAgMCAxLS43MzQuNzMzSDkuMzUxYS43MzMuNzMzIDAgMCAxLS43MzMtLjczM1Y5LjI0MWMwLS40MDUuMzI4LS43MzQuNzMzLS43MzRoMS43MjFjLjQwNSAwIC43MzQuMzI5LjczNC43MzQiIHN0eWxlPSJmaWxsOiMyMTQ1ZTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI3LjA1NyAyOS4wMjYpIi8+PC9zdmc+" } );

		/* Shortcode generator */
		function shortcodeGenerator(attrs)
		{
            var str = '[cpm-player';
            for(var i in attrs)
            {
                str += ' '+i+'="'+(attrs[i]+'').replace(/"/g, '&quot;')+'"';
            }
            str += (('id' in attrs || 'dir' in attrs) ? ' /' : '')+']';
			return str;
		};

		function extractAttsFromShortcode(shortcode)
		{
            var parts = shortcode.match(/\[[^\]]*\]/),
                obj = {
                    'shortcode' : (parts) ? parts[0] : '',
                    'attributes': {}
                };

            if(obj.shortcode)
            {
                obj.shortcode.match(/[\w-]+=".+?"/g).forEach(function(attribute) {
                    attribute = attribute.match(/([\w-]+)="(.+?)"/);
                    obj.attributes[attribute[1]] = attribute[2];
                });
            }

            return obj;
		};

		function createNewPlayer(props, type)
		{
			var children	  = [],
				focus 	  	  = props.isSelected,
				base_opt_name = 'cpmp-skin-list-option-',
				shortcode     = props.attributes.shortcode || '',
				attrs		  = extractAttsFromShortcode(shortcode)['attributes'],
				skin		  = 'device-player-skin',
				width		  = 450,
				height		  = 300,
				autoplay	  = 'false',
				shuffle	      = 'false',
				playlist	  = 'true',
				playlist_download_links	  = 'false',
                dir           = '',
				iframe		  = '',
				skins_options = [];

			/* Extract the current skin selected */
			if(attrs)
			{
				skin 	 = attrs[ 'skin' ] || skin;
				width  	 = ('width' in attrs) ? attrs['width'] : width;
				height 	 = ('height' in attrs) ? attrs['height'] : height;
				playlist = ('playlist' in attrs) ? attrs['playlist'] : playlist;
				playlist_download_links = ('playlist_download_links' in attrs) ? attrs['playlist_download_links'] : playlist_download_links;
				autoplay = ('autoplay' in attrs) ? attrs['autoplay'] : autoplay;
				shuffle  = ('shuffle' in attrs) ? attrs['shuffle'] : shuffle;
                dir      = ('dir' in attrs) ? attrs['dir'] : dir;
                iframe   = ('iframe' in attrs) ? attrs['iframe'] : iframe;
			}

			/* Populate the skins list if it has not been populated previously */
			skins_options.push(el('option',{key: base_opt_name+0, value: ''}, 'Select a skin'));
			if(
				typeof cpmp_insert_media_player != 'undefined' &&
				typeof cpmp_insert_media_player['skins'] != 'undefined'
			)
			{
				jQuery('<span>'+cpmp_insert_media_player.skins+'</span>')
				.find('option')
				.each(
					function()
					{
						var e = jQuery(this),
							v = e.val(),
							t = e.text(),
							o = {key:base_opt_name+v, value:v};

						skins_options.push(el('option', o, t));
					}
				);
			}

			if(props.attributes.shortcode.length == 0  || props.attributes.tmp != '')
			{
				children.push(
					el(
						MediaUpload,
						{
							id 			: 'cpmp-mediaupload',
							key			: 'cpmp-mediaupload',
							title		: 'Select the '+type+' files',
							allowedTypes: type,
							multiple	: true,
							onSelect	: function(data)
							{
								var player = "",
									playlist = "\n";

								if(data.length)
								{
                                    for(var i in data)
									{
										var fileObj = data[i],
											url 	= fileObj.url,
											name 	= '';

										if(('title' in fileObj) && fileObj['title'].length) name = fileObj['title'];
										else if(('description' in fileObj) && fileObj['description'].length) name = fileObj['description'];
										else name = fileObj['filename'];
										playlist += "[cpm-item file=\""+url+"\"]"+name+"[/cpm-item]\n";
									}
								}
								player = '[cpm-player skin="device-player-skin" width="450" playlist="true" autoplay="false" shuffle="false" type="'+type+'"]'+playlist+'[/cpm-player]';
								props.setAttributes({shortcode:player.replace(/[\r\n]/g, '')});
							},
							render  	: function(obj)
							{
								return el(
									'button',
									{
										onClick: obj.open,
										className: "button-secondary",
										style:{fontSize:'18px'}
									},
									'Open Media Library'
								);
							}
						}
					),
					el(
						'div',
						{
                            key: 'cpmp_dir_label',
                            style:{fontStyle:'italic', paddingTop:'10px', paddingBottom:'10px'}
                        },
						' - or - Enter the name of the subdirectory inside the "/ wp-content / Uploads /" directory containing the media files and press "enter":'
					),
                    el('input',
						{
							type: 'text',
							key: 'cpmp_dir',
							value: dir,
                            style:{width:'100%'},
                            onKeyDown: function(evt){
                                props.setAttributes({tmp:(new Date()).valueOf()});
                                if(evt && evt.keyCode == 13){props.setAttributes({tmp:''});}
                                return true;
                            },
							onChange: function(evt){
                                var shortcode = props.attributes.shortcode,
                                    obj = extractAttsFromShortcode(shortcode);

                                obj['attributes']['dir'] = evt.target.value.replace(/"/g, '');
                                obj['attributes']['type'] = type;
                                obj['attributes']['width'] = 450;
                                if(type == 'video') obj['attributes']['height'] = 300;
                                obj['attributes']['autoplay'] = 'false';
                                obj['attributes']['shuffle']  = 'false';
                                obj['attributes']['playlist'] = 'true';

                                shortcode = shortcode.replace(obj.shortcode, shortcodeGenerator(obj['attributes'])).replace(/[\r\n]/g, '');

                                props.setAttributes({shortcode: shortcode});
							}
						}
                    )
				);
			}
			else
			{
				children.push(
					el(
						'textarea',
						{
							key		: 'cpmp-shortcode',
							style	: {width: '100%'},
							value	: props.attributes.shortcode,
							onChange : function(evt)
							{
								props.setAttributes({ shortcode : evt.target.value.replace(/[\r\n]/g, '') });
							}
						}
					)
				);

				children.push(
					el(
						'div', {className: 'cpmp-iframe-container', key:'cpmp_iframe_container'},
						el('div', {className: 'cpmp-iframe-overlay', key:'cpmp_iframe_overlay'}),
						el('iframe',
							{
								key: 'cpmp_iframe',
								src: cpmp_gutenberg_editor_config.url+encodeURIComponent(props.attributes.shortcode.replace(/width\s*=\s*['"][^'"]*['"]/i,'')),
								height: 0,
								width: 500,
								scrolling: 'no'
							}
						)
					)
				);
			}

			if(!!focus)
			{
				children.push(
					el(
						InspectorControls,
						{key: 'cpmp-inspector'},
                        el(
                        	'div',
                            {
                                key: 'cp_inspector_container',
                                style:{paddingLeft:'20px',paddingRight:'20px'}
                            },
                            [
                                el('div', {className: 'cpmp-inspector-container', key: 'cpmp-inspector-container'},
                                    el('p', {key : 'cpmp-label'}, 'Select Skin'),
                                    el('select',
                                        {
                                            key: 'cpmp-skins-list',
                                            style:{width:'100%'},
                                            onChange: function(evt)
                                            {
                                                var shortcode = props.attributes.shortcode,
                                                    obj = extractAttsFromShortcode(shortcode);

                                                obj['attributes']['skin'] = evt.target.value;

                                                shortcode = shortcode.replace(obj.shortcode, shortcodeGenerator(obj['attributes'])).replace(/[\r\n]/g, '');

                                                props.setAttributes({shortcode: shortcode});
                                            },
                                            value : skin
                                        },
                                        skins_options
                                    ),
                                    el('p', {key: 'cpmp-width-label'}, 'Player width'),
                                    el('input',
                                        {
                                            key: 'cpmp-player-width',
                                            style:{width:'100%'},
                                            type: 'text',
                                            onChange: function(evt)
                                            {
                                                var shortcode = props.attributes.shortcode,
                                                    obj = extractAttsFromShortcode(shortcode);

                                                obj['attributes']['width'] = evt.target.value.replace(/^\s+/, '').replace(/\s+$/);

                                                shortcode = shortcode.replace(obj.shortcode, shortcodeGenerator(obj['attributes'])).replace(/[\r\n]/g, '');

                                                props.setAttributes({shortcode: shortcode});
                                            },
                                            value: width
                                        }
                                    ),
                                    (type == 'audio')
                                    ? null
                                    : (
                                    [
                                        el('p', {key: 'cpmp-height-label'}, 'Player height'),
                                        el('input',
                                            {
                                                key: 'cpmp-player-height',
                                                style:{width:'100%'},
                                                type: 'text',
                                                onChange: function(evt)
                                                {
                                                    var shortcode = props.attributes.shortcode,
                                                    obj = extractAttsFromShortcode(shortcode);

                                                    obj['attributes']['height'] = evt.target.value.replace(/^\s+/, '').replace(/\s+$/);

                                                    shortcode = shortcode.replace(obj.shortcode, shortcodeGenerator(obj['attributes'])).replace(/[\r\n]/g, '');

                                                    props.setAttributes({shortcode: shortcode});
                                                },
                                                value: height
                                            }
                                        )
                                    ]
                                    ),
                                    el( 'p', {key: 'cpmp-separator'}),
                                    el(
                                        'input',
                                        {
                                            type 	: 'checkbox',
                                            key 	: 'cpmp-player-playlist',
                                            checked	: (playlist == 1 || playlist == 'true'),
                                            onChange: function(evt){
                                                var shortcode = props.attributes.shortcode,
                                                    obj = extractAttsFromShortcode(shortcode);

                                                obj['attributes']['playlist'] = evt.target.checked ? 'true' : 'false';

                                                shortcode = shortcode.replace(obj.shortcode, shortcodeGenerator(obj['attributes'])).replace(/[\r\n]/g, '');

                                                props.setAttributes({shortcode: shortcode});
                                            },
                                        },
                                    ),
                                    el(
                                        'label',
                                        {
                                            key : 'cpmp-player-playlist-label',
                                        },
                                        'Show playlist'
                                    ),
                                    el( 'p', {key: 'cpmp-separator-1'}),
                                    el(
                                        'input',
                                        {
                                            type 	: 'checkbox',
                                            key 	: 'cpmp-player-playlist-download',
                                            checked	: (playlist_download_links == 1 || playlist_download_links == 'true'),
                                            onChange: function(evt){
                                                var shortcode = props.attributes.shortcode,
                                                    obj = extractAttsFromShortcode(shortcode);

                                                obj['attributes']['playlist_download_links'] = evt.target.checked ? 'true' : 'false';

                                                shortcode = shortcode.replace(obj.shortcode, shortcodeGenerator(obj['attributes'])).replace(/[\r\n]/g, '');

                                                props.setAttributes({shortcode: shortcode});
                                            },
                                        },
                                    ),
                                    el(
                                        'label',
                                        {
                                            key : 'cpmp-player-playlist-download-label',
                                        },
                                        'Include download links in the playlist'
                                    ),
                                    el( 'p', {key: 'cpmp-separator-2'}),
                                    el(
                                        'input',
                                        {
                                            type 	: 'checkbox',
                                            key 	: 'cpmp-player-shuffle',
                                            checked	: (shuffle == 1 || shuffle == 'true'),
                                            onChange: function(evt){
                                                var shortcode = props.attributes.shortcode,
                                                    obj = extractAttsFromShortcode(shortcode);

                                                obj['attributes']['shuffle'] = evt.target.checked ? 'true' : 'false';

                                                shortcode = shortcode.replace(obj.shortcode, shortcodeGenerator(obj['attributes'])).replace(/[\r\n]/g, '');

                                                props.setAttributes({shortcode: shortcode});
                                            },
                                        },
                                    ),
                                    el(
                                        'label',
                                        {
                                            key : 'cpmp-player-shuffle-label',
                                        },
                                        'Shuffle'
                                    ),
                                    el( 'p', {key: 'cpmp-separator-3'}),
                                    el(
                                        'input',
                                        {
                                            type 	: 'checkbox',
                                            key 	: 'cpmp-player-autoplay',
                                            checked	: (autoplay == 1 || autoplay == 'true'),
                                            onChange: function(evt){
                                                var shortcode = props.attributes.shortcode,
                                                    obj = extractAttsFromShortcode(shortcode);

                                                obj['attributes']['autoplay'] = evt.target.checked ? 'true' : 'false';

                                                shortcode = shortcode.replace(obj.shortcode, shortcodeGenerator(obj['attributes'])).replace(/[\r\n]/g, '');

                                                props.setAttributes({shortcode: shortcode});
                                            },
                                        },
                                    ),
                                    el(
                                        'label',
                                        {
                                            key : 'cpmp-player-autoplay-label',
                                        },
                                        'Autoplay (Some browsers do not support autoplay)'
                                    ),
                                    el( 'p', {key: 'cpmp-separator-4'}),
									el(
										'div',
										{
											key : 'cpmp-iframe-container'
										},
										el(
											'input',
											{
												type: 'checkbox',
												key: 'cpmp-iframe',
												checked: (iframe == 1 || iframe == 'true'),
												onChange: function(evt){
													var shortcode = props.attributes.shortcode,
                                                    obj = extractAttsFromShortcode(shortcode);
													if(evt.target.checked)
														obj['attributes']['iframe'] = 1;
													else if ( 'iframe' in obj['attributes'] ) delete obj['attributes']['iframe'];

													shortcode = shortcode.replace(obj.shortcode, shortcodeGenerator(obj['attributes'])).replace(/[\r\n]/g, '');

													props.setAttributes({shortcode: shortcode});
												}
											}
										),
										el(
											'span',
											{
												key: 'cpcff_iframe_label'
											},
											'Isolate player in iframe'
										)
									),
                                    el( 'p', {key: 'cpmp-separator-5'}),
                                    el(
                                        'div',
                                        {
                                            key : 'cpmp-link-container'
                                        },
                                        el(
                                            'a',
                                            {
                                                key : 'cpmp-create-player',
                                                target:'_blank',
                                                href: 'options-general.php?page=codepeople-media-player.php'
                                            },
                                            'Go to the players gallery'
                                        )
                                    ),
                                    el(
                                        'p',
                                        {
                                            key : 'cpmp-player-warning'
                                        },
                                        'Some settings are applied only to the public player. Please, save the page modifications and visit the public page.'
                                    )
                                )
                            ]
                        )
					)
				);
			}
			return children;
		};

		/* Create new Audio Player */
		blocks.registerBlockType( 'cpmp/new-audio-player', {
			title: 'New Audio Player',
			icon: iconCPMP_audio,
			category: 'cpmp',
			supports: {
				customClassName	: false,
				className		: false,
				html			: false
			},
			attributes: {
				shortcode : {
					type 	: 'string',
					default : ''
				},
                tmp : {
					type 	: 'string',
					default : ''
				}
			},

			edit: function( props ) {
				return createNewPlayer(props, 'audio');
			},

			save: function( props ) {
				return el(element.RawHTML, null, props.attributes.shortcode);
			}
		});

		/* Create new Video Player */
		blocks.registerBlockType( 'cpmp/new-video-player', {
			title: 'New Video Player',
			icon: iconCPMP_video,
			category: 'cpmp',
			supports: {
				customClassName	: false,
				className		: false,
				html			: false
			},
			attributes: {
				shortcode : {
					type 	: 'string',
					default : ''
				},
                tmp : {
					type 	: 'string',
					default : ''
				}
			},

			edit: function( props ) {
				return createNewPlayer(props, 'video');
			},

			save: function( props ) {
				return el(element.RawHTML, null, props.attributes.shortcode);
			}
		});

		/* Insert Player From Players Gallery */
		blocks.registerBlockType( 'cpmp/from-gallery', {
			title: 'Insert Player From Gallery',
			icon: iconCPMP_gallery,
			category: 'cpmp',
			supports: {
				customClassName	: false,
				className		: false,
				html			: false
			},
			attributes: {
				id : {
					type : 'string',
					default : ''
				},
				iframe : {
					type : 'string',
					default : ''
				}
			},

			edit: function( props ) {
				var children 	  = [],
					focus 	  	  = props.isSelected,
					base_opt_name = 'cpmp-list-option-',
					ids_options	  = [],
					id   	  	  = props.attributes.id || '',
					iframe   	  = props.attributes.iframe || '',
					shortcode_attrs = { id: id};

				if ( iframe != '' ) shortcode_attrs['iframe'] = iframe;

				/* Populate the options list if it has not been populated previously */
				ids_options.push(el('option',{key: base_opt_name+0, value: ''}, 'Select a player'));
				if(
					typeof cpmp_insert_media_player != 'undefined' &&
					typeof cpmp_insert_media_player['tag'] != 'undefined'
				)
				{
					jQuery('<span>'+cpmp_insert_media_player.tag+'</span>')
					.find('option')
					.each(
						function()
						{
							var e = jQuery(this),
								v = e.val(),
								t = e.text(),
								o = {key:base_opt_name+v, value:v};

							if(typeof id == 'undefined') id = v;
							ids_options.push(el('option', o, t));
						}
					);
				}

				children.push(
					el(
						'textarea',
						{
							key		: 'cpmp-shortcode',
							type	: 'text',
							style	: { width: '100%'},
							value	: shortcodeGenerator(shortcode_attrs),
							onChange : function(evt)
							{
								var id = '',
									sc = wp.shortcode.next('codepeople-html5-media-player', evt.target.value);
								if(!sc) sc = wp.shortcode.next('cpm-player', evt.target.value);
								if(sc) id = sc.shortcode.attrs.named[ 'id' ] || '';
								props.setAttributes({ id : id });
							}
						}
					)
				);

				children.push(
					el(
						'div', {className: 'cpmp-iframe-container', key: 'cpmp_iframe_container'},
						el('div', {className: 'cpmp-iframe-overlay', key: 'cpmp_iframe_overlay'}),
						el('iframe',
							{
								key: 'cpmp_iframe',
								src: cpmp_gutenberg_editor_config.url+encodeURIComponent(shortcodeGenerator(shortcode_attrs)),
								height: 0,
								width: 500,
								scrolling: 'no'
							}
						)
					)
				);

				if(!!focus)
				{
					children.push(
						el(
							InspectorControls,
							{key: 'cpmp-inspector'},
							el(
                                'div',
                                {
                                    key: 'cp_inspector_container',
                                    style:{paddingLeft:'20px',paddingRight:'20px'}
                                },
                                [
                                    el('div', {className: 'cpmp-inspector-container', key: 'cpmp-inspector-container'},
                                        el('p', {key : 'cpmp-label'}, 'Select the Player'),
                                        el('select',
                                            {
                                                key: 'cpmp-list',
                                                style:{width:'100%'},
                                                onChange: function(evt){
                                                    props.setAttributes({id: evt.target.value});
                                                },
                                                value : id
                                            },
                                            ids_options
                                        ),
                                        el( 'p', {key: 'cpmp-separator'}),
                                        el(
                                            'div',
                                            {
                                                key : 'cpmp-link-container'
                                            },
                                            el(
                                                'a',
                                                {
                                                    key : 'cpmp-create-player',
                                                    href: 'options-general.php?page=codepeople-media-player.php'
                                                },
                                                'Create or edit players'
                                            )
                                        ),
										el( 'p', {key: 'cpmp-separator-2'}),
                                        el(
                                            'div',
                                            {
                                                key : 'cpmp-iframe-container'
                                            },
                                            el(
												'input',
												{
													type: 'checkbox',
													key: 'cpmp-iframe',
													checked: props.attributes.iframe * 1,
													onChange: function(evt){
														props.setAttributes({iframe: String( evt.target.checked ? 1 : '' ) });
													},

												}
											),
											el(
												'span',
												{
													key: 'cpcff_iframe_label'
												},
												'Isolate player in iframe'
											)
                                        )
                                    )
                                ]
                            )
						)
					);
				}
				return children;
			},

			save: function( props ) {
				var iframe = props.attributes.iframe || '',
					shortcode_attrs = { id: props.attributes.id || '' };

				if ( iframe != '' ) shortcode_attrs['iframe'] = iframe;
				return shortcodeGenerator(shortcode_attrs);
			}
		});

	} )(
		window.wp.blocks,
		window.wp.element
	);
});