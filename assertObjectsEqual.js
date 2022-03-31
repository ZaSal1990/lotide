

// fns taking in two object and asserting - adaptation of asserEqual fns
const assertObjectEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1,object2) === true) {
    console.log(`Assertion passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else if (eqObjects(object1,object2) === false) {
    console.log(`Assertion passed: ${object1} !== ${object2}`);
  }
};


const eqArrays = function(arrayOne, arrayTwo) { //modified to adapt to this program
  let result;
  if (arrayOne.length === arrayTwo.length) {
    for (let index = 0; index < arrayOne.length; index++) {
      if (arrayOne[index] !== arrayTwo[index])  {
        result = false; break;
      } else if (arrayOne[index] === arrayTwo[index])
        result = true;
    }
  }
  else if (arrayOne.length !== arrayTwo.length)
  { result = false; }
  return result;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let result;
  let objectOneKeys = Object.keys(object1); //extracting keys 
  let objectTwoKeys = Object.keys(object2);//extracting keys
  if (objectOneKeys.length === objectTwoKeys.length) { //chacking length of borth arrays in case we need to proceede further
    for (let loopOne of objectOneKeys) { //running two loops in order to find items in array, can also use .find() instead
      for (let loopTwo of objectTwoKeys) {
        if (loopOne === loopTwo) {
          // console.log('value for key', loopOne, 'in object1 is', object1[loopOne]); -- uncomment for debugging
          // console.log('value for key', loopTwo, 'in object2 is', object2[loopTwo]); -- uncomment for debugging
          //console.log('object1','key:', loopOne ,'type:', typeof object1[loopOne], 'value:',object1[loopOne]); // -- uncomment for debugging
          // displaying data type, keys and value for object1
          //console.log('object2','key:', loopTwo ,'type:', typeof object2[loopTwo], 'value:',object2[loopTwo]); // -- uncomment for debugging
          // displaying data type, keys and value for object2
          if (typeof object1[loopOne] !== 'object' && typeof object2[loopTwo] !== 'object') { //checking if values are primitive
            //console.log('primitive type values found on both matched keys');//-- uncomment for debugging
            if (object1[loopOne] === object2[loopTwo]) {
              //console.log('values matched'); //-- uncomment for debugging
              result = true;
            } else if (object1[loopOne] !== object2[loopTwo]) {
              //console.log('values MIS-matched'); //-- uncomment for debugging
              result = false; return false;
            }
          } else if (Array.isArray(object1[loopOne]) === true && Array.isArray(object2[loopTwo]) === true) {
            // if values are not primitive, handind data over to previously written eqArray to compare each item in the array
            //console.log('Object type values found on both matched keys'); //-- uncomment for debugging

            if (eqArrays(Object.values(object1[loopOne]),Object.values(object2[loopTwo])) === true) {
              //extracting array contents using Object.values and passing it as arguement to eqArrays to comapare each item
              //console.log('values matched'); // -- uncomment for debugging
              result = true;
            } else if (eqArrays(Object.values(object1[loopOne]),Object.values(object2[loopTwo])) === false) {
              //console.log('values MIS-matched'); // -- uncomment for debugging
              result = false;
            }
          } else {
            //console.log('type MIS-matched'); //-- uncomment for debugging
            result = false; return false;
          }
        }
      }
    }
  } else if (objectOneKeys.length !== objectTwoKeys.length) {
    result = false;
  } return result;
};




const ab = { a: "1", b: ["4"]};
const ba = { b: ["4"], a: "1" };
assertObjectEqual(ab, ba); // => true


const abc = { a: "1", b: "2", c: "3" };
assertObjectEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectEqual(cd, cd2); // => false