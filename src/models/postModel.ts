import { Schema, model } from 'mongoose';

interface IPost {
  author: string;
  rating: number;
  title: string;
  text: string;
}

const postSchema = new Schema<IPost>({
    author: { type: String, required: true },
    rating: { type: Number, required: false },
    title: { type: String, required: true},
    text: { type: String, required: true },
});

const Post = model<IPost>('posts', postSchema);

export default Post;