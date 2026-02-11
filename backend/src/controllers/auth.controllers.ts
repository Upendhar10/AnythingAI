import { Request, Response } from "express";
import bcrypt from "bcrypt"

import { User } from "../models/user.models";
import { generateJWTToken } from "../utils/jwt";

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

const loginUser = async (req : Request, res : Response) => {
    try {
        
        const {email, password} = req.body;

        // validation
        if (!email || !password) {
            return res.status(400).json({
                message: 'All fields are required',
            });
        }

        if (!email.includes('@')) {
            return res.status(400).json({
                message: 'Invalid email address',
            });
        }

        // Finding User in the Database
        const reqUser = await User.findOne({ email });

        if (!reqUser) {
            return res.status(404).json({
                message: 'User not Found!',
            });
        }

        // password comparison
        const isPasswordMatch = await bcrypt.compare(password, reqUser.password)

        if(!isPasswordMatch){
            return res.status(401).json({
                message: 'Invalid Credentials',
            });
        }

        // generate JWT token
        const token = generateJWTToken({
            userId : reqUser._id.toString(), 
            role : reqUser.role as 'user' | 'admin'
        });

        return res.status(200).json({
            message: 'Login Sucessfull',
            token,
            user: {
                id: reqUser._id,
                name: reqUser.fullName,
                email: reqUser.email,
                role: reqUser.role,
            },
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
        message: 'Internal Server Error!',
        });
    }
}

export {
    registerUser,
    loginUser
}