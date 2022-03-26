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
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));