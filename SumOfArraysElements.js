const runningSum = (nums) => {
  const sumArray = []
  for (let index = 0; index < nums.length; index++) {
    let sum = 0
    // for (let newArrayIndex = 0; newArrayIndex <= index; newArrayIndex++) {
    //   sum = sum + nums[newArrayIndex]

    //   console.log(">>>>>>>>>>>>>>>>>>sumArray", sum)
    // };
    if (index === 0) {
      sum = nums[index]
    } else {
      sum = nums[index] + sumArray[index - 1]
    }

    sumArray.push(sum)
  }

  return sumArray
  // return nums.map((num, index) => {
  // const newArray = nums.splice(0, (index + 1))
  // console.log('>>>>>>>>>>>newArray @', index, ">>>>>>>>>>>>>newArray", newArray);
  // console.log("nums.splice(0, (index + 1))", nums.splice(0, 3));
  // const sum = newArray.reduce((accumulator, value) => accumulator + value, 0)
  // if (index > 0) {
  //   return num
  // } else {
  //   let sum = 0
  //   for (let newArrayIndex = 0; newArrayIndex <= index; newArrayIndex++) {
  //     sum = sum + nums[newArrayIndex]
  //   };

  //   return sum
  // }
}


console.log(">>>>>>>>>runningSum", runningSum([3, 1, 2, 10, 1]))