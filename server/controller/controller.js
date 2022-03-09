const DB = require('../model/model')
const bcrypt = require('bcrypt')

exports.login = async (req,res)=>{
    try{
        const uEmail = req.body.email

        const data = await DB.findOne({email:uEmail})
        if(data){
            const is_vali = await bcrypt.compare(req.body.password,data.password)
            if(is_vali){
                res.redirect('/dashboard')
            }else{
                res.redirect('/?login=false')
            }
        }else{
            res.redirect('/?login=false')
        }
    }catch(err){

    }
}