const express = require('express')
const dotenv = require('dotenv/config')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const session = require('express-session')
const {v4:uuidv4} = require('uuid')

const router = require('./server/routes/router')

const PORT = process.env.port || 3000

app.use(express.urlencoded({extended:true}))

//connect to the database
try{
    mongoose.connect(process.env.MONGO,{useNewUrlParser:true},()=>{
        console.log('DB connected');
    })
}catch(err){
    console.log(err);
}

app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}))

//Use Routes
app.use(router)

//set ejs view engine
app.set('view engine','ejs')

//set public assets
app.use('/css',express.static(path.resolve(__dirname,'assets/css')))
app.use('/img',express.static(path.resolve(__dirname,'assets/img')))
app.use('/js',express.static(path.resolve(__dirname,'assets/js')))

app.get('*',(req,res)=>{
    res.render('error404',{title:'Error 404'})
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})