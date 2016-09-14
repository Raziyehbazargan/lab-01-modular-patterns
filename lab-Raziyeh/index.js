'use strict';

//The const declaration creates a read-only reference to
//a value. It does not mean the value it holds is immutable,
//just that the variable identifier cannot be reassigned.
 // const greet = require('./hello-world');
 //
 // greet();


var argv = require('yargs')
    .usage('Usage:node $0 -i [name]')
    .argv;

const greet = require('./lib/greet.js');
greet(argv.i);
