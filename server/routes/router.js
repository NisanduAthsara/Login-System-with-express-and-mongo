const express = require('express')
const router = express.Router()
const controller = require('../controller/controller')

router.get('/',(req,res)=>{
    res.render('index',{title:'Login'})
})

router.post('/login',controller.login)

router.get('/dashboard',(req,res)=>{
    if(req.session.username){
        res.send(req.session.username)
    }else{
        res.redirect('/non?authentication=false')
    }
})

module.exports = router