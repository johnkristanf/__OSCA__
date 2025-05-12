import * as z from 'zod'

export const loginSchema = z.object({
    username: z.string().nonempty({ message: 'Username is required' }),
    password: z
        .string()
        .min(8, { message: 'Password must have at least 8 characters' })
        .nonempty({ message: 'Password is required' }),

    // email: z
    //     .string()
    //     .email({ message: 'Email has already taken' })
    //     .nonempty({ message: 'Email is required' }),
})


export type LoginFormData = z.infer<typeof loginSchema>
