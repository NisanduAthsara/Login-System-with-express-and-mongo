const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    username:{
        type:'String',
        required:true
    },
    email:{
        type:'String',
        required:true,
        unique:true
    },
    password:{
        type:'String',
        required:true
    }
})

module.exports = mongoose.model('rest4',Schema)