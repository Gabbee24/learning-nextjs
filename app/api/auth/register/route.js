import bcrypt from 'bcryptjs';
import { mongooseConnect } from '@/utils/db';
import { NextResponse } from "next/server";
import {User} from "@/models/User";

export const POST = async (request) => {
    await mongooseConnect();
    const {username,email,password} = await request.json()


    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = new User({
        username,email,password:hashedPassword,
    });

    try{
        await newUser.save();
        return new NextResponse('User has been created', {
            status: 201,
        });
    } catch(err){
        return new NextResponse(err.message, {
            status: 500,
        });
    }
};