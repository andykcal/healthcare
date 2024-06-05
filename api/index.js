
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import cartsRoute from './routes/carts.js'
import itemsRoute from './routes/items.js'
import {fileURLToPath} from 'url';
import path,{dirname} from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app=express()

dotenv.config();

const connect = async() => {
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB");
    }catch(error){
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected");
});

app.use(express.json());
app.use(cookieParser())


const corsOptions = {
    origin: ['https://localhost:3000','https://localhost','http://localhost',
            'http://localhost:3000'],
            credentials:true,
};
app.use(cors(corsOptions));

app.use((err,req,res,next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    });
});

app.use('/uploads',express.static(path.join(__dirname,'uploads')));

app.use("/api/auth",authRoute);

app.use("/api/users",usersRoute);

app.use("/api/carts",cartsRoute);

app.use("/api/items",itemsRoute);

app.listen(process.env.PORT,() => {
    connect();
    console.log("Connected to backend");
})




