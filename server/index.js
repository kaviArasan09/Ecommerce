import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import route from'./routers/productroute.js'

dotenv.config()

const app=express()

app.use(express.json())

app.use('/info',route)
 
const connect=async(req,res)=>{
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("DB connected successfully");
    }catch(error){
        console.log(error);
    }
}

app.listen(4000,()=>{
    console.log("server running on 4000");
    connect()
})