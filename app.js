const http = require('http')
const bodyParser = require('body-parser')
const express = require('express')
const fs=require('fs')
const mongoose = require('mongoose')
const { stringify } = require('querystring')
const { networkInterfaces } = require('os')
const { title } = require('process')
const port = 5500
const app = express()
const uri= 'mongodb+srv://guru:Mcqueen95@cluster0.3zyllju.mongodb.net/clusternone'

async function connect(){
    try{
        await mongoose.connect(uri,{useNewUrlParser:true},{useUnifiedTopology:true})
        console.log("Connected to mongodb")

    } catch(error){
            console.error(error)
    }
}
// const clusternoneSchema={
//     title:String,
//     content:String
// }
// const Note = mongoose.model("Note",clusternoneSchema) 

connect()

const DetailsSchema = {
    Name:String,
    Pass:String,
    NRIC:String,
    DOB:String,
    Email:String
}
const Data = mongoose.model("Data",DetailsSchema)

app.use(bodyParser.urlencoded({extended:true}))
app.post("/",function(req,res){
   let newData = new Data({
    Name:req.body.name,
    Pass:req.body.pass,
    NRIC:req.body.nric,
    DOB:req.body.dob,
    Email:req.body.mail
    })
    newData.save()
    res.redirect('/pages/Scan.html')
})


// app.use(bodyParser.urlencoded({extended:true}))
// app.post("/",function(req,res){
//    let newNote = new Note({
//     title:req.body.nric,
//     content:req.body.pass
//     })
//     newNote.save()
//     res.redirect('/')
// })
app.get('/',function(req,res){
    res.sendFile(__dirname+"/pages/register.html")
})

app.listen(port,function(){
    console.log("server is running on "+port)
})