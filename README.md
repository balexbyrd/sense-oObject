# sense-oObject
Open any Qlik Sense object in a new browser tab and have the option to export to excel

## Installation

1. Move oObject.btn and oObject.html to the default extension folder for Qlik Sense
2. Open Qlik Sense and add oObject.btn extension to a sheet
3. Configure properties (Object ID, New Window URL, Button Name, Tooltip, Tab Name)
* Object ID - each object added to a Qlik Sense sheet has an object ID. This object is what shows in the tab that's created
* New Window URL - if using Qlik Sense Desktop, the URL will be http://localhost:4848/extensions/oObject.html/oObject.html . Replace localhost:4848 if on Qlik Sense server
* Button Name - the name of the button in the UI
* Tooltip - text that pops up in the tooltip when a user scrolls over the button.
* Tab Name - what's is shown in the tab name when the new tab is created.

## Usage

When the button is pressed, the object is opened in a new tab, carrying the current selections with it. Selections in the new tab or the application will pass from one to the other. 

Behind the scenes, the application name/hash is passed from parent tab to child tab during the process in order to open the websocket connection > authenticate > open the app > render the object. An excel icon is located in the top right corner of the visual to enable the user to export the object to excel.

## Limitations

I've tested this in Qlik Sense 2.1.1 and Qlik Sense 2.2.3 and it works in Google Chrome. 

The exportData method in Qlik Sense is a magical function that I believe still has room for improvement. Large volumes of data have been known to be difficult to push to an excel file. For example, there's 1 million rows over 15 columns that I want to export. It'll export the file without an error, but only 100K rows will show up :( I think this will be updated in future versions, just keep this in mind.

### Note: If using Qlik Sense +2.2 you must open up the oObject.html file and comment & uncomment the css and jss files they conveniently changed between the versions. The instructions are (should be) obvious :D

## License

Free to use but keep me on your Christmas list.
