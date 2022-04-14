
const eqArrays = require('./eqArray');

const eqObjects = function(object1, object2) {
  let result;
  let objectOneKeys = Object.keys(object1);
  let objectTwoKeys = Object.keys(object2);
  if (objectOneKeys.length === objectTwoKeys.length) {
    for (let loopOne of objectOneKeys) {
      for (let loopTwo of objectTwoKeys) {
        if (loopOne === loopTwo) {
          if (typeof object1[loopOne] !== 'object' && typeof object2[loopTwo] !== 'object') {
            if (object1[loopOne] === object2[loopTwo]) {
              result = true;
            } else if (object1[loopOne] !== object2[loopTwo]) {
              result = false;
              return false;
            }
          } else if (Array.isArray(object1[loopOne]) === true && Array.isArray(object2[loopTwo]) === true) {
            if (eqArrays(Object.values(object1[loopOne]),Object.values(object2[loopTwo])) === true) {
              result = true;
            } else if (eqArrays(Object.values(object1[loopOne]),Object.values(object2[loopTwo])) === false) {
              result = false;
            }
          } else {
            result = false;
            return false;
          }
        }
      }
    }
  } else if (objectOneKeys.length !== objectTwoKeys.length) {
    result = false;
  } return result;
};

module.exports = eqObjects;