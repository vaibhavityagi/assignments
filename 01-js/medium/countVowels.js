/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  str = str.toLowerCase();

  // if str length is 0
  if (str.length === 0) return 0;
  let count = 0;
  for (let s of str) {
    if (vowels.includes(s)) count++;
  }
  return count;
}

module.exports = countVowels;
