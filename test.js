'use strict';

const assert = require('assert');
const predicate = require('predicate');
const { describe, it } = require('mocha');
const takeWhile = require('./');

describe('takeWhile', () => {
  it('should return all negative numbers', () => {
    const arr = [-2, -1, 0, 1, 2, 3];
    assert.deepEqual(takeWhile(arr, predicate.neg), [-2, -1]);
  });

  it('should return an empty array for no initial matcher', () => {
    assert.deepEqual(takeWhile([1], predicate.neg), []);
  });
});
