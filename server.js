const express=require('express')
const connectDB=require("./config/db")
const cors=require('cors')
const app=express()

const allowedOrigins=["ecom-forntend.vercel.app","ecom-forntend-git-main-divya-patils-projects-70b22e19.vercel.app","ecom-forntend-8duh2tq7b-divya-patils-projects-70b22e19.vercel.app"]
//middlewares


app.use(express.json())
app.use(cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
              callback(null, true);
            } else {
              callback(new Error("Not allowed by CORS"));
            }
          },
          credentials: true, // Allows cookies and authentication headers if needed
      
    }))

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