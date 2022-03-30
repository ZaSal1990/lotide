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


/*const countLetters = function(string) { 
  var counts = {};
  let char; 
  for (index = 0; index < string.length; index++) {
    char = string.charAt(index); //extracts 'L','H' & 'L' for 'LHL'
    counts[char] = counts[char] ? counts[char] + 1 : 1; // counting and assigning in the same line -- assign property value = +1 if exsists in the object
  }
  return counts;
}*/

const countLetters = function(string) {
  let counts = {};
  for (const char of string) {
    counts[char] = (counts[char] || 0) + 1; // assigining each character as key inside counts object LHS, ORing with 0 to see if the each character is unique in the objcet, if not, add 1 to the count
  }
  return counts;
};


console.log(countLetters('LHL'));

