// var lennon = Object();
// lennon.name = "John";
// lennon.year = 1940;
// lennon.living = false;

var lennon = {name:"John", year:1940, living:false};
var beatles = {};
beatles.vocalist = lennon;

console.log(beatles.vocalist.name);
console.log(beatles.vocalist.year);
console.log(beatles.vocalist.living);

var num = 7.561;
console.log(Math.round(num));

var current_date = new Date();
console.log(current_date.getDay());
console.log(current_date.getHours());
console.log(current_date.getMonth());
console.log(current_date.getTime());