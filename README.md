# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @zasal1990/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: returns 0th element of array
* `tail`: returns everything but 0th element of array
* `without`: returns array in first argument without data passed as second arguement
* `takeUntil`: returns array until element passed as second arguement
* `middle`: returns middle element of the array
* `map`: returns array with inline call back functionality
* `letterPositions`: returns position of letter 
* `faltten`: returns flattened arrays
* `findKeyByValue`: returns object key for value specifies as second argument
* `findKey`: returns keys of an object
* `eqObjects`: returns true/false by comparing objects keys and values
* `eqArrays`: returns true/false by comparing array values
* `countOnly`: counts items specified as second argument inside object passed as first arguement
* `countLetters`: returns count of letters in the first arguement as specified in second argument 
* `assertObjectsEqual`: returns assertion if objects are equal
* `assertArraysEqual`: returns assertion if arrays are equal
* `assertEqual`: returns assertion if primitive inputs are equal



