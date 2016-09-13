'use strict';

//it's a function as a value and will not hoisting
//we need a ; at the end

//exports is a empty object
module.exports = exports = {};
exports.sayHello = function(name) {
  //console.log('Hellooooo');
  if(arguments.length === 0) throw new Error('error ');
  return 'hello ' + name;
};

exports.sayGoodbye = function() {
  console.log('seeya');
};
