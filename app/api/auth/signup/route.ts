// app/api/auth/signup/route.ts
import { NextResponse } from 'next/server';
import { signupSchema } from '@/schema/auth/signup.schema';
import prisma from '@/prisma/prisma';
import { hashPassword } from '@/utils/password';
import { ZodError } from 'zod';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { firstName, lastName, middleName, contactNo, username, bday, email, password } = signupSchema.parse(body);

        // Check if username or email already exists
        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [{ username: username }, { email: email }],
            },
        });

        if (existingUser) {
            if (existingUser.username === username) {
                return NextResponse.json({ message: 'Username already taken' }, { status: 409 });
            }
            if (existingUser.email === email) {
                return NextResponse.json({ message: 'Email already registered' }, { status: 409 });
            }
        }

        const SALT_ROUNDS = 10;
        const hashedPassword = await hashPassword(password, SALT_ROUNDS);

        const newUser = await prisma.user.create({
            data: {
                name: `${firstName} ${middleName ? middleName + ' ' : ''}${lastName}`,
                firstName,
                lastName,
                middleName,
                contactNo,
                bday: new Date(bday),
                username,
                email,
                password: hashedPassword,
                role: 'USER', 
            },
        });

        // Exclude password from the response
        const { password: _, ...userWithoutPassword } = newUser;

        return NextResponse.json({ message: 'User registered successfully', user: userWithoutPassword }, { status: 201 });
    } catch (error) {
        if (error instanceof ZodError) {
            console.error('Zod Validation Error:', error.errors);
            return NextResponse.json({ message: 'Validation error', errors: error.errors }, { status: 400 });
        }
        console.error('Signup API error:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}