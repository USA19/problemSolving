/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// definition below 
// A subsequence of a string is a new string that is formed from the original string by deleting
// some (can be none) of the characters without disturbing the relative positions of the remaining 
// characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

const isSubsequence = (subString, baseString) => {

  if (subString === baseString) {
    return true
  };

  if (!baseString) {
    return false;
  };

  let j = 0;

  for (let i = 0; i < baseString.length && j < subString.length; i++) {
    if (baseString.charAt(i) == subString.charAt(j))
      j++;
  }

  //check if all are matched
  if (j == subString.length)
    return true;

  return false;
};

// console.log("isSubsequence()>>>>>", isSubsequence("abc", "ahbgdc"))
// console.log("isSubsequence()>>>>>", isSubsequence("axc", "ahbgdc"))
// console.log(">>>>>>>>>>>>>>>>>>>", isSubsequence('ays', 'haystack'))
// console.log("isSubsequence()>>>>>", isSubsequence("", "ahbgdc"))
// console.log("isSubsequence()>>>>>", isSubsequence("", ""))

const isSubsequenceV2 = (subString, baseString) => {
  if (subString === baseString) {
    return true;
  }

  if (!baseString) {
    return false;
  }

  let subStringIndex = 0;
  let isSubstring = false;

  for (let baseStringIndex = 0; baseStringIndex < baseString.length; baseStringIndex++) {
    if (baseString.charAt(baseStringIndex) === subString.charAt(subStringIndex)) {
      subStringIndex++
      if (subStringIndex === subString.length) {
        isSubstring = true
        break;
      }
    }
  }

  return isSubstring
}

// console.log("isSubsequenceV2()>>>>>", isSubsequenceV2("abc", "ahbgdc"))
// console.log("isSubsequenceV2()>>>>>", isSubsequenceV2("axc", "ahbgdc"))
// console.log(">>>>>>>>>>>>>>>>>>>", isSubsequenceV2('ays', 'haystack'))
// console.log("isSubsequenceV2()>>>>>", isSubsequenceV2("", "ahbgdc"))
// console.log("isSubsequenceV2()>>>>>", isSubsequenceV2("", ""))
