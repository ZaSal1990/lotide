

const tail = function(array) {
  let newArray =  array;
  newArray = newArray.splice(1,newArray.length - 1);
  return newArray;
};


module.exports = tail;
