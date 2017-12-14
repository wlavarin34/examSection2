const assert = require('chai').assert;
const myCube = require('./myCube.js');

const num1 = 123;
const num1String = "123";

describe('myCube', function() {
    describe('toCube', function() {
        it('toCube(' + num1 + ') should return string value of "' + num1String + '"', function() {
            let result = myCube.toCube(num1);
            assert.equal(result, num1String);
        });

        it('toCube("' + num1String + '") should return string value of "' + num1String + '"', function() {
            let result = myCube.toCube(num1String);
            assert.equal(result, num1String);
        });

        it('toCube should return type string', function() {
            let result = myCube.toCube(num1);
            assert.typeOf(result, 'string');
        });
    });
});