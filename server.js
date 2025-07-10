//importing Dependencies
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';

import authRoutes from "./routers/authRouter.js";
import taskRouter from "./routers/taskRouter.js";

// load enviroment variables from dotenv
dotenv.config();

// initializing express app
const app = express();

app.use(express.json());

// Load env vars, express app, etc.
app.use(cookieParser());

// Mounting Routes
app.use("/api/auth",authRoutes);
app.use("/api/tasks", taskRouter);


//Conntecting MongoDB using Mongoose
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> {
    console.log("MongoDB Connected");
// Start server
    app.listen(process.env.PORT, ()=>
    console.log(`Server connected to Port ${process.env.PORT}`)
);
})
.catch(err => {
    console.error("MongoDB connection failed:", err.message);
});

