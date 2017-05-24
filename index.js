'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/api/product',(req, res)=>{
    res.send(200,{products:[]})
})

app.get('/api/product/:productId',(req, res)=>{

})

app.post('/api/product', (req,res)=>{
    console.log(req.body)
    res.status(200).send({message: 'el prod se recibio'})
})

app.put('/api/product/:productId',(req,res)=>{

})

app.delete('/api/product/:productId',(req,res)=>{

})

app.listen(3000, () => {
    console.log('hola mundo');
})