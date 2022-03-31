/*Lodash fns to conduct unit test
const sumBuggy = function(a, b) {
  return a * b;
}

// TEST CODE
console.assert(sumBuggy(1, 2) === 3);
*/

//custom unit test function 
// prgm to log assertion messag eto console
const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  else console.log(`Assertion Failed: ${actual} !== ${expected}`);
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1,1);

const findKey = function(object,callback) {
  let result;
  for (let item in object) {
    if (callback(object[item]) === true) {
      result = item;
      return result;
    }
  }
  //console.log(object[item].stars) // displays stars (key) values -- uncomment for debugging
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2),"noma"); // => "noma"