
const eqObjects = require('./eqObject');

const assertObjectEqual = function(object1, object2) {
  if (eqObjects(object1,object2) === true) {
    return true;
  } else if (eqObjects(object1,object2) === false) {
    return false;
  }
};

module.exports = assertObjectEqual;