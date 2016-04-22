var appName;
var objId;
var tName;

define( ['jquery','js/qlik','./js/tipped','css!./css/tipped.css','css!./css/gtStyle.css'],
function ($,qlik,tipped) {
	return {
		definition: {
			type: "items",
			component: "accordion",
			label: "Parameters",
			items: {				
				oID: {
					ref: "props.oID",
					label: "Object ID",
					type: "string",
					defaultValue: "-Enter Object ID-"
				},
				oUrl: {
					ref: "props.oUrl",
					label: "New Window URL",
					type: "string",
					defaultValue: "http://localhost:4848/extensions/oObject.html/oObject.html"
				},
				bName: {
					ref: "props.bName",
					label: "Button Name",
					type: "string",
					defaultValue: "-Enter Button Name-"
				},
				tTip: {
					ref: "props.tTip",
					label: "Tooltip",
					type: "string",
					defaultValue: "-Enter tooltip-"
				},
				tName: {
					ref: "props.tName",
					label: "Tab Name",
					type: "string",
					defaultValue: "-Enter a Tab name-"
				},
				appearance: {
					uses: "settings"
				}				
			}
		},	
		paint: function ($element,layout) {

			$element.empty();
			
			var ext_height = $element.height()-5;
			var id = layout.qInfo.qId + '_ext';
			var $Create = $( '#' + id );						
			
			appName = qlik.currApp().id;		// Current App ID
			objId = layout.props.oID;			// Object ID to show
			tName = layout.props.tName; 		// Tab name
			var oUrl = layout.props.oUrl;			// URL to open
			var bName = layout.props.bName;			// Button Name
			var tTip = layout.props.tTip; 			// Tooltip
			
			
			$Create = $( document.createElement( 'div' ) );
			$Create.attr( 'id', id );			
			gid = "ot_"+id;				
			
			$Create.html('<button id="'+gid+'" class="bton2 button3" button="submit" style="height:'+ext_height+'px;" >'+bName+'</button>');
			$element.append( $Create );				 

			tipped.create('#'+gid+'', tTip, { position: 'bottomright',fadeIn: 400,fadeOut: 180, size: 'large',behavior: 'hide'});
			
			$('#'+gid).on('click', function() {								
				window.open(oUrl, '_blank');
			});
		}
	};
} );



