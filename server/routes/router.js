const express = require('express')
const router = express.Router()
const controller = require('../controller/controller')

router.get('/',(req,res)=>{
    res.render('index',{title:'Login'})
})

router.post('/login',controller.login)

router.get('/dashboard',(req,res)=>{
    if(req.session.username){
        res.render('dashboard',{username:req.session.username,title:'Dashboard'})
    }else{
        res.redirect('/non?authentication=false')
    }
})

router.get('/logout',controller.logout)

module.exports = router