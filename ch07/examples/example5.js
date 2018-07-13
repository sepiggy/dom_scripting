window.onload = function () {
    var p = document.createElement("p");
    var txt1 = document.createTextNode("This is ");
    p.appendChild(txt1);
    var em = document.createElement("em");
    var txt2 = document.createTextNode("my ");
    em.appendChild(txt2);
    p.appendChild(em);
    var txt3 = document.createTextNode("content");
    p.appendChild(txt3);
    document.getElementById("testdiv").appendChild(p);
}