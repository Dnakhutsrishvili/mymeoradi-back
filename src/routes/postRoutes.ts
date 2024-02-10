import { Router } from 'express';
import { createPost,getAllPosts,getPost ,updatePost,deletePost} from '../controllers/postController';


export const postRoutes = Router();

postRoutes.post('/', createPost);
postRoutes.get('/',getAllPosts);
postRoutes.get('/:id',getPost);
postRoutes.patch('/:id',updatePost);
postRoutes.delete('/:id',deletePost);

