import jwt from "jsonwebtoken";
import User from "../models/user"


export const signIn = async (req, res) => {
    const{ email, password} = req.body
    try {
        const user = await User.findOne({email}).exec();
        if (!user) {
            return res.json({
                message:"User không tồn tại"
            })
        }
        if (!user.authenticate(password)) {
            return res.json({
                message:"Mật khẩu không đúng"
            })
        }

        const token = jwt.sign({_id: user._id}, "123456", {expiresIn:"12h"})
        res.json({
            token,
            user:{
                _id: user._id,
                email: user.email,
                username: user.username,
                role: user.role
            }
        })
    } catch (error) {
        res.status(400).json({message:"Đăng nhập thất bại"})
    }
}

export const signUp = async (req, res) => {
    const {email, username, password} = req.body;
    try {
        const exisUser = await User.findOne({email}).exec();
        if (exisUser) {
            return res.json({ message:"User đã tồn tại"})
        }
        // console.log("đã tới đây");
        const user = await  User({email, password, username}).save()
        console.log(user);
        res.json({
            user:{
                _id:user._id,
                email: user.email,
                username: user.username
            }
        })
    } catch (error) {
        res.status(400).json({message:"Lỗi rồi"})
        
    }
}

export const userDetail = async  (request ,response) => {
    try {
        const user = await User.findOne({_id:request.params.id}).exec()
        response.json(user);
    } catch (error) {
        response.status(400).json({message: "Không tìn thấy data"})
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await User.find().exec();
        res.json(user);
    } catch (error) {
        response.status(400).json({message: "Không tìm thấy data"})
    }
}


export const userById = async (req, res, next, id) => {
    try {
        const userById = await User.findById(id).exec();
        if (!userById) {
            res.status(400).json({
                message: "Không tìm thấy user"
            })
        }

        req.profile = userById;
        req.profile.password = undefined;
        next();
    } catch (error) {
        console.log(error);
    }
}


export const updateUser = async (request, response) => {
    try {
        const user = await User.findOneAndUpdate({_id: request.params.id}, request.body, {new: true});
        response.json(user);

    } catch (error) {
        response.status(400).json({message:"Không thể sửa"});
    }
  
}

export const deleteUser = async (request, response) => {
    try {
        const user = await User.findOneAndDelete({_id: request.params.id});
        response.json(user);
    } catch (error) {
        response.status(400).json({message:"Không thể xóa"});
    }
   
}