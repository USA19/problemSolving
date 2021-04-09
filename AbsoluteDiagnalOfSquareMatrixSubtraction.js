const SquareArrayDiagnalsSubtraxtion = (sizeOfSquareArray, SquareArray) => {
  let x = sizeOfSquareArray;

  let leftDiagnalElementsSum = 0;

  let rightDiagnalElementsSum = 0;
  for (let i = 0; i < sizeOfSquareArray; i++) {
    leftDiagnalElementsSum += SquareArray[i][i];

    rightDiagnalElementsSum += SquareArray[i][--x];
  }

  return Math.abs(leftDiagnalElementsSum - rightDiagnalElementsSum);
};

// let a = [
//   [1, 2, 4],
//   [2, 5, 6],
//   [8, 9, 1],
// ];
let a = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
console.log(SquareArrayDiagnalsSubtraxtion(3, a));
