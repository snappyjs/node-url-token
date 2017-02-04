# node-url-token [![NPM version](https://badge.fury.io/js/node-url-token.svg)](https://npmjs.org/package/node-url-token)

> Easy to user interface to generate random URL-safe tokens. The method is fast enough to generate the token(s) synchronosly. 

## Installation

```sh
$ npm install --save node-url-token
```

## Testing
There are two tests, one to test that a token of length 8 becomes unique when generating 1 000 000 tokens, this test can fail but the chance of it failing is pretty small. The 'longer' the length is the less chance there is for a collision of tokens.

## Usage
Simple usage, only one method to call with option length (length of the token to be generated in characters).

```js
var tokenGenerator = require('node-url-token');
let token = tokenGenerator.generate(32);        // Generate a token with 16 characters.
let token2 = tokenGenerator.generate();         // Generate a token with default length (16)
```
## Options
There is only one options and that is the length of the URL-safe token to be generated.

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, please create [an issue.](https://github.com/Steeljuice/node-url-token/issues)

## License
MIT © [Tommy Dronkers](https://github.com/Steeljuice)