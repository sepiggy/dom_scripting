function showPic(whichpic) {
    var source = whichpic.getAttribute('href');
    var placeholder = document.getElementById('placeholder');
    placeholder.setAttribute('src', source);
    var title = whichpic.getAttribute('title');
    var description = document.getElementById('description');
    description.firstChild.nodeValue = title;
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName('body')[0];
    // alert(body_element.nodeType);
    var body_nodes = body_element.childNodes;
    for (var i = 0; i < body_nodes.length; i++) {
        var item = body_nodes[i];
        console.log(item.nodeName, item.nodeType, item.nodeValue);
    }
}

window.onload = countBodyChildren;