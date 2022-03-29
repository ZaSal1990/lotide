const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  else console.log(`Assertion Failed: ${actual} !== ${expected}`);
};


/*const countLetters = function(string) {
 let newString = string.split('');
  //console.log(newString);
  let newObject = newString.reduce((prev, char) => {
    if (prev[char] >= 1) prev[char]++;
    else prev[char] = 1;
    return prev;
  }, {});
  return newObject;
};
*/


const countLetters = function(string) {
  var counts = {};
  let char; 
  for (index = 0; index < string.length; index++) {
    char = string.charAt(index); //extracts 'L','H' & 'L' for 'LHL'
    counts[char] = counts[char] ? counts[char] + 1 : 1; // counting and assigning in the same line -- assign property value = +1 if exsists in the object
  }
  return counts;
}






console.log(countLetters('LHL'));
