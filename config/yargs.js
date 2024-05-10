const argv = require('yargs')
    .option('t',{
        alias: 'tabla',
        type: 'number',
        demandOption: true,
        description: 'Es el numero que se requiere para hacer la tabla',
    })
    .option('l',{
        alias:'listar',
        type: 'boolean',
        default: false,
        description: 'De vuelve la tabla',
    })
    .option('h',{
        alias:'hasta',
        type: 'number',
        default: 10,
        description: 'Limite de hasta donde ira la multiplicacion',
    })
    .check((argv, options) => {
        if(isNaN(argv.t)){
            throw 'La base tiene que ser un numero'
        }
        return true;
    })
    .argv;

module.exports = argv;
