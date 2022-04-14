
const eqObjects = require('./eqObject');


// fns taking in two object and asserting - adaptation of assertEqual fns
const assertObjectEqual = function(object1, object2) {
  if (eqObjects(object1,object2) === true) {
    return true;
  } else if (eqObjects(object1,object2) === false) {
    return false;
  }
};

module.exports = assertObjectEqual;