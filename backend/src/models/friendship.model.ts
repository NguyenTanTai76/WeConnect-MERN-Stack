import mongoose, { Document, Schema, Types } from 'mongoose';

// Định nghĩa interface cho Friendship
export interface IFriendship extends Document {
  _id: Types.ObjectId;
  requester: Types.ObjectId; // Người gửi lời kết bạn (tham chiếu tới User)
  recipient: Types.ObjectId; // Người nhận lời kết bạn (tham chiếu tới User)
  status: 'pending' | 'accepted' | 'declined' | 'blocked'; // Trạng thái của lời mời kết bạn
  createdAt?: Date;
  updatedAt?: Date;
}

// Tạo Schema cho Friendship
const FriendshipSchema: Schema<IFriendship> = new Schema(
  {
    requester: {
      type: Schema.Types.ObjectId,
      ref: 'User', // Tham chiếu tới model User
      required: true,
    },
    recipient: {
      type: Schema.Types.ObjectId,
      ref: 'User', // Tham chiếu tới model User
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'accepted', 'declined', 'blocked'],
      default: 'pending',
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IFriendship>('Friendship', FriendshipSchema);
