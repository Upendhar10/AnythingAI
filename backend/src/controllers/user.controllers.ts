import { Request, Response } from "express";

import { User } from "../models/user.models";

const getCurrentUser = async (req : Request, res: Response) => {
    try {

        const userId = req.user?.userId;

        const user = await User.findById(userId).select('-password');

        if(!user){
            return res.status(404).json({
                message: "User not found",
            });
        }

        // console.log(user);
        
        return res.status(200).json({ user});
        
    } catch (error) {
        return res.status(500).json({
            message: "Failed to fetch user profile",
        });
    }
}

const updateUserProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;
    const { fullName } = req.body;

    if (!fullName || fullName.trim().length < 3) {
      return res.status(400).json({
        message: "Full name must be at least 3 characters",
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { fullName },
      { new: true }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to update profile",
    });
  }
};

export {
    getCurrentUser,
    updateUserProfile
}