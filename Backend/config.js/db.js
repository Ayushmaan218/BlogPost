
const mongoose=require('mongoose');
require('dotenv').config(); 
const connectDB=async()=>{
    try{
        const MONGO_URI = 'mongodb://localhost:27017/Bloggingwebsite';
        await mongoose.connect(MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log('MongoDB connected');
    }
    catch(err){
        console.error(err.message);
        process.exit(1);
    }
    };
module.exports=connectDB;