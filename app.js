const colors = require('colors')
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs')
             

console.clear();

crearArchivo(argv.b, argv.l,argv.m)
    .then(nombre=> console.log(nombre))
    .catch(err => console.log(err))