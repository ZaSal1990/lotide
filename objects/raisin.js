const raisinAlarm = function(cookie) {
  let raisin = "🍇";
  return cookie.find(element => element === raisin) ? 'Raisin Found' : 'raisin not Found';
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));


const raisinAlarmArray = function(cookies) {
  let raisin = "🍇"; //storing raisin for reference
  let resultArray = [];
  let result;
  for (let items of cookies)  { //3 x loop
    for (let item of items) { // 9 x loop
      if (item === raisin) {
        result = 'raisin found';
        break; // if raisin found, break loop and push result into resultArray on line 22 - mission successful
      } else if (item !== raisin)
        result = 'no raisin found'; // if raisin not found, keep scanning the loop for raisins, only push final result (found/not found) once lopp stops iterating
    } resultArray.push(result);
  } return resultArray;
};
  
  
console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));