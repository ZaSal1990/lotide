const countOnly = require('../countOnly');
const assert = require('chai').assert;


describe("#countOnly", () => {
  it("Only counts objects in given array mentioned in the other ", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), { Jason: 1, Karima: undefined, Fang: 2 });
  });
 
});



// console.log(result1);
// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);