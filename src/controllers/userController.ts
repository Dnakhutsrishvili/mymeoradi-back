import  {  Request, Response } from "express";
import User from '../models/userModel';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

export const createUser=async(req:Request, res:Response) => {
   
    try {
 bcrypt
    .hash(req.body.password, 10)
    .then(hash => {
      const new_user = new User({ 
        name:req.body.name,
        email:req.body.email,
        password:hash,
        phoneNumber:req.body.phoneNumber
    }) 
     new_user.save()
    res.status(201).send(new_user)
    })
    .catch(err => console.error(err.message))


    } catch (error) {
        res.status(500).send(error);
    }
}


export const getUsers=async(req:Request,res:Response)=>{
    try{
        const users = await User.find()
        res.status(201).send(users)
    }catch(error){
        res.status(500).send('Internal Server Error');
    }

}

export const getUser=async(req:Request,res:Response)=>{
    try{
    const user=await User.findById(req.params.id)
    res.status(201).send(user)
    }catch(error){
        res.status(500).send('Internal Server Error');
    }
}

export const updateUser=async(req:Request,res:Response)=>{
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
}

export const deleteUser=async(req:Request,res:Response)=>{
    try{
        const user=await User.findByIdAndDelete(req.params.id)
        res.status(201).send("user deleted")
        }catch(error){
            res.status(500).send('Internal Server Error');
        }
}

export const loginUser=async(req:Request, res:Response) => {
try{
    if(!req.body.name&&!req.body.password){
       return res.status(500).json({
            login: false,
            error: 'please check name and password.'
        });
    }
    console.log(req.body)
    
        const name = req.body.name;
        const password = req.body.password;
        const users = await User.find()
    
        let isPresent = false;
        let isPresentIndex = null||0;
    
    
        for(let i=0; i<users.length; i++){
            if(users[i].name === name && 
                users[i].password === password){
                isPresent = true;
                isPresentIndex = i;
                break;
            }
        }
        if(isPresent){
    
        const current_time = Math.floor(Date.now() / 1000);
        const expiration_time = current_time + 864000; // ten days
        const private_key = 'private_key';
        const claims = {
        'sub': 'public_key',
        'exp': expiration_time
    };
    
    const jwt_token = jwt.sign(claims, private_key, { algorithm: 'HS256' });
            res.json({
                login: true,
                token: jwt_token,
                data: users[isPresentIndex]
            });
    
        }else{
            res.status(500).json({
                login: false,
                error: 'please check name and password.'
            });
        }
    }catch(error){
        res.status(500).send(error);
    }
    }
