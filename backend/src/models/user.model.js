const mongoose = require('mongoose');


const userschema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    todos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'todo'
        }
    ]
})

const usermodel = mongoose.model("user",userschema);

module.exports =usermodel;


