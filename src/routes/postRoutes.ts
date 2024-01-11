import { Router } from 'express';
import { createPost,getAllPosts,getPost ,updatePost,deletePost} from '../controllers/postController';


export const postRoutes = Router();

postRoutes.post('/createPost', createPost);
postRoutes.get('/getAllPosts',getAllPosts);
postRoutes.get('/getPost/:id',getPost);
postRoutes.patch('/updatePost/:id',updatePost);
postRoutes.delete('/deletePost/:id',deletePost);

