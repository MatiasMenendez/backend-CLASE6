const express = require ('express')
const Contenedor = require ('./contenedor')

const random = (max) => {
    return Math.floor(Math.random() * (max));
 }

const app = express()

const PORT = 8080

app.get('/productos', async (req, res) => {
    const nuevoContenido = new Contenedor("productos.txt");
    res.json(await nuevoContenido.getAll())
})



app.get('/productosRandom', async (req, res) => {
    const nuevoContenido = new Contenedor("productos.txt");
    let datos = await nuevoContenido.getAll();
    res.json(datos[random(datos.length)])
 })


const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})

server.on('error', (error) => console.log(`Error en el servidor ${error}`))

