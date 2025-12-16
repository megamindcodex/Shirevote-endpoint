
import authRouters from "./auth-routes.js"

export const registerRoutes = (app) => {
  app.use("/auth", authRouters)
}