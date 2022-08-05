const inverseNumber = (number) => {
  let inverseNumber = 0;
  let position = 1;

  while (number !== 0) {
    const digit = number % 10;
    inverseNumber = inverseNumber + (position * Math.pow(10, (digit - 1)));
    number = Math.trunc(number / 10);
    position++
  }

  console.log("?????????????????inverseNumber", inverseNumber)
}

inverseNumber(21453)  