const letterPositions = function(sentence) {
  let result = {};
  for (let char = 0; char < sentence.length; char++) {
    if (result[sentence.charAt(char)]) {
      result[sentence.charAt(char)].push(char);
    } else {
      result[sentence.charAt(char)] = [char];
    }
  }
  return result;
};
module.exports = letterPositions;