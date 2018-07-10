// var beatles = Array(4);
// beatles[0] = "John";
// beatles[1] = "Paul";
// beatles[2] = "George";
// beatles[3] = "Ringo";

var beatles = ["John", "Paul", "George", "Ringo"];

for(var i=0; i<beatles.length; i++) {
    console.log(beatles[i]);
}

var years = [1940, 1941, 1942, 1943];
years.forEach(function (value) {
    console.log(value);
});

var lennon = ["John", 1940, false];
lennon.forEach(function (value) {
    console.log(value);
});

// 关联数组
lennon = Array();
lennon["name"] = "John";
lennon["year"] = 1940;
lennon["living"] = false;
console.log(lennon["name"]);
