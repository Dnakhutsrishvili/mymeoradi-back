import { Router } from 'express';
import  {  Request, Response } from "express";
import User from '../models/userModel';

export const userRoutes = Router();

userRoutes.post('/register',async (req:Request, res:Response) => {
    if(req.body){
        
    }
    var new_user = new User({ 
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        phoneNumber:req.body.phoneNumber
    }) 

    await new_user.save()

    res.send(new_user)
});
userRoutes.get('/getUsers',async(req:Request,res:Response)=>{
    const users = await User.find()
    res.send(users);
})
userRoutes.patch('/updateUser',(req:Request,res:Response)=>{
    res.send("What's up doc ?!");
})
userRoutes.delete('/deleteUser',(req:Request,res:Response)=>{
    res.send("What's up doc ?!");
})