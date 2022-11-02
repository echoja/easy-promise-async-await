const throwError = new Promise((resolve, reject) => {
  throw new Error("error");
});

throwError.then(
  () => console.log("throwError success"),
  () => console.log("throwError catched")
);
