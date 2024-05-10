const { rejects } = require('assert');
const { promises } = require('dns');
const { colors } = require('colors');
const fs=require('fs');


const crearArchivo = async (tabla = 2, listar = false, hasta=10 ) =>{

    try{
        let salida = '';
         for (let i = 1; i <= hasta; i++) {
          salida += `${tabla} X ${i} = ${tabla * i}\n`;
        }
        if (listar) {
            console.log('Esta es la tabla del '.blue,tabla)
            console.log(salida);
        }

        fs.writeFileSync(`tabla ${tabla}.txt`, salida);
        return `tabla${tabla}.txt`;

    } catch(err){
        throw err;
    }
}
module.exports = {
    crearArchivo
}
//Crear archivo de texto de forma asincronica sin manejo de error
/* fs.writeFileSync(`tabla ${tabla}.txt`, salida);
 console.log(`tabla${tabla}.txt creada` ); */

//Crear archivo de texto cn manejo de error
/* fs.writeFile(`tabla-${tabla}.txt`,salida, (err) => {  if (err) throw err;
    console.log(`tabla-${tabla}.txt creado`);
}) */