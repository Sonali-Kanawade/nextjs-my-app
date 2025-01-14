import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

export async function  getDataFromToken(request: NextRequest) {
    try {
        const token = request.cookies.get('token')?.value || '';
    
        const decoedToken = await jwt.verify(token, 'mynexttoken');
        return decoedToken.id;
    } catch (error: any) {
        throw new Error(error.message);
    }
}