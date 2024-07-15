const n = 7;
const ar = [1, 2, 1, 2, 1, 3, 2, 2, 4];

function sockMerchant(n, ar) {
  let accumulatedPair = 0;

  function calculatePair(array) {
    let pair = 0;
    let arrLength = array.length;

    while (arrLength > 1) {
      arrLength = arrLength - 2;
      pair += 1;
    }

    return pair;
  }

  const grouped = ar.reduce((acc, value, index) => {
    if (!acc[value]) {
      acc[value] = [];
    }
    acc[value].push(value);
    return acc;
  }, {});

  for (const key in grouped) {
    if (grouped.hasOwnProperty(key)) {
      const array = grouped[key];
      accumulatedPair = accumulatedPair + calculatePair(array);
    }
  }

  return accumulatedPair;
}

console.log(sockMerchant(n, ar));

// const testArr = [1, 1, 1, 1, 1 ,1 ,1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

// function myFunction(array){
//     let pair = 0
//     let arrLength = array.length

//     while(arrLength > 1){
//         arrLength = arrLength - 2
//         pair += 1
//     }

//     return pair
// }

// console.log(myFunction(testArr))
