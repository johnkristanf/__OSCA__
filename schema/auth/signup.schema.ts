import * as z from 'zod'

export const signupSchema = z
    .object({
        firstName: z.string().nonempty({ message: 'First name is required' }),
        lastName: z.string().nonempty({ message: 'Last name is required' }),
        middleName: z.string().optional(), // Optional middle name
        contactNo: z
            .string()
            .nonempty({ message: 'Contact number is required' })
            .regex(/^\d{11}$/, { // CHANGED: Updated regex to exactly 11 digits
                message: 'Contact number must be exactly 11 digits', // CHANGED: Updated message
            }),
        username: z.string().nonempty({ message: 'Username is required' }),
        // ADDED: Regex for MM/DD/YYYY format validation
        bday: z.string()
            .nonempty({ message: 'Birthday is required' })
            .regex(/^(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])\/(19|20)\d{2}$/, {
                message: 'Birthday must be in MM/DD/YYYY format (e.g., 04/02/2000)',
            }),
        email: z.string().email({ message: 'Invalid email address' }).nonempty({ message: 'Email is required' }),
        password: z
            .string()
            .min(8, { message: 'Password must have at least 8 characters' })
            .nonempty({ message: 'Password is required' }),
        confirmPassword: z.string().nonempty({ message: 'Confirm password is required' }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword'],
    })

export type SignUpFormData = z.infer<typeof signupSchema>