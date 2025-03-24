import mongoose, { Document, Schema, Types } from 'mongoose';

export interface INotification extends Document {
  _id: Types.ObjectId;
  sender: Types.ObjectId; // Lưu ID của người gửi (User)
  receiver: Types.ObjectId; // Lưu ID của người nhận (User)
  type: string; // Loại thông báo, ví dụ: "like"
  notificationData: Record<string, any>; // Dữ liệu bổ sung liên quan đến thông báo
  seen: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const NotificationSchema: Schema<INotification> = new Schema(
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
    type: {
      type: String,
      required: true,
    },
    notificationData: {
      type: Schema.Types.Mixed, // Dùng Mixed để lưu trữ bất kỳ kiểu dữ liệu nào (ở đây là object)
      required: true,
    },
    seen: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model<INotification>(
  'Notification',
  NotificationSchema
);
