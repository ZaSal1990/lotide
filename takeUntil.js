
const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item) === true) //inline fns generating array results after running condition on each item of array
      break;
    else results.push(item);

  }
  
  return results;
};

module.exports = takeUntil;
