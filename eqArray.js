
//prgm to comapre one array items to the counter parts 

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



const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  else console.log(`Assertion Failed: ${actual} !== ${expected}`);
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);