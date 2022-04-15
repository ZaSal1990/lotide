const countLetters = function(string) {
  string = string.replaceAll(' ','');
  let counts = {};
  for (const char of string) {
    counts[char] = (counts[char] || 0) + 1; 
  }
  return counts;
};
module.exports = countLetters;

