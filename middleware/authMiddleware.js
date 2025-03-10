const jwt=require("jsonwebtoken")

authMiddleware=(req,res,next)=>{
    const authHeader=req.header("Authorization")

    if(!authHeader)return res.status(401).json({message:"Invalid authorization"})
    const token=authHeader.split(" ")[1]
    if(!token)return res.status(401).json({message:"no token provided"})
    try{
        const verified=jwt.verify(token,"divya_secret")
        req.user=verified
        next()
    }
    catch(err){
         res.status(401).json({message:"token is not valid"})
}
}
module.exports=authMiddleware;