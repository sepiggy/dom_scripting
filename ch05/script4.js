function popUp(url) {
    window.open(url, "popup", "width=320, height=480");
}

window.onload = function () {
    if (!document.getElementsByTagName) return false;
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute("class") != "popup") return false;
        links[i].onclick = function () {
            popUp(this.getAttribute("href"));
            return false;
        }
    }
}