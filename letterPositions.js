const letterPositions = function(sentence) {
  let result = {};
  for (let char = 0; char < sentence.length; char++) {
    if (result[sentence.charAt(char)]) { // e.g. if 'h' exixts in result for char = 0
      result[sentence.charAt(char)].push(char); // push to existing array
    } else {
      result[sentence.charAt(char)] = [char]; //if no value to key 'h' in result, assign it index inside an array
    } // if part of teh loop will check if array exists, then push to it
  }
  return result;
};



console.log(letterPositions("hello"));