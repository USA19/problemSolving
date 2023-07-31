/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // Length of the updated array
  let count = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] == val) {
      continue;
    }

    nums[count] = nums[index];
    count++
  }

  return count
};