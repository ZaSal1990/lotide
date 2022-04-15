const findKey = function(object,callback) {
  let result;
  for (let item in object) {
    if (callback(object[item]) === true) {
      result = item;
      return result;
    }
  }
  
};
module.exports = findKey;