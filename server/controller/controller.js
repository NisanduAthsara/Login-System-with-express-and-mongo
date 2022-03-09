const DB = require('../model/model')
const bcrypt = require('bcrypt')

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