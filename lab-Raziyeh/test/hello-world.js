'use strict';
//import the code we want to test
const greetings = require('../lib/hello-multi-export');
const assert = require('assert');

describe('testing module greet',function(){
  describe('testin #sayHello()',function() {
    it('should return hello dunc',function(){
    //  assert.ok(true === false, 'that was crazy');
    let result = greetings.sayHello('dunc');
        assert.ok(result === 'hello dunc','was not hello dunc');
    });

    it('should throw a missing a name error',function(){
      assert.throws(function(){
        greetings.sayHello();
      },'should throw an error');
    });
  });
});
