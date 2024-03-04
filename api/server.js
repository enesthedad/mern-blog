import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
dotenv.config();

const connectToDb = async () =>
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(console.log("connected to the db"))
    .catch((err) => console.log(err));
const app = express();
app.get("/", (req, res) => {
  res.json({ status: 200, message: "get is working!" });
});
app.use(express.json());

app.use("/api/auth", userRouter);
app.listen(3000, () => {
  console.log("server is on 3000");
  connectToDb();
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
