'use strict';

function first(arr) {
  return arr[0];
}

function rest(arr) {
  return arr.slice(1);
}

/**
 * Returns an array of successive items from coll while pred(item) returns true.
 *
 *
 * @param {Array} coll
 * @param {Function} pred
 * @param {Object} [ctx]
 *
 * @return {Array}
 */
module.exports = function takeWhile(coll, pred, ctx) {
  if (pred(first(coll))) {
    return [first(coll)].concat(takeWhile(rest(coll), pred, ctx));
  }
  return [];
};
