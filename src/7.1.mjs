console.log("모두에게 일을 시켜보자! (각 팀원은 1~2초의 소요시간이다.)");

let aFinished = false;
let bFinished = false;
let cFinished = false;

setTimeout(() => {
  console.log("A: 일을 마쳤습니다!");
  aFinished = true;
  if (aFinished && bFinished && cFinished) {
    console.log("일을 다 마쳤으니 이제 요리를 시작하자!");
  }
}, Math.random() * 1000 + 1000);

setTimeout(() => {
  console.log("B: 일을 마쳤습니다!");
  bFinished = true;
  if (aFinished && bFinished && cFinished) {
    console.log("일을 다 마쳤으니 이제 요리를 시작하자!");
  }
}, Math.random() * 1000 + 1000);

setTimeout(() => {
  console.log("C: 일을 마쳤습니다!");
  cFinished = true;
  if (aFinished && bFinished && cFinished) {
    console.log("일을 다 마쳤으니 이제 요리를 시작하자!");
  }
}, Math.random() * 1000 + 1000);

console.log("일은 전부 시켜놓았다!");
