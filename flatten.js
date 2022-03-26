const flatten = function(sourceArray) {
  let targetArray = [];
  for (let item of sourceArray) {
    let arrayCheck = Array.isArray(item);
    if (arrayCheck === true)  {
      for (let nestedItem of item) {
        targetArray.push(nestedItem);
      }
    } else if (arrayCheck === false) {
      targetArray.push(item);
    }
  } return targetArray;
};


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


const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length === arrayTwo.length) {
    for (let loopOne = 0; loopOne < arrayOne.length; loopOne++) {
      for (let loopTwo = 0; loopTwo < arrayTwo.length; loopTwo++) {
        if (arrayOne[loopOne] === arrayTwo[loopTwo]) {
          return true;
        } else if (arrayOne[loopOne] !== arrayTwo[loopTwo]) {
          return false;
        }
      }
    }
  }
};


console.log(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6])); // => [1, 2, 3, 4, 5, 6]