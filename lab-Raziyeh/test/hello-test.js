'use strict';

const assert = require('assert');
//import the code we want to test
const greet = require('../lib/hello-modular.js');

describe('testing #greet()',function() {
  it('should return Hello razi',function() {
    let result = greet('razi');
    assert.equal(result, 'Hello razi');
  });
  it('should return error if no passing name',function(){
     assert.throws(function() {
      greet();
    },'error thrown');
  });
});

