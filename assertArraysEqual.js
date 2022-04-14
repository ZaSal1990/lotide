//prgm to assert/compare items in one array to their counter parts in teh otehr array
const eqArrays = require('./eqArray');

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (arrayOne.length === arrayTwo.length) {
    if (eqArrays(arrayOne,arrayTwo) === true) {
      return 'Assertion Passed';
    } else if (eqArrays(arrayOne,arrayTwo) === false) {
      return 'Assertion Failed';
    }
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);

module.exports = assertArraysEqual;