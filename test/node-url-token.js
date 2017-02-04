"use strict";

let generator = require('../index.js').generate;
let chai = require('chai');
let assert = chai.assert;
let should = chai.should();

describe('Node URL Token Generator', () => {

    it('Should generate token with a specific length.', done => {
        let token = generator(16);
        token.length.should.eql(16);

        token = generator(12);
        token.length.should.eql(12);

        token = generator(240);
        token.length.should.eql(240);

        done();
    });


    it('Should generate a random token (100 000 000 tests)', done => {
        let tokenArray = [];

        for (let i = 0; i < 1000000; i++) {
            tokenArray.push(generator(8));
        }

        let tokenSet = new Set(tokenArray);

        assert.isTrue(tokenArray.length === tokenSet.size);

        done();
    }).timeout(30000);

});
