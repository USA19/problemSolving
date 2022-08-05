
const displayNumberOfDigits = (digit) => {
  let dig = 0;
  while (parseInt(digit) != 0) {
    digit = parseInt(digit) / 10;
    dig++;
  }

  return dig
}


console.log(displayNumberOfDigits(232322323));