
// const assertEqual = function(actual, expected) {
//   if (actual === expected)
//     console.log(`Assertion Passed: ${actual} === ${expected}`);
//   else console.log(`Assertion Failed: ${actual} !== ${expected}`);
// };

const findKeyByValue = function(object, value) {
let result;

  for (let values in object)  {
    if (object[values] === value)
      result = values; // returning key to result if the value matches
}
return result;
}


// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


module.exports = findKeyByValue;