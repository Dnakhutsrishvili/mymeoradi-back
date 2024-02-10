import { Router } from 'express';
import {createUser,getUsers,getUser,updateUser,deleteUser,loginUser} from '../controllers/userController';

export const userRoutes = Router();

userRoutes.post('/register', createUser);
userRoutes.get('/',getUsers);
userRoutes.get('/:id',getUser);
userRoutes.patch('/:id',updateUser);
userRoutes.delete('/:id',deleteUser);
userRoutes.post('/login', loginUser);
