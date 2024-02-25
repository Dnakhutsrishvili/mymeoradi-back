import { Schema, model } from 'mongoose';

interface IPost {
  author: string;
  comments: Schema.Types.ObjectId;
  title: string;
  text: string;
}

const postSchema = new Schema<IPost>({
    author: { type: String, required: true },
    comments:[ { type: Number,ref: 'Comment',required: false }],
    title: { type: String, required: true},
    text: { type: String, required: true },
});

const Post = model<IPost>('posts', postSchema);

export default Post;