import  {  Request, Response } from "express";
import Post from '../models/postModel';
import * as jwt from 'jsonwebtoken';

export const createPost=async(req:Request, res:Response) => {
    try {
        const newPost = new Post({ 
            author:req.body.author,
            rating:req.body.rating,
            title:req.body.title,
            text:req.body.text
        }) 
        await newPost.save()
        res.status(201).send(newPost)
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}


export const getAllPosts=async(req:Request,res:Response)=>{
    try{
        const posts = await Post.find()
        res.status(201).send(posts)
    }catch(error){
        res.status(500).send('Internal Server Error');
    }

}

export const getPost=async(req:Request,res:Response)=>{
    try{
    const post=await Post.findById(req.params.id)
    res.status(201).send(post)
    }catch(error){
        res.status(500).send('Internal Server Error');
    }
}

export const updatePost=async(req:Request,res:Response)=>{
    try{
    await Post.findByIdAndUpdate(req.params.id,{    
        author:req.body.author,
        rating:req.body.rating,
        title:req.body.title,
        text:req.body.text})

        res.status(201).send("post updated")
        }catch(error){
            res.status(500).send('Internal Server Error');
        }
}

export const deletePost=async(req:Request,res:Response)=>{
    try{
        const post=await Post.findByIdAndDelete(req.params.id)
        res.status(201).send("post deleted")
        }catch(error){
            res.status(500).send('Internal Server Error');
        }
}

