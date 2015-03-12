/**
 * Created by Andy on 2015/3/12.
 */
var defaultIcon = "mouse_blue.png";

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.browserAction.setIcon({
        path: changeIcon()
        //tabId: sender.tab.id
    });

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {click:true}, function(response) {

        });
    });
});

function changeIcon(){
    return defaultIcon = defaultIcon == "mouse_blue.png" ? "mouse_red.png" : "mouse_blue.png";
}



//
//function defaultHandler(event) {
//    event.returnValue = true;
//}
//for (event_type in ['selectstart', 'copy', 'cut', 'paste', 'keydown', 'contextmenu', 'dragstart']) {
//    document.documentElement.addEventListener(event_type, defaultHandler);
//    document.body.addEventListener(event_type, defaultHandler);
//    document.addEventListener(event_type, defaultHandler);
//}