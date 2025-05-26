import NextAuth from 'next-auth'
import prisma from '@/prisma/prisma'

import Credentials from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { loginSchema } from '@/schema/auth/login.schema'
import { ZodError } from 'zod'
import { comparePassword } from '@/utils/password'

const { handlers } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        Credentials({
            credentials: {
                username: {},
                password: {},
            },
            authorize: async (credentials) => {
                try {
                    if (!credentials?.username || !credentials?.password) return null

                    console.log('JAKE THE LOGIN ADMINISTRATOR')

                    const { username, password } = await loginSchema.parseAsync(credentials)

                    const user = await prisma.user.findUnique({
                        where: { username },
                    })

                    if (user && (await comparePassword(password, user.password))) {
                        return {
                            id: user.id,
                            name: user.name,
                            username: user.username,
                            email: user.email,
                            role: user.role, // <--- INCLUDE THE ROLE HERE
                        }
                    }

                    return null
                } catch (err) {
                    if (err instanceof ZodError) return null
                    return null
                }
            },
        }),
    ],

    callbacks: {
        async jwt({ token, user }) {
            // First time JWT is created (on login)
            if (user) {
                token.id = user.id
                token.name = user.name
                token.username = user.username
                token.email = user.email
                token.role = (user as any).role; 
            }

            console.log('Final Token:', token)

            return token; // Return the modified token
        },

        async session({ session, token }) {
            // Attach data from token to session
            if (session.user) { // Ensure session.user exists
                session.user.id = token.id as string;
                session.user.name = token.name;
                session.user.username = token.username;
                session.user.email = token.email;
                (session.user as any).role = token.role; 
            }

            console.log('Final Session Data:', session)

            return session
        },
    },

    session: {
        strategy: 'jwt',
    },
})

export const { GET, POST } = handlers