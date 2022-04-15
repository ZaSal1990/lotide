
const eqObjects = require('./eqObject');

const assertObjectEqual = function(object1, object2) {
  if (eqObjects(object1,object2) === true) {
    console.log('Assertion Passed');
  } else if (eqObjects(object1,object2) === false) {
    console.log('Assertion Failed');
  }
};

module.exports = assertObjectEqual;