import connect from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helper/getDataFromToken";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();
export async function GET(request:NextRequest){
    try {
        const userid = await getDataFromToken(request)
    
        const user = await User.findOne({'_id': userid}).select('-password');
    
        return NextResponse.json({
            data: user,
            message: "User found",
        })
    } catch (error: any) {
        return NextResponse.json({
            status: 500,
            message: error.message,
        })
    }
}