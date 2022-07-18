// NOTIFICATIONS SYNTAX
/*
chrome.notifications.create(
	'test1',
	{
		type: 'basic',
		iconUrl: 'cherry.jpg',
		title: 'test1',
		message: 'notifications test',
		priority: 1
	}
)
*/
"use strict";

function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = chrome.tabs.query(queryOptions);
  return tab;
}

// Once the selection message is received, launch the content script to replace the selection with "Pho"
chrome.runtime.onMessage.addListener( function(message, sender, sendResponse) {
  	if(message.from && message.from === "popup"){
    	switch(message.action){
      		case "START_SELECTION":
				chrome.tabs.query({currentWindow: true, active : true}, function(tabArray){
	  				chrome.scripting.executeScript({
	        			target: { tabId: tabArray[0].id},
	        			files: ['content_scripts/selector.js']
	        		}); 
				});
        		console.log("Selection replaced");
        		break;
    }
  }
});



