import { Schema, model } from 'mongoose';

interface IUser {
  name: string;
  email: string;
  password: string;
  phoneNumber: number;

}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true,unique:true },
  password: { type: String, required: true },
  phoneNumber: { type: Number, required: true,unique:true },
});

const User = model<IUser>('Users', userSchema);

export default User;