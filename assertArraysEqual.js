//prgm to assert/compare items in one array to their counter parts in teh otehr array
const eqArrays = require('./eqArray');

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (arrayOne.length === arrayTwo.length) {
    if (eqArrays(arrayOne,arrayTwo) === true) {
      console.log('Assertion Passed');
    } else if (eqArrays(arrayOne,arrayTwo) === false) {
      console.log('Assertion Failed');
    }
  }
};


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
  
// assertArraysEqual([1, 2, 3], [1, 1, 3]);
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
module.exports = assertArraysEqual;