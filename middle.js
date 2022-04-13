// prgm to log only the middle item of the array




const middle = function(sourceArray) {
  let newArray = [];
  let indexMiddleItemEven = sourceArray.length / 2;
  let indexMiddleItemOdd = Math.ceil((sourceArray.length - 1) / 2);
  //console.log(sourceArray.length);
  if (sourceArray.length > 2 && sourceArray.length % 2 === 0)  {
    newArray.push(sourceArray[indexMiddleItemEven - 1],sourceArray[indexMiddleItemEven]);
  } else if (sourceArray.length > 2 && sourceArray.length % 2 === 1)  {
    newArray.push(sourceArray[indexMiddleItemOdd]);
  }
  return newArray;
};
  
// const assertArraysEqual = function(arrayOne, arrayTwo) {
//   if (arrayOne.length === arrayTwo.length) {
//     for (let loopOne = 0; loopOne < arrayOne.length; loopOne++) {
//       for (let loopTwo = 0; loopTwo < arrayTwo.length; loopTwo++) {
//         if (arrayOne[loopOne] === arrayTwo[loopTwo]) {
//           return `Assertion Passed: ${arrayOne} === ${arrayTwo}`;
//         } else if (arrayOne[loopOne] !== arrayTwo[loopTwo]) {
//           return `Assertion Failed: ${arrayOne} !== ${arrayTwo}`;
//         }
//       }
//     }
//    }
// };

// console.log(middle([1]));
// console.log(assertArraysEqual(middle([1]),[]));
// console.log(assertArraysEqual(middle([1, 2, 3, 4]),[2,3])); // => [2, 3]
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]));
// console.log(assertArraysEqual(middle([1, 2, 3]),[2]));
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]));

module.exports = middle;