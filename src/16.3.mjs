function setTimeoutPromise(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

async function startAsync() {
  await setTimeoutPromise(1000).then(async () => {
    await setTimeoutPromise(1000);
    console.log("A");
  });
  console.log("B");
}

startAsync();
