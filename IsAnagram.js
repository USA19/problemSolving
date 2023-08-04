// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
//  typically using all the original letters exactly once.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagramWithSort = function (s, t) {
  const sortedS = s.split('').sort().join('');
  const sortedT = t.split('').sort().join('');

  if (sortedS === sortedT) {
    return true;
  }

  return false
};

var isAnagram = function (s, t) {

  if (s.length !== t.length) {
    return false;
  }

  const mapS = {}
  const mapT = {}

  for (const characterS of s) {
    if (mapS[characterS]) {
      mapS[characterS] = parseInt(mapS[characterS]) + 1
    } else {
      mapS[characterS] = 1
    }
  }

  for (const characterT of t) {
    if (mapT[characterT]) {
      mapT[characterT] = parseInt(mapT[characterT]) + 1
    } else {
      mapT[characterT] = 1
    }
  }

  for (const character of t) {
    if (mapT[character] !== mapS[character]) {
      return false;
    }
  }


  return true
};

console.log(isAnagram("anagram", "nagaram"))