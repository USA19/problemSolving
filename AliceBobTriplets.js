const AliceBobTripletCompare = (a, b) => {
  //a and b should be two arrays of length 3 or of equal lengths
  let bob = 0;
  let alice = 0;
  for (let i = 0; i < a.length; i++) {
    // n
    if (a[i] > b[i]) {
      alice += 1;
    } else if (a[i] < b[i]) {
      bob += 1;
    }
  }

  return [alice, bob];
};

const result = AliceBobTripletCompare([2, 3, 2], [2, 1, 2]);

console.log(result);
