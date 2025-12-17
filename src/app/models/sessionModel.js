import mongoose from "mongoose"
const { Schema } = mongoose

const sessionSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    index: true
  },
  refreshToken: {
    type: String,
    required: true,
    unique: true
  },
  device: String,
  ip: String,

  expiresAt: {
    type: Date,
    required: true,
    index: true
  }
}, { timestamps: true })

// TTL cleanup (based on expiresAt)
sessionSchema.index(
  { expiresAt: 1 },
  { expireAfterSeconds: 0 }
)

export const Session = mongoose.model("Session", sessionSchema)
