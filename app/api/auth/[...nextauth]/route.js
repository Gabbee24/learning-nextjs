import { User } from "@/models/User";
import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';
import { mongooseConnect } from "@/utils/db";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            async authorize(credentials) {
                await mongooseConnect();

                try {
                    const user = await User.findOne({ email: credentials.email });

                    if (user) {
                        //check password
                        const isPasswordCorrect = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );

                        if (isPasswordCorrect) {
                            return user;
                        } else {
                            throw new Error("Wrong credentials");
                        }
                    } else {
                        throw new Error("user not found");
                    }
                } catch (err) {
                    throw new Error(err);
                }
            },
        }),
    ],
    pages: {
        error: "/dashboard/login"
    },
});

export { handler as GET, handler as POST }