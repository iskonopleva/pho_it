"use strict";

// Once the selection message is received, launch the content script to replace the selection with "Pho"
// Gotta get the ID of the current tab before executing the content script 
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



