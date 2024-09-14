import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import customerAuthRouter from "./routes/customerAuth.ts";
dotenv.config();
console.log(process.env.JWT_SECRET);
console.log(typeof process.env.JWT_SECRET);

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use("/customerAuth",customerAuthRouter);



app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});