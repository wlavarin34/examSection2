const assert = require('chai').assert;
const mySquare = require('./mySquare.js');

const num1 = 123;
const num1String = "123";

describe('mySquare', function() {
    describe('toSquare', function() {
        it('toSquare(' + num1 + ') should return string value of "' + num1String + '"', function() {
            let result = mySquare.toSquare(num1);
            assert.equal(result, num1String);
        });

        it('toSquare("' + num1String + '") should return string value of "' + num1String + '"', function() {
            let result = mySquare.toSquare(num1String);
            assert.equal(result, num1String);
        });

        it('toSquare should return type string', function() {
            let result = mySquare.toSquare(num1);
            assert.typeOf(result, 'string');
        });
    });
});