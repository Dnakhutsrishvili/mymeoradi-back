import { Router } from 'express';
import {createUser,getUsers,getUser,updateUser,deleteUser,loginUser,authenticateToken} from '../controllers/userController';


export const userRoutes = Router();

userRoutes.post('/register', createUser);
userRoutes.get('/',authenticateToken,getUsers);
userRoutes.get('/:id',authenticateToken,getUser);
userRoutes.patch('/:id',authenticateToken,updateUser);
userRoutes.delete('/:id',authenticateToken,deleteUser);
userRoutes.post('/login', loginUser);
