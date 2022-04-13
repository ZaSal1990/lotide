const assert = require('chai').assert;
const tail = require('../tail');

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// // assertEqual(words.length, 3); // original array should still have 3 elements!
// console.log(tail(words));

describe("#tail", () => {
  it("returns [Lighthouse, Labs] for [Yo Yo, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
 
});