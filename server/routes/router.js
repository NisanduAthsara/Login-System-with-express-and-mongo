const express = require('express')
const router = express.Router()
const controller = require('../controller/controller')

router.get('/',(req,res)=>{
    res.clearCookie('pwd');
    res.clearCookie('uemail');
    res.clearCookie('uname');
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

router.post('/api/signup',controller.signup)

router.get('/logout',controller.logout)

router.get('/signup',(req,res)=>{
    res.render('signup',{title:'Sign Up',uname:req.cookies.uname,pwd:req.cookies.pwd,uemail:req.cookies.uemail})
})

module.exports = router