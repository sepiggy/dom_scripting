var ul = document.getElementById("purchases");
alert(typeof ul);

var lis = document.getElementsByTagName("li");
console.log(document.getElementsByTagName("li").length)

for (var i=0; i<document.getElementsByTagName("li").length; i++) {
    alert(typeof document.getElementsByTagName("li")[i]);
}

// 返回所有元素节点
alert(document.getElementsByTagName("*").length);

// 把 getElementById 和 getElementsByTagName 结合起来使用
var shopping = document.getElementById("purchases");
alert(shopping.getAttribute('title'));
shopping.setAttribute('title', 'a list of goods');
alert(shopping.getAttribute('title'));

var items = shopping.getElementsByTagName("*");
alert(items.length);
for (var i=0; i<items.length; i++) {
    alert(typeof items[i]);
}

var sales = document.getElementsByClassName("sale")
alert(sales.length);

alert(document.getElementsByClassName('important sale').length);

var paras = document.getElementsByTagName('p');
for (var i=0; i<paras.length; i++) {
    var title_text = paras[i].getAttribute('title');
    if (title_text) alert(title_text);
}

var csss = document.getElementsByTagName('style');
for (var i=0; i<csss.length; i++) {
    alert(csss[i].getAttribute('src'));
}







