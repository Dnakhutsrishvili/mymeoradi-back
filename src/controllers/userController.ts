import  {  NextFunction, Request, Response } from "express";
import User from '../models/userModel';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

export const createUser=async(req:Request, res:Response) => {
   
    try {
      console.log(req.body)
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
    const { name, password } = req.body;

  try {
    const user = await User.findOne({ name });
    console.log(user)
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await  bcrypt.compare(password, user.password, function(err, result) {
        if (!result) {
            return res.status(401).json({ message: 'Incorrect password' });
          }
          const token = jwt.sign({ userId: user._id }, "2345", {
            expiresIn: '5 hour'
          });
          res.json({ token });
    });
  } catch (error) {
    res.send(error);
  }

}

