const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const collection = require("./mongodb")

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use(cors())


app.get("/" , cors(),(req , res)=>{

})

app.post("/admin/register" , cors(),async (req , res)=>{
    const {name , email , password} = req.body;
    const data = {
        name : name,
        email : email,
        password : password
    }
    await collection.insertMany([data])
})


app.post("/admin/login" , cors(),async (req , res)=>{
    const {email , password} = req.body;
    await collection.findOne({email: email}).then(user=>{
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("Incorrect")
            }
        }else{
            res.json("No Record")
        }
    })
})




app.listen(9000 , ()=>{
    console.log("Port 9000")
})