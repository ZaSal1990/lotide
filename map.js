
// const assertArraysEqual = require('./assertArraysEqual');
// const eqArrays = require('./eqArray');


//const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (item.length > 5)
      results.push(callback(item));
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
  
// assertArraysEqual(map(words,(word) => { return word.toUpperCase(); }), ['GROUND','CONTROL']);


//console.log(map(words,(word) => { return word.toUpperCase(); }));

module.exports = map;