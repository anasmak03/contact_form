const express = require('express')
const app = express()
const colors = require('colors')
const mongoose = require('mongoose')
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())


const PORT = 2000
const url = "mongodb+srv://anasmk:contact123@cluster0.xa4ao.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(url,
    err => {
        if(err) throw err
        console.log('express are connected with mongodb'.green)
    })
const ejs = require('ejs')

app.use(express.static('public'))
// import ejs
app.set('view engine', 'ejs')

//middleware
const contact = require('./routes/Contact')
const msg = require('./routes/msg')

app.use('', contact)
app.use('',msg)

app.listen(PORT, (req,res) => {
    console.log('server are runing'.underline)
})