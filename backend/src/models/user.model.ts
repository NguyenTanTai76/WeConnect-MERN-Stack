import mongoose, { Document, Schema, Types } from 'mongoose';

// Định nghĩa interface cho User
export interface IUser extends Document {
  _id: Types.ObjectId;
  fullName: string;
  email: string;
  role: string;
  image: string;
}

// Tạo schema cho User
const UserSchema: Schema<IUser> = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    // Tùy chọn thêm: tự động thêm các trường createdAt và updatedAt
    timestamps: true,
  }
);

// Xuất model User
export default mongoose.model<IUser>('User', UserSchema);
