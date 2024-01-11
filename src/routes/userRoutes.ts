import { Router } from 'express';
import {createUser,getUsers,getUser,updateUser,deleteUser,loginUser} from '../controllers/userController';

export const userRoutes = Router();

userRoutes.post('/register', createUser);
userRoutes.get('/getUsers',getUsers);
userRoutes.get('/getUser/:id',getUser);
userRoutes.patch('/updateUser/:id',updateUser);
userRoutes.delete('/deleteUser/:id',deleteUser);
userRoutes.post('/login', loginUser);
