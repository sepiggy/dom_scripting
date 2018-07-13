window.onload = function () {
    var para = document.createElement("p");
    var info = "nodeName: ";
    info += para.nodeName;
    info += " nodeType: ";
    info += para.nodeType;
    console.log(info);

    var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);
    
    var txt = document.createTextNode("hello dom");
    para.appendChild(txt);
}