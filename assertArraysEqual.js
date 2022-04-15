const eqArrays = require('./eqArray');

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (arrayOne.length === arrayTwo.length) {
    if (eqArrays(arrayOne,arrayTwo) === true) {
      console.log('Assertion Passed');
    } else if (eqArrays(arrayOne,arrayTwo) === false) {
      console.log('Assertion Failed');
    }
  }
};

module.exports = assertArraysEqual;