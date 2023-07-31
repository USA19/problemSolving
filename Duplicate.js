/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//   const arrayWithoutDuplicateElements = [];
//   for (let index = 0; index < nums.length; index++) {
//     const baseElement = nums[index];
//     for (let j = index + 1; j < nums.length; j++) {
//       const elementToBeCompared = nums[j];
//       if (baseElement && baseElement == elementToBeCompared) {
//         nums[j] = null
//       }
//     }

//     if (baseElement) {
//       arrayWithoutDuplicateElements.push(baseElement)
//     }
//   }

//   nums = arrayWithoutDuplicateElements

//   return nums;
// };

var removeDuplicates = function (nums) {
  // Length of the updated array
  let count = 0;
  for (let index = 0; index < nums.length; index++) {
    if (index < nums.length - 1 && nums[index] == nums[index + 1]) {
      continue;
    }

    nums[count] = nums[index + 1];
    count++
  }

  console.log("nums>....", nums)
  return count
};

// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([1, 1, 2]));
