const fs = require('fs');

let salida = '';

const multiplicacion = (a= 1, max,b = 1) => {
    if (b != max) {
        salida += `${a}*${b}=${a*b}\n`;
    return multiplicacion(a,max,b+1);
    }
}

const crearArchivo = async(base = 1, listar = false,max) => {
    try {
        salida += `===========\n`;
        salida += `TABLA DEL ${base}\n`;
        salida += `===========\n`;
        multiplicacion(base,max)
        if (listar) {
            console.log(salida);
        }
        const Arname = `./out/tabla-${base}.txt`
        fs.writeFileSync(Arname, salida)
        return(Arname);
    } catch (err) {
        throw err   
    }
}

module.exports = {
    crearArchivo
};