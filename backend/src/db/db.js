const mongoose = require('mongoose');

const connectdb  = async ()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/01-todo')
        console.log('mongodb connected successfully')
    }catch(err){
        console.error('Error connecting to MongoDB:', err);

    }
    
    
}

module.exports = connectdb;