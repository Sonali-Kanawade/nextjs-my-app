import { NextRequest } from "next/server";
import jwt from 'jsonwebtoken';

export async function  getDataFromToken(request: NextRequest) {
    try {
        const token = request.cookies.get('token')?.value || '';
    
        const decoedToken: any = await jwt.verify(token, 'mynexttoken');
        return decoedToken.id;
    } catch (error: any) {        
        throw new Error(error.message);
    }
}