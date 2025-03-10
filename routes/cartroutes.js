const express=require('express');
const { addToCart, getcart, removeFromCart } = require('../controllers/cartcontroller');
const authMiddleware = require("../middleware/authMiddleware")


const router=express.Router()
router.post("/add",authMiddleware,addToCart)
router.get("/",authMiddleware,getcart)
router.post("/remove",authMiddleware,removeFromCart)

module.exports=router;

