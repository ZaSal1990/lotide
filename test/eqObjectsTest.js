const eqObjects = require('../eqObject');
const assert = require('chai').assert;


describe("#eqObjects", () => {
  it("returns true for equal objects", () => {
    const ab = { a: "1", b: ["4"]};
    const ba = { b: ["4"], a: "1" };
    assert.strictEqual(eqObjects(ab, ba),true);
  });
 
});