"use strict";

/**
 * Contains string of all the allowed characters in the token.
 **/
let allowed = require('./lib/allowed');

const defaultLength = 16;

/**
 * Generates a random token using alphanumerics.
 * @param {Number} length - The length of the token to generate.
 **/
module.exports.generate = function(length) {
    if (!length) length = defaultLength;
    if (!Number.isInteger(length)) throw new Error('Lenght must be a integer number.');

    let token = '';
    let maxRand = allowed.length;
    let minRand = 0;

    // Generate random characters from the allowed list until length > 0
    for (let i = 0; i < length; i++) {
        token += allowed.charAt(Math.floor(Math.random() * maxRand));
    }
    return token;
}
