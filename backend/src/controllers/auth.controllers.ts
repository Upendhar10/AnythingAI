import { Request, Response } from "express";
import bcrypt from "bcrypt"

import { User } from "../models/user.models";

const registerUser = async (req : Request, res: Response) => {

    try {

        const {fullName, email, password} = req.body;

        // Validation
        if(!fullName || !email || !password){
            return res.status(400).json({
                message : "All fields are required!"
            })
        }

        if(!email.includes('@')){
            return res.status(400).json({
                message : "Invalid Email address"
            })
        }

        if(password.length < 6){
            return res.status(400).json({
                message: 'Password must be at least 6 characters long',
            });
        }

        // existing User Check
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(409).json({
                message: 'User already exists',
            });
        }

        // password hashing
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            fullName,
            email,
            password : hashedPassword // store the hashed password in the database
        })

        return res.status(201).json({
            message : "Registration Sucessfull",
            user : {
                id : newUser._id,
                fullName : newUser.fullName,
                email : newUser.email,
                role : newUser.role
            }
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
        message: 'Internal Server Error!',
        });
    }
}

export {
    registerUser
}