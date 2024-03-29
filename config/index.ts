import express, { Express } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { userRoutes } from "../src/routes/userRoutes";
import { postRoutes } from "../src/routes/postRoutes";
import cors from 'cors';




dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;






const options: cors.CorsOptions = {
  origin: "*"
};
app.use(cors(options));
 mongoose.connect('mongodb://127.0.0.1:27017/blog', { retryWrites: true, w: 'majority' })
    .then( () => {
      console.log('Connected to mongoDB.');
    })
    .catch((error) => {
      console.log(error);
    });
    app.use(express.json());
    app.use("/users",userRoutes)
    app.use("/posts",postRoutes)
  
 
    
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});