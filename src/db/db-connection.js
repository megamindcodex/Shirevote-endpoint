import mongoose from "mongoose"

export const connectdb = async () => {
  await mongoose.connect(process.env.db_uri);
  console.log("MongoDB connected");
};