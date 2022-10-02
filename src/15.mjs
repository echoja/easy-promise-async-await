function setTimeoutPromise(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

async function startAsync(age) {
  if (age > 20) return `${age} success`;
  else throw new Error(`${age} is not over 20`);
}

async function startAsyncJobs() {
  await setTimeoutPromise(1000);
  const promise1 = startAsync(25);

  try {
    const value = await promise1;
    console.log(value);
  } catch (e) {
    console.error(e);
  }

  const promise2 = startAsync(15);

  try {
    const value = await promise2;
    console.log(value);
  } catch (e) {
    console.error(e);
  }
}

startAsyncJobs();
