const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
// schema
// new mongoose.Schema({})
const userSchema=new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    email:{type:String,required:true,lowercase:true,trim:true},// mandatory feild
    phone_number:{type:Number,default:0},
    password:{type:String,required:true}
})

const User=mongoose.model("User",userSchema)

module.exports=User