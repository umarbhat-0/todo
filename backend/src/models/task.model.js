const mongoose = require('mongoose');

const todoschema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    detail:{
        type:String,
        required:true
    }
})

const todomodel = mongoose.model("todo",todoschema);

module.exports=todomodel;