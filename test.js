// function solution(message, K) {
//   // message is trimmed! so, no need to to remove any space

//   if (message.length < K)
//     return message;

//   //splicing but need
//   const newMessage = message.slice(0, K);

//   console.log("newMessage>>>>>>>.", newMessage)
//   //to remove any ending space
//   const trimmedNewMessage = newMessage.trim();

//   // to check either the word is complete or not
//   const newMessageArray = trimmedNewMessage.split(" ");
//   const messageArray = message.split(" ");
//   console.log("newMessageArray[newMessageArray.length - 1]", newMessageArray[newMessageArray.length - 1]);
//   console.log("messageArray[messageArray.length - 1]", messageArray[newMessageArray.length - 1]);

//   // console.log("(newMessageArray[newMessageArray.length - 1] === messageArray[messageArray.length - 1]).","" (newMessageArray[newMessageArray.length - 1] === messageArray[messageArray.length - 1]))
//   if (newMessageArray[newMessageArray.length - 1] === messageArray[messageArray.length - 1]) {
//     // console.log("???????????????????here", newMessageArray.join(" "))
//     return newMessageArray.join(" ")
//   }
//   // console.log("???????????messageArray", messageArray)
//   const splicedArray = newMessageArray.splice(0, newMessageArray.length - 1, 1);
//   // console.log("splicedArray>>>>>>>>>>>>>>.", splicedArray);
//   return splicedArray.join(" ");
// }


// console.log("solution>>>>>>>>>.", solution('Codility We test coders', 14))




// function solution(P, S) {
//   let seatsLeft = 0;
//   let carsRequired = 0;
//   for (let index = 0; index < P.length; index++) {
//     if (S[index] > P[index]) {
//       seatsLeft = seatsLeft + (S[index] - P[index])
//     }
//   }

//   console.log("seatsLeft>>>.", seatsLeft)
//   for (let index = 0; index < P.length; index++) {
//     carsRequired = carsRequired + 1

//     if (seatsLeft && (seatsLeft > P[index] || seatsLeft === P[index])) {
//       seatsLeft = seatsLeft - P[index];
//       carsRequired = carsRequired - 1
//     }

//   }
//   // s[index]>p[index];
//   // const seatsLeft=s[index]-p[index]
//   // seats=seats-seatsLeft

//   return carsRequired
// }

// console.log("([1, 4, 1], [1, 5, 1])", solution([1, 4, 1], [1, 5, 1]))
// // console.log("([1, 4, 1], [1, 5, 1])", solution([4, 4, 2, 4], [5, 5, 2, 5]))



function solution(A) {
  let numberOfFilters = 1;
  const totalPollution = A.reduce((acc, curr) => acc + curr, 0);

  console.log("condition>>>>>>.", totalPollution / 2, "totalPollution", totalPollution)
  while (!!(totalPollution / numberOfFilters > totalPollution / 2)) {

    ++numberOfFilters;
  }

  return numberOfFilters
}

console.log(solution([5, 19, 8, 1]))
