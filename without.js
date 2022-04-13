//program to elimate one array items from teh second
// const assertArraysEqual = require('./assertArraysEqual');
// const eqArrays = require('./eqArray');

const without = function(sourceArray,itemsToRemove) {
  let newArray = [];
  for (let loopOne = 0; loopOne < sourceArray.length; loopOne++) {
    for (let loopTwo = 0; loopTwo < itemsToRemove.length; loopTwo++) {
      if (sourceArray[loopOne] !== itemsToRemove[loopTwo]) {
        newArray.push(sourceArray[loopOne]);
      }
    }
  }
  return newArray;
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
//const words = ["hello", "world", "lighthouse"];
//console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
//assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;