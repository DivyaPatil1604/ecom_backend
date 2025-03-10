const mongoose=require('mongoose')
require("dotenv").config()
const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/dew")
        console.log('MongoDB Connected...')
    }catch(err){
        console.error(err.message)
        process.exit
    }
}
module.exports=connectDB;



