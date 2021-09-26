const { describe } = require('yargs');

const argv = require('yargs')
                    .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption:true,
                        describe: 'Table base'.red
                    })
                    .option('l',{
                        alias: 'listar',
                        type: 'boolean',
                        demandOption:true,
                        default: false, 
                        describe: 'Shows table in console'.green
                    })
                    .option('m',{
                        alias: 'max',
                        type: 'number',
                        demandOption:false,
                        describe: 'Table max '.green
                    })
                    .check((argv, options) =>{
                        if (isNaN(argv.b)) {
                            throw 'La base debe ser un numero';
                        }
                        return true;
                    })
                    .argv

module.exports = argv;