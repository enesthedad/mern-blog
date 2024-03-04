import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const isUserExists = await User.findOne({ username });
  const isEmailExists = await User.findOne({ email });
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All field are required!" });
  }
  if (isUserExists) {
    return res.status(400).json({
      message: "username is already exists!",
    });
  }
  if (isEmailExists) {
    return res.status(400).json({
      message: "email is already exists!",
    });
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
    res.status(401).json({
      message: "Signup error please try again!",
    });
  }
};
