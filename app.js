const express = require('express')
require('dotenv').config()


const app = express()

app.get("/", (req, res) => {
console.log('Peticion Recibida')

res.sendFile('index.html', {root: __dirname})
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto ${PORT}')
})