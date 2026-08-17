require('dotenv').config(); 
const mongoose = require('mongoose')
const mongoUrl = process.env.mongoUrl;
//mongoose.connect(mongoUrl,()=> console.log("Database Succesfully Connected"))
console.log(mongoUrl)