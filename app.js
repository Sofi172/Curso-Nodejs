const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs'); // Importar argv desde config/yargs.js

console.clear();
/* 
console.log(argv);
console.log('tabla: yargs', argv.t); */

crearArchivo(argv.t, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));


/* 
const [ , ,arg3 = 'tabla = 2'] = process.argv;
const [ , tabla ='2'] = arg3.split('=');
console.log(tabla); */

//const tabla = 2;
 


  