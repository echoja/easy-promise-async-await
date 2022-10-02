function setTimeoutPromise(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

async function fetchAge(id) {
  await setTimeoutPromise(1000);
  console.log(`${id} 사원 데이터 받아오기 완료!`);
  return Math.round(Math.random() * 20) + 25;
}

async function startAsyncJobs() {
  const ids = Array.from({ length: 10 }).map((_, index) => index);

  const promises = ids.map(fetchAge);

  const ages = await Promise.all(promises);

  console.log(
    `평균 나이는? ==> ${
      ages.reduce((prev, current) => prev + current, 0) / ages.length
    }`
  );
}

startAsyncJobs();
