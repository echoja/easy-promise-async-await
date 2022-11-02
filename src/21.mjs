async function prepareOneFish() {
  let start = new Date().getTime();
  while (new Date().getTime() < start + 1000) {
    // preparing fish
  }
  return "finished";
}

console.log("Start!");
prepareOneFish().then(console.log);
prepareOneFish().then(console.log);
prepareOneFish().then(console.log);
console.log("Finish!");
