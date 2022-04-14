
const countLetters = function(string) {
  string = string.replaceAll(' ','');
  let counts = {};
  for (const char of string) {
    counts[char] = (counts[char] || 0) + 1; // assigining each character as key inside counts object LHS, ORing with 0 to see if the each character is unique in the objcet, if not, add 1 to the count
  }
  return counts;
};

module.exports = countLetters;

