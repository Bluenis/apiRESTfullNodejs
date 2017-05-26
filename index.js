'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')
mongoose.Promise = global.Promise;
mongoose.connect(config.db,(err, res)=>{
    if (err) {
        return console.log(`Error en la base: ${err}`)
    }
    console.log('conexion ok')

    app.listen(config.port, () => {
    console.log('hola Mundo');
})
})
