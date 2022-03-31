const letterPositions = function(sentence) {
  const results = {};
  

  for (let index = 0; index < sentence.length; index++) {
    results[sentence[index]] = (results[sentence[index]] || 0) + 1;
    for (indexTwo = 0; indexTwo < results[sentence[index]]; results[sentence[index]]++)
    {
      if (typeof results[sentence[index]] === 'number')
      {
        let newArray = [];
        results[sentence[index]] = newArray.push(indexTwo);
      }
      else if (typeof results[sentence[index]] === 'object')
      {
        results[sentence[index]] = newArray.push(indexTwo);
      }
    }

    //results[sentence[index]] = results[sentence[index]] > 1 ? createDataSet(index, Object.values(results[sentence[index]])) : index;
    
   
    
  }
 
  return results;
  
};

const createDataSet = function(index, value) {
return value;
};

console.log(letterPositions("hello"));