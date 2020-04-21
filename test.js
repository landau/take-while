"use strict";

const assert = require("assert");
const takeWhile = require(".");

const isNegative = (n) => n < 0;

assert.deepEqual(
  takeWhile([-2, -1, 0, 1, 2, 3], isNegative),
  [-2, -1],
  "should return all negative numbers"
);

assert.deepEqual(
  takeWhile([1], isNegative),
  [],
  "should return an empty array for no initial matcher"
);
