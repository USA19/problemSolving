
const printPrimeNumberBetweenRange = (small, large) => {
  const lowestNumber = parseInt(small);
  const largestNumber = parseInt(large);

  if (lowestNumber === largestNumber) {
    return
  }

  if (largestNumber === 2) {
    return console.log(largestNumber);
  }

  for (let x = lowestNumber; x <= largestNumber; x++) {
    let count = 0;
    for (let y = 2; y <= x; y++) {
      if (x % y === 0) {
        count++;
      }
    }
    if (count === 1) {
      console.log(x);
    }
  }
}


printPrimeNumberBetweenRange(4, 16);