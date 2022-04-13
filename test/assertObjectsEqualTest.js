
const assertObjectEqual = require('../assertObjectsEqual');
const assert = require('chai').assert;

describe("#assertObjectEqual", () => {
  it("returns true for equal objects", () => {
    const ab = { a: "1", b: ["4"]};
    const ba = { b: ["4"], a: "1" };
    assert.deepEqual(assertObjectEqual(ab, ba), true);
  });
 
});
