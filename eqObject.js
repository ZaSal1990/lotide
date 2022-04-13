
const eqArrays = require('./eqArray');

const eqObjects = function(object1, object2) {
  let result;
  let objectOneKeys = Object.keys(object1); //extracting keys
  let objectTwoKeys = Object.keys(object2);//extracting keys
  if (objectOneKeys.length === objectTwoKeys.length) { //chacking length of borth arrays in case we need to proceede further
    for (let loopOne of objectOneKeys) { //running two loops in order to find items in array, can also use .find() instead
      for (let loopTwo of objectTwoKeys) {
        if (loopOne === loopTwo) {
          // console.log('value for key', loopOne, 'in object1 is', object1[loopOne]);
          // console.log('value for key', loopTwo, 'in object2 is', object2[loopTwo]);
          console.log('object1','key:', loopOne ,'type:', typeof object1[loopOne], 'value:',object1[loopOne]);
          // displaying data type, keys and value for object1
          console.log('object2','key:', loopTwo ,'type:', typeof object2[loopTwo], 'value:',object2[loopTwo]);
          // displaying data type, keys and value for object2
          if (typeof object1[loopOne] !== 'object' && typeof object2[loopTwo] !== 'object') { //checking if values are primitive
            console.log('primitive type values found on both matched keys');
            if (object1[loopOne] === object2[loopTwo]) {
              console.log('values matched'); result = true;
            } else if (object1[loopOne] !== object2[loopTwo]) {
              console.log('values MIS-matched'); result = false; return false;
            }
          } else if (Array.isArray(object1[loopOne]) === true && Array.isArray(object2[loopTwo]) === true) {
            // if values are not primitive, handind data over to previously written eqArray to compare each item in the array
            console.log('Object type values found on both matched keys');

            if (eqArrays(Object.values(object1[loopOne]),Object.values(object2[loopTwo])) === true) {
              //extracting array contents using Object.values and passing it as arguement to eqArrays to comapare each item
              console.log('values matched'); result = true;
            } else if (eqArrays(Object.values(object1[loopOne]),Object.values(object2[loopTwo])) === false) {
              console.log('values MIS-matched'); result = false;
            }
          } else {
            console.log('type MIS-matched'); result = false; return false;
          }
        }
      }
    }
  } else if (objectOneKeys.length !== objectTwoKeys.length) {
    result = false;
  } return result;
};



module.exports = eqObjects;