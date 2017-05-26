'use strict'

const mongoose = require('mongoose')
const User = require('../models/user')
const service = require('../services')

function signUp(req, res){
   const user = new User({
       email: req.body.email,
       displayName: req.body.displayName,
       password: req.body.password
   })
   user.save((err)=>{
       if (err) res.status(500).send({message: 'Error al crear el usuario'})

       return res.status(200).send({
           token: service.createToken(user)
       })
   })
}
function signIn(req, res){
    User.findOne({ email: req.body.email },(err, user)=>{
        console.log(user)
        if(err) return res.status(500).send({message: err})
        if(!user || user.length == 0) return res.status(404).send({ message: 'No existe el usuario'})        
        user.comparePassword(req.body.password, (err, isMatch)=>{
            if (err) return res.status(400).sed({message: 'Error Autenticacion'})
            if (isMatch){
                req.user = user                
                res.status(200).send({
                    message: 'Logueado correctamente',
                    token: service.createToken(user)
                })
            }
            res.status(404).send({message: 'Password incorrecto'})
        })        
    })
}

module.exports={
   signIn,
   signUp
}