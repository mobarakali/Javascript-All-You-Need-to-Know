// 069. What is Pure Function in Javascript  

// 1. It will return the same result if given the same arguments
// 2. It does not cause any observable side effects

function sqr(n) {
  return n * n;
}
console.log(sqr(2)); // 4
console.log(sqr(2)); // 4
console.log(sqr(2)); // 4


// Followings Not a pure function

var n = 10;
function change() {
  n = 100;
}
change();

console.log(n); // 100

// Followings Not a pure function

var point = {
    x: 45,
    y: 30
    }
function printPoint(point) {
    point.x = 100;
    point.y = 200;
    console.log(point);
}
printPoint(point); // {x: 100, y: 200}
console.log(point); // {x: 100, y: 200}

// Followings Not a pure function

var z = 10;
function add(a) {
  return a + z;
}
console.log(add(20)); // 30
