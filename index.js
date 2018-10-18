var assert = require('assert');

const someFunction = require('./export-function-transformed');

console.log('someFunction is: ', someFunction);
assert(typeof someFunction === 'function');