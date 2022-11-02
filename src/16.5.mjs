function setTimeoutPromise(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

function startAsync() {
  setTimeoutPromise(1000)
    .then(() => setTimeoutPromise(1000))
    .then(() => console.log("A"))
    .then(() => console.log("B"));
}

startAsync();
