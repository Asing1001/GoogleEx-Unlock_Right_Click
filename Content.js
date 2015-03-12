chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        //sendResponse({farewell: "goodbye"});
        //console.log(request);
        //console.log(sender);
        //console.log(sendResponse)
        if (request.click) {
            var s = document.createElement('script');
            s.id = "freeMyRightClick";
            s.innerHTML = script;
            document.body.appendChild(s);
        }
        else{
            var element= document.getElementById('freeMyRightClick');
            element.parentNode.removeChild(element);
        }
    });

var script = " var doc = document;var body = doc.body;var html = doc.documentElement;html.onselectstart = html.oncopy = html.oncut = html.onpaste = html.onkeydown = html.oncontextmenu = html.onmousemove = body.oncopy = body.oncut = body.onpaste = body.onkeydown = body.oncontextmenu = body.onmousemove = body.onselectstart = body.ondragstart = doc.onselectstart = doc.oncopy = doc.oncut = doc.onpaste = doc.onkeydown = doc.oncontextmenu = doc.onmousedown = doc.onmouseup = null;body.style.webkitUserSelect = 'auto';function defaultHandler(event) {   event.returnValue = true;}for (event_type in ['selectstart', 'copy', 'cut', 'paste', 'keydown', 'contextmenu', 'dragstart']) {   html.addEventListener(event_type, defaultHandler);    body.addEventListener(event_type, defaultHandler);    doc.addEventListener(event_type, defaultHandler);}"
