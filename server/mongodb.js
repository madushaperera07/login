const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/login")
.then(result=>console.log("Database Connected"))
.catch(err=>console.log("error"))


const newSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password :{
        type : String,
        required : true
    }
})

const collection = mongoose.model("logins", newSchema)

module.exports = collection