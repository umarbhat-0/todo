const jwt = require('jsonwebtoken');
const usermodel =require('../models/user.model')
const bcrypt = require('bcrypt')



async function authmiddleware(req,res,next) {

   const token = req.cookies.token;
    if(!token){return res.status(400).json({
        message:"login first"
    })}

    const result = jwt.verify(token,"ababab")
    if(!result){return res.status(400).json({
        message:"login first"
    })}
    const user = await usermodel.findOne({email:result.email})
    if (user) {
        req.user=user;
        next()
    } else {
        return res.status(400).json({
        message:"login first"
    })
    
}}


module.exports= {authmiddleware}