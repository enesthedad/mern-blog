import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const isUserExists = await User.findOne({ username });
  const isEmailExists = await User.findOne({ email });
  if (
    !username ||
    !email ||
    !password ||
    username === " " ||
    email === " " ||
    password === " "
  ) {
    return next(errorHandler(400, "All fields are required!"));
  }
  if (isUserExists) {
    return next(errorHandler(400, "username is already exists!"));
  }
  if (isEmailExists) {
    return next(errorHandler(400, "email is already exists!"));
  }
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  const newUser = new User({
    username,
    email,
    password: hash,
  });
  try {
    await newUser.save();
    res.status(201).json({
      message: "Signup successful",
    });
  } catch (error) {
    return next(errorHandler(401, "Signup error please try again!"));
  }
};
