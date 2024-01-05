let count = 0;

for (let i = 1; i <= 10; i++) {
  setTimeout(() => {
    count++;
    console.log(count);
  }, 1000);
}
