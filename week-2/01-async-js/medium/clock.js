// let secs = 0;
// let mins = 0;
// let hours = 0;

// setInterval(() => {
//   if (secs < 60) {
//     secs++;
//     console.log(`${hours} : ${mins} : ${secs}`);
//   } else {
//     mins++;
//     secs = 1;
//     console.log(`${hours} : ${mins} : ${secs}`);
//     if (mins > 60) {
//       hours++;
//       mins = 0;
//       secs = 1;
//       console.log(`${hours} : ${mins} : ${secs}`);
//       if (hours === 24) {
//         hours = 1;
//         mins = 0;
//         secs = 1;
//       }
//     }
//   }
// }, 1000);

const currDate = new Date();
let h = currDate.getHours();
let m = currDate.getMinutes();
let s = currDate.getSeconds();

console.log(m);

console.log(`Current machine time: ${h} :: ${m} :: ${s}`);
