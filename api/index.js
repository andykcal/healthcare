import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import itemsRoute from './routes/items.js'
import ordersRoute from './routes/orders.js'
import paymentRoute from "./routes/payments.js"
import cartRoute from "./routes/carts.js";
import {fileURLToPath} from 'url';
import path,{dirname} from "path";
import mysql from "mysql2";
import morgan from "morgan";


dotenv.config();

console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_NAME);


const db = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
});


db.getConnection((err,connection) => {
    if(err){
        console.error("Error connecting to the database:",err.stack);
        return;
    }
    console.log("Connected to database");
    connection.release();
})





const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app=express()
const corsOptions = {
    origin: ['http://localhost:3000','http://localhost'],
            credentials:true,
};
app.use(express.json());
app.use(morgan('combined'));
app.use(cookieParser());
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

app.use("/api/items",itemsRoute);

app.use("/api/orders",ordersRoute);

app.use("/api/payments",paymentRoute);

app.use("/api/carts",cartRoute);

app.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`);
})




