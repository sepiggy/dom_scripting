function prepareGallery() {
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    var ul = document.getElementById("imagegallery");
    if (!ul) return false;
    var links = ul.getElementsByTagName("a")
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            // 是否取消 onclick 事件的默认行为, 应该由 showPic 函数决定
            return !showPic(this);
        }
    }
}

function preparePlaceholder() {
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;

    var img = document.createElement("img");
    img.setAttribute("src", "images/placeholder.png");
    img.setAttribute("alt", "my image gallery");
    img.setAttribute("id", "placeholder");

    var para = document.createElement("p");
    para.setAttribute("id", "description");
    var txt = document.createTextNode("Choose an image.");
    para.appendChild(txt);

    var gallery = document.getElementById("imagegallery");
    insertAfter(img, gallery);
    insertAfter(para, img);
}

function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG") return false;
    placeholder.setAttribute("src", source);
    if (document.getElementById("description")) {
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
        var description = document.getElementById("description");
        if (description.firstChild.nodeType == 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}

function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parentNode.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);