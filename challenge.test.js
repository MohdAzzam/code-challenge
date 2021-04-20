'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1
Write a function that accepts an array of strings. Return the longest string.
------------------------------------------------------------------------------------------------ */

const longestString = (arr) => {
    // Solution code here...

    return arr.reduce((a, b) =>a.length > b.length ? a : b);

};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function called isSimilar which takes two strings and returns true if they contain the same characters and false otherwise; if for example the two strings have the same characters and they are rearranged it will return true.
examples:

isSimilar("form","from")
=> true
isSimilar("farm","from")
=> false
isSimilar("cat","act")
=> true
------------------------------------------------------------------------------------------------ */

const isSimilar = (arr) => {
    // Solution code here...

    return arr.sort((a,b)=>{
        // a.length===b.length && a.split("").sort().join() === b.split("").sort().join();
       return a.normalize() === b.normalize()? true : false;
    })
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-01.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
    test('It should return the string that is the longest in length', () => {
        expect(longestString(['hello', 'future', '401', 'students', '!'])).toStrictEqual('students');
        expect(longestString(['rubber', 'ducks', 'dont', 'quack', '!'])).toStrictEqual('rubber');
    });
});

describe('Testing challenge 2', () => {
    test('It Should return true if the string contains the same characters and false if otherwise', () => {
        expect(isSimilar(['from', 'from'])).toStrictEqual(true);
        expect(isSimilar(['farm', 'from'])).toStrictEqual(false);
        expect(isSimilar(['cat', 'act'])).toStrictEqual(true);
        expect(isSimilar(['cat', 'at'])).toStrictEqual(false);
        expect(isSimilar(['duck', 'ckud'])).toStrictEqual(true);
        expect(isSimilar(['rubber', 'duck'])).toStrictEqual(false);
        expect(isSimilar([])).toStrictEqual(false);
    });
});
