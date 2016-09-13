'use strict';

//exports is a empty object
//module.exports = exports = {};
module.exports = function(name){
  if(!name) throw new Error('There is no name');
  return 'Hello ' + name;
};
