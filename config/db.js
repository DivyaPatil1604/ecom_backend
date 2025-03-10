const mongoose=require('mongoose')
require("dotenv").config()
const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb+srv://divyapatil:<db_password>@cluster0.eapvo.mongodb.net/divya")
        console.log('MongoDB Connected...')
    }catch(err){
        console.error(err.message)
        process.exit
    }
}
module.exports=connectDB;



