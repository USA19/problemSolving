
/**
 * prints the Fibonacci series of a first 50 natural numbers
 */
printFibonacci = () => {
  let a = 0
  let b = 1
  for (let index = 1; index <= 50; index++) {
    let c = a + b;
    a = b;
    b = c;
    console.log(c);
  }
}

printFibonacci();