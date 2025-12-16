
import crypto from "crypto"
export const generateRefreshToken = () => {
  const refreshToken = crypto.randomBytes(64).toString('hex');
  
  return refreshToken
}