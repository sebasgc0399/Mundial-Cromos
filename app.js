const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT

mongoose.connect(
    `mongodb+srv://Sebasgc0399:${process.env.MONGO_DB_PASS}@development.3i25vnv.mongodb.net/Album-Panini?retryWrites=true&w=majority`
).then((result) => {
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`)
    })
    console.log('Conexión exitosa a la BBDD')
  })
  .catch((err) => console.log(err))

const productSchema = mongoose.Schema(
    {
      name: { type: String, required: true },
      price: Number,
    },
    { timestamps: true }
  )
  
  const Product = mongoose.model('Product', productSchema)
  
  app.use(express.json())
  
  app.post('/api/v1/products', (req, res) => {
    const newProduct = new Product(req.body)
  
    newProduct
      .save()
      .then((result) => {
        res.status(201).json({ ok: true })
      })
      .catch((err) => console.log(err))
  })
  
  app.use(express.static(path.join(__dirname, 'public')))





