/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var nextPermutation = function (nums) {
//   let idx;
//   let id_x_1;

//   for (let index = nums.length - 1; index >= 0; index--) {
//     if (nums[index] > nums[index - 1]) {
//       idx = index
//       break;
//     }
//   }

//   if (typeof idx == "undefined") {
//     return nums.sort((a, b) => a - b);
//   }

//   if (idx != (nums.length - 1)) {
//     console.log("here>>>>>>>>>", idx)
//     for (let index = idx; index < nums.length; index++) {
//       console.log(!!(nums[index] > nums[index - 1]), "nums[index] > nums[index - 1]", index)
//       if (nums[index] > nums[index - 1]) {
//         // console.log(nums[index] > nums[index - 1], "nums[index] > nums[index - 1]")
//         id_x_1 = index
//         if (idx == id_x_1) {
//           // console.log(index - 1, "index - 1>>>>>")
//           id_x_1 = index - 1
//         }
//         break;
//       }
//     }
//   }

//   const thirdNumber = nums[idx];
//   console.log(id_x_1, "id_x_1>>>>>>>")
//   nums[idx] = nums[id_x_1]
//   nums[id_x_1] = thirdNumber;

//   return nums
// };


function nextPermutation(nums) {
  let i = nums.length - 2;

  // Find the first decreasing element from the right
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;

    // Find the smallest element to the right of nums[i] that is greater than nums[i]
    while (nums[j] <= nums[i]) {
      j--;
    }

    // Swap nums[i] and nums[j]
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // Reverse the subarray to the right of i
  reverse(nums, i + 1);

  return nums
}

function reverse(nums, start) {
  let i = start;
  let j = nums.length - 1;

  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }
}


console.log(nextPermutation([1, 3, 2])) //idx=1
