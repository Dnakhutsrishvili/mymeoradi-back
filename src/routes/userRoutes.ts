import { Router } from 'express';
import  {  Request, Response } from "express";
import User from '../models/userModel';

export const userRoutes = Router();

userRoutes.post('/register',async (req:Request, res:Response) => {
    try {
        var new_user = new User({ 
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            phoneNumber:req.body.phoneNumber
        }) 
        await new_user.save()
        res.status(201).send(new_user)
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});
userRoutes.get('/getUsers',async(req:Request,res:Response)=>{
    try{
        const users = await User.find()
        res.status(201).send(users)
    }catch(error){
        res.status(500).send('Internal Server Error');
    }

})
userRoutes.get('/getUser/:id',async(req:Request,res:Response)=>{
    try{
    const user=await User.findById(req.params.id)
    res.status(201).send(user)
    }catch(error){
        res.status(500).send('Internal Server Error');
    }
})
userRoutes.patch('/updateUser/:id',async(req:Request,res:Response)=>{
    try{
    await User.findByIdAndUpdate(req.params.id,{    
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            phoneNumber:req.body.phoneNumber})

        res.status(201).send("user updated")
        }catch(error){
            res.status(500).send('Internal Server Error');
        }
})
userRoutes.delete('/deleteUser/:id',async(req:Request,res:Response)=>{
    try{
        console.log(req.params.id)
        const user=await User.findByIdAndDelete(req.params.id)
        res.status(201).send("user deleted")
        }catch(error){
            res.status(500).send('Internal Server Error');
        }
})