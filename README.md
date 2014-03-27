[![Build Status](https://travis-ci.org/landau/take-while.svg)](https://travis-ci.org/landau/take-while)

take-while
==========

Returns an array of successive items from coll while pred(item) returns true.

```js
function takeWhile(coll, pred, ctx) { }
```

## Install

`npm i -S take-while`

## Usage

```js
var assert = require('assert');
var takeWhile = require('take-while');
var is = require('is-predicate');

var arr = [-2, -1, 0, 1, 2, 3];
assert.deepEqual(takeWhile(arr, is.neg), [-2, -1]); // true
```
