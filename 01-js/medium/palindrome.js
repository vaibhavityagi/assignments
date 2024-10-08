/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // sanitizing the provided string
  const not = [" ", "!", "?", ",", "."];
  str = str.toLowerCase();
  const letters = str.split("");
  str = "";
  for (let i = 0; i < letters.length; i++) {
    if (!not.includes(letters[i])) str += letters[i];
  }

  // copying the string
  let copy = "";
  for (let i = str.length - 1; i >= 0; i--) {
    copy += str[i];
  }
  if (copy !== str) return false;
  return true;
}

module.exports = isPalindrome;
