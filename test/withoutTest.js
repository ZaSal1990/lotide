const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("returns [ 'hello', 'world' ] for [hello, world, lighthouse] for ", () => {
    assert.deepEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), [ 'hello', 'world' ]);
  });

});

// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case