//const eqArrays = require('./eqArray');
const eqObjects = require('./eqObject');


// fns taking in two object and asserting - adaptation of asserEqual fns
const assertObjectEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1,object2) === true) {
    //console.log(`Assertion passed: ${inspect(object1)} === ${inspect(object2)}`);
    return true;
  } else if (eqObjects(object1,object2) === false) {
    //console.log(`Assertion failed: ${inspect(object1)} !== ${inspect(object2)}`);
    return false;
  }
};

module.exports = assertObjectEqual;