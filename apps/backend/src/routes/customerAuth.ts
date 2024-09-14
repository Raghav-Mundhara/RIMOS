import express from 'express';
import zod from 'zod';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
dotenv.config();
const prisma = new PrismaClient();
const customerAuthRouter = express.Router();
const customerRegisterSchema = zod.object({
    fName: zod.string(),
    lName: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(8),
});

const customerLoginSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
});
customerAuthRouter.post('/register',async (req, res) => {
    const { fName, lName , email, password } = req.body;
    try {
        customerRegisterSchema.parse({ fName, lName, email, password });
    } catch (error) {
        return res.status(400).json({ error:"Invalid data" });
    }
    try {
        console.log("Creating user");
        const user=await prisma.user.findUnique({
            where:{
                email:email
            }
        });
        
        if(user){
            return res.status(400).json({error:"User already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.user.create({
            data: {
                firstName: fName,
                lastName: lName,
                email,
                password: hashedPassword,
            },
        })
    } catch (error) {
        console.log(error);
    }
    const jwtSecret = process.env.JWT_SECRET;
    if(!jwtSecret){
        return res.status(500).json({ error: "JWT SECRET ERROR" });
    }
    try{
        const token=jwt.sign({email},process.env.JWT_SECRET as string);
        res.json({token});
    }catch(error){
        res.status(500).json({error:"JWT ERROR"});
    }
});

customerAuthRouter.post('/login',async (req, res) => {
    const {email , password} = req.body;
    try{
        customerLoginSchema.parse({email,password});
    }catch(error){
        return res.status(400).json({error:"Invalid data"});
    }

    const user=await prisma.user.findUnique({
        where:{
            email:email,
        }
    });
    if(!user){
        return res.status(400).json({error:"User not found"});
    }
    const isPasswordValid=await bcrypt.compare(password,user.password);
    
    if(!isPasswordValid){
        return res.status(400).json({error:"Invalid password"});
    }
    const jwtSecret = process.env.JWT_SECRET;
    if(!jwtSecret){
        return res.status(500).json({ error: "JWT SECRET ERROR" });
    }
    try{
        const token=jwt.sign({email},process.env.JWT_SECRET as string);
        res.json({token});
    }catch(error){
        res.status(500).json({error:"JWT ERROR"});
    }
});

export default customerAuthRouter;