
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (item.length > 5)
      results.push(callback(item));
  }
  return results;
};



module.exports = map;