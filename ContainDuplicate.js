// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.
//   Example 1:

// Input: nums = [1, 2, 3, 1]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const obj = {};
  let alreadyExist = false;

  for (let num of nums) {
    if (obj[String(num)]) {
      alreadyExist = true;
      break;
    }

    obj[String(num)] = String(num);
  }

  return alreadyExist;
};

console.log(containsDuplicate([0, 4, 5, 0, 3, 6]))