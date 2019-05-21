const assert = require('assert'); // JEST // Mocha // --save-dev
const {
    main
} = require('./main.js');

/*************************************************************************
 * Test Description
 * Pass in 0, get out 0
 *************************************************************************/

try {
    assert.strictEqual(main(0), 0, 'Test 1 Failed'); // Expected Output: PASS
} catch (err) {
    defaultErrorLog(err)
}


function defaultErrorLog(err) {
    console.log(`${err.message}: ${err.code}, ${err.actual} ${err.operator} ${err.expected}.`);
};