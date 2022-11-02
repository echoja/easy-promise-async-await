const throwError = new Promise((resolve, reject) => {
  resolve("success");
});

throwError
  .then(
    () => {
      throw new Error("weird error");
    },
    () => console.log("throwError catched")
  )
  .catch((e) => console.log("final catch"));
