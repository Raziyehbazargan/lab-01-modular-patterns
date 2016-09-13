'use strict';

//The const declaration creates a read-only reference to
//a value. It does not mean the value it holds is immutable,
//just that the variable identifier cannot be reassigned.
 // const greet = require('./hello-world');
 //
 // greet();


const greet2 = require('./lib/hello-multi-export');

greet2.sayHello();
greet2.sayGoodbye();
