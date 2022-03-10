const DB = require('../model/model')
const bcrypt = require('bcrypt')
const { type } = require('express/lib/response')
const IsValid = require('./funcs')

//login
exports.login = async (req,res)=>{
    try{
        const uEmail = req.body.email

        const data = await DB.findOne({email:uEmail})
        if(data){
            const is_vali = await bcrypt.compare(req.body.password,data.password)
            if(is_vali){
                req.session.username = data.username
                res.redirect('/dashboard')
            }else{
                if(req.session.username){
                    req.session.destroy((err)=>{
                        if(err){
                            console.log(err)
                        }
                    })
                }
                res.redirect('/?login=false')
            }
        }else{
            if(req.session.username){
                req.session.destroy((err)=>{
                    if(err){
                        console.log(err)
                    }
                })
            }
            res.redirect('/?login=false')
        }
    }catch(err){

    }
}

//logout
module.exports.logout = (req,res)=>{
    if(req.session.username){
        req.session.destroy((err)=>{
            if(err){
                console.log(err)
                res.send('Something went wrong').status(500)
            }else{
                res.redirect('/?logout=true')
            }
        })
    }else{
        res.redirect('error')
    }
}

//signup
module.exports.signup = async (req,res)=>{
    try{

        const pwd = req.body.password
        const u_email = req.body.email
        const u_name = req.body.username

        if(!u_name || typeof u_name !== 'string'){
            return res.redirect('/signup?usernameVal=false')
        }

        if(u_name.length < 3){
            return res.redirect('/signup?usernameLen=false')
        }

        if(!u_email || !IsValid(u_email)){
            return res.redirect('/signup?emailVal=false')
        }

        if(!pwd || typeof pwd !== 'string'){
            return res.redirect('/signup?passVal=false')
        }

        if(pwd.length < 5){
            return res.redirect('/signup?passLen=false')
        }

        const count = await DB.findOne({email:req.body.email})
        
        if(count){
            return res.redirect('/signup?emailUse=true')
        }

        const salt = await bcrypt.genSalt(10);
        const salted_pwd = await bcrypt.hash(req.body.password, salt);

        const newUser = new DB({
            username:req.body.username,
            email:req.body.email,
            password:salted_pwd
        })

        const data = await newUser.save(newUser)
        if(data){
            res.send('User Added')
        }else{
            res.send('Unable to add')
        }
    }catch(err){
        if(err.code === 11000){
            return res.send({message:'Email already in use'})
        }
        throw err
    }
    
}