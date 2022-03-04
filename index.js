const express = require('express')
const dotenv = require('dotenv/config')
const app = express()
const path = require('path')

const router = require('./server/routes/router')

const PORT = process.env.port || 3000

//Use Routes
app.use(router)

//set ejs view engine
app.set('view engine','ejs')

//set public assets
app.use('/css',express.static(path.resolve(__dirname,'assets/css')))
app.use('/img',express.static(path.resolve(__dirname,'assets/img')))

app.get('*',(req,res)=>{
    res.render('error404',{title:'Error 404'})
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})