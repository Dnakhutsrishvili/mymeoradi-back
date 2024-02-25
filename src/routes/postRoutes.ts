import { Router } from 'express';
import { createPost,getAllPosts,getPost ,updatePost,deletePost} from '../controllers/postController';
import { authenticateToken } from '../controllers/userController';


export const postRoutes = Router();


postRoutes.post('/',authenticateToken,createPost);
postRoutes.get('/',authenticateToken,getAllPosts);
postRoutes.get('/:id',authenticateToken,getPost);
postRoutes.patch('/:id',authenticateToken,updatePost);
postRoutes.delete('/:id',authenticateToken,deletePost);

