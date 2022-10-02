const promise1 = new Promise((resolve, reject) => {
  reject();
});

promise1
  .then(() => {
    console.log("then!");
  })
  .catch(() => {
    console.log("catch!");
  });
