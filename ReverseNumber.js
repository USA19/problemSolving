
const reverseNumber = (number) => {
    let reversed = "";
    while (number > 0) {
        reversed = `${reversed}${number % 10}`;
        number = Math.trunc(number / 10);
    }
    return reversed;
}

console.log(reverseNumber(789655));