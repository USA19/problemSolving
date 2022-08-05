
/**
 * 
 * @param {*positive integer}  number
 * return either a number is prime or not
 */

const isPrimeNumber = (number) => {
    let count = 0
    //prime number starts from 2 so checking either the number is less then 2
    if (parseInt(number) < 2) {
        return false
    }

    if (parseInt(number) === 2) {
        return true
    }

    for (let x = 3; x <= parseInt(number); x++) {
        if (parseInt(number) % x === 0) {
            ++count
        }

        if (count > 1) {
            break
        }
    }

    return count === 1
}


console.log(isPrimeNumber(14), ">>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<");
