import mongoose from "mongoose"
const {Schema} = mongoose

const sessionSchema = new Schema({
  userId: String,
  refreshToken: String,
  device: String,
  ip: String,
  createdAt: {
  type: Date,
  default: Date.now,
  expires: 60 * 60 * 24 // 24 hours in seconds or you can just us the '24h' convention. it still works.
}
})

export const Session = mongoose.model("Session", sessionSchema)