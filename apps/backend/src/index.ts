import express from "express";
const app=express();
import {name} from "@repo/common/config";
console.log(name);
app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});