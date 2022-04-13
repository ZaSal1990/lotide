//prgm to assert/compare items in one array to their counter parts in teh otehr array
const eqArrays = require('./eqArray');

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (arrayOne.length === arrayTwo.length) {
    if (eqArrays(arrayOne,arrayTwo) === true) {
      console.log('Assertion Passed');
      return true;
    } else if (eqArrays(arrayOne,arrayTwo) === false) {
      console.log('Assertion Failed');
      return false;
    }
  }
};

module.exports = assertArraysEqual;