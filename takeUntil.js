//const res = require("express/lib/response");
//const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item) === true) //inline fns generating array results after running condition on each item of array
      break;
    else results.push(item);

  }
  
  return results;
};

// const assertArraysEqual = function(arrayOne, arrayTwo) {
//   if (arrayOne.length === arrayTwo.length) {
//     if (eqArrays(arrayOne,arrayTwo) === true) {
//       console.log('Assertion Passed');
//     } else if (eqArrays(arrayOne,arrayTwo) === false) {
//       console.log('Assertion Failed');
//     }
//   }
// };


// const eqArrays = function(arrayOne, arrayTwo) {
//   let result;
//   if (arrayOne.length === arrayTwo.length) {
//     for (let index = 0; index < arrayOne.length; index++) {
//       if (arrayOne[index] !== arrayTwo[index])  {
//         result = false;
//         break;
//       } else if (arrayOne[index] === arrayTwo[index])
//         result = true;
//     }
//   }
//   return result;
// };

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// assertArraysEqual(takeUntil(data1, x => x < 0),[ 1, 2, 5, 7, 2 ]); //inline checking X<0 on all items of array (because of teh use of for loop in takeUntil)and returning result in teh form of array containing true and false -- [ false, false,false, false,false, true,false, false,false]


// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// assertArraysEqual(takeUntil(data2, x => x === ','),[ "I've", 'been', 'to', 'Hollywood' ]);

module.exports = takeUntil;
