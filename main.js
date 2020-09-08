const express = require('express')
const app = express()
var cors = require("cors");
const bodyParser = require('body-parser')
const multer = require('multer') // v1.0.5
const upload = multer() // for parsing multipart/form-data

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors());

var list=require("./data")

app.get('/', function (req, res) {
    //its work  
    res.send("list")
})
 
app.get('/getList', function (req, res) {
  //return list
  res.send(list)
})

app.post('/addList',function (req, res) {
    //add list to db then return "getList"
    
    list.push({text:req.body.text,checked:false})
    res.send(list)
})

app.post('/editList',function (req, res) {
    //edit list item with id on db then return "getList"
    list[req.body.id].checked=req.body.checked
    res.send(list)
})

app.post('/delList',function (req, res) {
    //delete list item with id on db then return "getList"
    list.splice(req.body.id, 1);
    res.send(list)
})

app.listen(8080)
console.log("run on 8080")

module.exports = app;