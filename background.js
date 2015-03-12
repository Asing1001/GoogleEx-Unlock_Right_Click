/**
 * Created by Andy on 2015/3/12.
 */

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.browserAction.setIcon({
        path: "mouse_red.png",
        tabId: tab.id
    });
    chrome.tabs.executeScript(null, {file: "unlock.js"});      
});

chrome.commands.onCommand.addListener(function(command)  //for rapid reload
{ 
  if (command == 'reload_extension')
    chrome.runtime.reload();
});

