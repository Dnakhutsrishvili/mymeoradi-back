import { Schema, model } from 'mongoose';

interface IComment {
  author: string;
  comments: Schema.Types.ObjectId;
  text:string;
  post:Schema.Types.ObjectId;
}

const commentSchema = new Schema<IComment>({
    author: { type: String, required: true },
    comments:[ { type: Number,ref: 'Comment',required: false }],
    text: { type: String, required: true },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
     }
});

const Comment = model<IComment>('comment', commentSchema);

export default Comment;