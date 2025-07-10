// controllers/userController.js

import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// @desc Register a new user
export const registerUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already taken' });
    }

    // Hash password
    const hashed = await bcrypt.hash(password, 10);

    // Save user
    const user = new User({ username, password: hashed });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Login a user
export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' },{
      expiresIn: '1d'
    });

     // 👇 Set the token as a cookie
     res
     .cookie('token', token, {
       httpOnly: true,  // Not accessible to JS on the client side
       secure: process.env.NODE_ENV === 'production', // Only https in prod
       sameSite: 'strict',
       maxAge: 60 * 60 * 1000  // 1 hour
     })
     .json({ message: 'Logged in successfully' });

     console.log (`token: ${token}`);


    //res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
