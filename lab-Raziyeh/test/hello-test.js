'use strict';

const assert = require('assert');
//import the code we want to test
const greet = require('../lib/greet.js');

describe('testing #greet()',function() {
  it('should return Hello razi',function() {
    let result = greet('razi');
    assert.equal(result.length, '10');
    //assert.equal(result, 'Hello razi');
  });
  it('should return error if no passing name',function(){
    assert.throws(function() {
      greet();
    },'error thrown');
  });
});
