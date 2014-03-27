'use strict';

var assert = require('assert');
var takeWhile = require('./');
var is = require('is-predicate');

describe('takeWhile', function() {
  it('should return all negative numbers', function() {
    var arr = [-2, -1, 0, 1, 2, 3];
    assert.deepEqual(takeWhile(arr, is.neg), [-2, -1]);
  });

  it('should return an empty array for no initial matcher', function() {
    assert.deepEqual(takeWhile([1], is.neg), []);
  });
});
