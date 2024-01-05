let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log(count);
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 10000);
