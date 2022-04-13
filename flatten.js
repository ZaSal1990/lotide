//prgm to flatten arrays

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
    if (eqArrays(arrayOne,arrayTwo) === true) {
      console.log('Assertion Passed');
    } else if (eqArrays(arrayOne,arrayTwo) === false) {
      console.log('Assertion Failed');
    }
  }
};


const eqArrays = function(arrayOne, arrayTwo) {
  let result;
  if (arrayOne.length === arrayTwo.length) {
    for (let index = 0; index < arrayOne.length; index++) {
      if (arrayOne[index] !== arrayTwo[index])  {
        result = false;
        break;
      } else if (arrayOne[index] === arrayTwo[index])
        result = true;
    }
  }
  return result;
};



assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;