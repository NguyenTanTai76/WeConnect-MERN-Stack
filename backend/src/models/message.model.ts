import mongoose, { Document, Schema, Types } from 'mongoose';
import { IUser } from './user.model';

// Định nghĩa interface cho Message
export interface IMessage extends Document {
  _id: Types.ObjectId;
  sender: IUser; // Tham chiếu đến người gửi (User)
  receiver: IUser; // Tham chiếu đến người nhận (User)
  message: string;
  seen: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// Tạo Schema cho Message
const MessageSchema: Schema<IMessage> = new Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    receiver: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    seen: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IMessage>('Message', MessageSchema);
