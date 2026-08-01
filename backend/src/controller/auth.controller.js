const usermodel = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


async function createuser(req,res) {

const {name,email,password} =req.body;
const ifuserexist = await usermodel.findOne({email});

if (ifuserexist){return res.status(400).json({
    message:"user already registered"
})}

const hash = await bcrypt.hash(password,10);

const user = await usermodel.create({
    name,email,password:hash
})

const token = jwt.sign({email,id:user._id},"ababab");

res.cookie("token",token);
 res.status(202).json({message:"login sucessfully",
        user
      })
   
}

async function loginuser(req,res) {

    const {email,password}=req.body;
    const user = await usermodel.findOne({email});
    if(!user){return res.status(400).send({
        message:"wrong credentials"
    })}

    const result = await bcrypt.compare(password,user.password)
    if(result){
      const token = jwt.sign({email,id:user._id},"ababab");

      res.cookie("token",token);
      res.status(202).json({message:"login sucessfully",
        user
      })

    }else{
        return res.status(400).json({
        message:"wrong credentials"
    })
    
}};

async function logout(req,res) {
res.clearCookie("token");
            res.send('Logged out successfully.');
}


module.exports={createuser,loginuser,logout};