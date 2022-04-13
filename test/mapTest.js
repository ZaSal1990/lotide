const map = require('../map');
const assert = require('chai').assert;



describe("#map", () => {
  it("returns ['GROUND','CONTROL'] for [ground, control, to, major, tom]", () => {
    assert.deepEqual(map(["ground", "control", "to", "major", "tom"], (word) => {
      return word.toUpperCase();
    }), ['GROUND','CONTROL']);
  });
});
