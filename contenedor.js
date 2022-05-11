const fs = require ('fs')

class Contenedor {

    constructor (archivoDeTexto){
        this.archivoDeTexto=archivoDeTexto
    }

    async getAll(){
        try{
            const data = await fs.promises.readFile(this.archivoDeTexto, "utf-8")
            const objetos = await data ? (JSON.parse(data)) : []
            return objetos;
        } 
        catch(err) {
            console.log(err)
        }
    }

}


module.exports = Contenedor