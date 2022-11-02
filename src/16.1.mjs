function setTimeoutPromise(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

async function startAsync() {
  await setTimeoutPromise(1000).then(() => {
    console.log("1초 지났습니다.");
  });
}

console.log("시작입니다.");

startAsync();
