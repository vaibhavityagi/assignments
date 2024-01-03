/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  letters1 = str1.toLowerCase().split("");
  letters2 = str2.toLowerCase().split("");

  if (letters1.length != letters2.length) return false;
  for (let i = 0; i < letters1.length; i++) {
    if (!letters1.includes(letters2[i])) return false;
  }
  return true;
}

module.exports = isAnagram;
