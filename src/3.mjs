function b() {
  console.log("b called!");
}

function a(another) {
  console.log("a started!");
  another();
  console.log("a ended!");
}

console.log(1);
console.log(2);
a(b);
console.log(3);
console.log(4);
