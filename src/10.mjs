function startAsync(age) {
  return new Promise((resolve, reject) => {
    if (age > 20) resolve();
    else reject();
  });
}

const promise1 = startAsync(25);
promise1
  .then(() => {
    console.log("1 then!");
  })
  .catch(() => {
    console.log("1 catch!");
  });

const promise2 = startAsync(15);
promise2
  .then(() => {
    console.log("2 then!");
  })
  .catch(() => {
    console.log("2 catch!");
  });
