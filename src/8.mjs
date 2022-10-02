const promise1 = new Promise((resolve, reject) => {
  resolve();
});

promise1
  .then(() => {
    console.log("then!");
  })
  .catch(() => {
    console.log("catch!");
  });
