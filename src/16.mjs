function setTimeoutPromise(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

async function startAsync() {
  setTimeoutPromise(1000);
  setTimeoutPromise(1500);
  setTimeoutPromise(2000); // 프로그래머는 뭔가 기다리겠다는 의도를 비쳤습니다.
}

console.log("시작입니다.");

const promise = startAsync();

promise.then(() => {
  console.log("끝났습니다?");
  process.exit(0); // 프로그래머는 이 때에 모든 작업이 완료되었다고 생각합니다.
});
