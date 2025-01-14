import connect from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
connect();

export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json();
        const {email, password} = reqBody;

        const user = await User.findOne({email});

        if(!user){
            return NextResponse.json({message: "User dose not exists", status: 500})
        }

        // user is exists
        const validPassword = await bcryptjs.compare(password, user.password)
        if(!validPassword){
            return NextResponse.json({error: "Invalid password"}, {status: 400})
        }

        console.log('user == login -- ', user);

        const tokenData = {
            id: user._id,
            email: user.email,
            username: user.username
        }

        const token = await jwt.sign(tokenData, "mynexttoken", {expiresIn: "1d"});
        const response = NextResponse.json({
            message: "Login successful",
            success: true
        })

        response.cookies.set("token", token, {
            httpOnly: true, 
            
        })
        return response;
    } catch (error: any) {
        return NextResponse.json({message: error.message, status: 500})
    }
}