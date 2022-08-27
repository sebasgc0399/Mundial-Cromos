const express = require('express')
require('dotenv').config()


const app = express()

app.get("/", (req, res) => {
console.log('Peticion Recibida')

res.send('<H1>FUNCIONA</H1>')
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto ${PORT}')
})