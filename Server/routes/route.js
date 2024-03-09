import express from 'express'
import mongoose from 'mongoose'

const route = express.Router()

const User = mongoose.model('User',new mongoose.Schema({
    username: String,
    password : String 
}))

route.post('/signup',async (req, res)=>{
    try{
        const {username, password} = req.body

        const user=new user({
            username,
            password
        })
        await user.save() 

        return res.status(200).json({msg: "signup successfull"})
    }catch(error){
        return response.status(500)
    }
})
