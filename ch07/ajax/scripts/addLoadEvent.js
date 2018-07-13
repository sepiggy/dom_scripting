function addLoadEvent(newEvent) {
    oldonload = window.onload;
    if (!oldonload) {
        window.onload = newEvent;
    } else {
        window.onload = function () {
            oldonload();
            newEvent();
        }
    }

}