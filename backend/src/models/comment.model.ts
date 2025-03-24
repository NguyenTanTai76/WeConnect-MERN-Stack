import mongoose, { Document, Schema, Types } from 'mongoose';
import { IUser } from './user.model';

// Định nghĩa interface cho Comment
export interface IComment extends Document {
  _id: Types.ObjectId;
  content: string;
  author: IUser; // Tham chiếu đến User
  post: Types.ObjectId; // Tham chiếu đến Post
  createdAt?: Date;
  updatedAt?: Date;
}

// Tạo Schema cho Comment
const CommentSchema: Schema<IComment> = new Schema(
  {
    content: { type: String, required: true },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IComment>('Comment', CommentSchema);
