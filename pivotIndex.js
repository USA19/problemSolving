// Given an array of integers nums, calculate the pivot index of this array.
// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
// Return the leftmost pivot index. If no such index exists, return -1.

const findSum = (array) => {
  const sum = array.reduce((accumulator, value) => accumulator + value, 0);
  return sum;
};

const pivotIndex = (nums) => {
  let matchedIndex = null;
  for (let index = 0; index < nums.length; index++) {
    const leftSum = index > 0 ? findSum(nums.slice(0, index)) : 0;
    const rightSum = findSum(nums.slice((index + 1)))

    if (leftSum === rightSum) {
      matchedIndex = index;
      break;
    }
  }

  return matchedIndex != null ? matchedIndex : -1
}

console.log("pivotIndex>>>>>>>>>>>", pivotIndex([1, 7, 3, 6, 5, 6]))
// console.log("pivotIndex>>>>>>>>>>>", pivotIndex([2, 1, -1]))
