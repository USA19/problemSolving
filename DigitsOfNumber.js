
const displayNumberOfDigits = (digit) => {
  let dig = 0;
  while (parseInt(digit) !== 0) {
    const lastDigit = parseInt(digit) % 10;
    digit = parseInt(digit) / 10;
    dig++;

    console.log(lastDigit);
  }

  return dig
}


console.log(displayNumberOfDigits(7891034));