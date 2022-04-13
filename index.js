const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const without = require('./without');
const takeUntil = require('./takeUntil');
const map = require('./map');
const letterPositions = require('./letterPositions');
const flatten = require('./flatten');
const findKeyByValue = require('./findKeyByValue');
const eqObjects = require('./eqObject');
const eqArrays = require('./eqArray');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const assertObjectEqual = require('./assertObjectsEqual');
const assertEqual = require('./assertEqual');
const findKey = require('./findKey');
const assertArraysEqual = require('./assertArraysEqual');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  without: without,
  takeUntil: takeUntil,
  map: map,
  letterPositions: letterPositions,
  flatten: flatten,
  findKeyByValue: findKeyByValue,
  eqObjects: eqObjects,
  eqArrays: eqArrays,
  countOnly: countOnly,
  countLetters: countLetters,
  assertObjectEqual: assertObjectEqual,
  assertEqual: assertEqual,
  findKey: findKey,
  assertArraysEqual: assertArraysEqual
};