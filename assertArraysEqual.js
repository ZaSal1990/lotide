//prgm to assert/compare items in one array to their counter parts in teh otehr array

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (arrayOne.length === arrayTwo.length) {
    for (let loopOne = 0; loopOne < arrayOne.length; loopOne++) {
      for (let loopTwo = 0; loopTwo < arrayTwo.length; loopTwo++) {
        if (arrayOne[loopOne] === arrayTwo[loopTwo]) {
          return `Assertion Passed: ${arrayOne} === ${arrayTwo}`;
        } else if (arrayOne[loopOne] !== arrayTwo[loopTwo]) {
          return `Assertion Failed: ${arrayOne} !== ${arrayTwo}`;
        }
      }
    }
  }
};



console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));