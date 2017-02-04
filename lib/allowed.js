"use strict";

const numeric = '0123456789';
const alphaLower = 'abcdefghijklmnopqrstuvwxyz';
const alphaUpper = alphaLower.toUpperCase();

/**
 * The characters that are allowed in the token.
 **/
module.exports = numeric + alphaLower + alphaUpper;
