console.log("모두에게 일을 시켜보자!");

setTimeout(() => {
  console.log("A: 일을 마쳤습니다!");
}, 2000);

setTimeout(() => {
  console.log("B: 일을 마쳤습니다!");
}, 1500);

setTimeout(() => {
  console.log("C: 일을 마쳤습니다!");
}, 1000);

console.log("일은 전부 시켜놓았다!");
