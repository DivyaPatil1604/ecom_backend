const express=require('express')
const connectDB=require("./config/db")
const cors=require('cors')
const app=express()
//middlewares
app.use(express.json())
app.use(cors())

connectDB()
app.use('/auth',require("./routes/authroutes"))
app.use("/cart",require("./routes/cartroutes"))
//getting the server congiguration
app.get('/',(req,res)=>{
    res.send('getting the server')
})
const port=5000

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})