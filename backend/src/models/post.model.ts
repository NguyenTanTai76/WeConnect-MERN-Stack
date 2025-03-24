import mongoose, { Document, Schema, Types } from 'mongoose';
import { IUser } from './user.model';

//  Định nghĩa interface Post
export interface IPost extends Document {
  _id: Types.ObjectId;
  content: string;
  image: string;
  imagePublicId: string;
  author: Types.ObjectId | IUser; // Tham chiếu đến User
  likes: Types.ObjectId[]; // Mảng các _id của User
  comments: Types.ObjectId[]; // Mảng các _id của Comment
  createdAt: Date;
  updatedAt: Date;
}

// Tạo Schema cho Post
const PostSchema: Schema<IPost> = new Schema(
  {
    content: { type: String, required: true },
    image: { type: String, required: true },
    imagePublicId: { type: String, required: true },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: [],
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment', 
        default: [],
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<IPost>('Post', PostSchema);
