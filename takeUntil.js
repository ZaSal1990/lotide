const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item) === true)
      break;
    else results.push(item);
  }
  return results;
};
module.exports = takeUntil;
