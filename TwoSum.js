/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const valueToIndexMap = {};

  for (let index = 0; index < nums.length; index++) {
    const currentIndexValue = nums[index];
    const difference = target - currentIndexValue;

    // Check if the difference exists in the valueToIndexMap
    if (difference in valueToIndexMap) {
      // If it exists, we found the two numbers that add up to the target
      return [valueToIndexMap[difference], index];
    }


    // If the complement doesn't exist in the map, store the current number 
    // and its index
    valueToIndexMap[currentIndexValue] = index;
  }

  return []
};