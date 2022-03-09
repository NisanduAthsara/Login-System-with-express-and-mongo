const express = require('express')
const router = express.Router()
const controller = require('../controller/controller')

router.get('/',(req,res)=>{
    res.render('index',{title:'Login'})
})

router.post('/login',controller.login)

router.get('/dashboard',(req,res)=>{
    res.send(req.session.username)
})

module.exports = router