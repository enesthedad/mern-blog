import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
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

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password || email === " " || password === " ") {
    return next(errorHandler(400, "All fields are required!"));
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return next(errorHandler(400, "username doesn't exists!"));
    }
    const comparePasswords = bcrypt.compareSync(password, user.password);
    if (!comparePasswords) {
      return next(400, "incorrect password!!");
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_KEY);
    const { password: pass, ...rest } = user._doc;
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    return next(error);
  }
};

export const google = async (req, res, next) => {
  const { email, name, googlePhotoUrl } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_KEY);
      const { password, ...rest } = user._doc;
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(rest);
    } else {
      const generatedPassword = email + process.env.JWT_KEY;
      const hashedPassword = bcrypt.hashSync(generatedPassword, 10);
      const newUser = new User({
        username: name.toLowerCase().split(" ").join(""),
        email,
        password: hashedPassword,
        profilePicture: googlePhotoUrl,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_KEY);
      const { password, ...rest } = newUser._doc;
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};
