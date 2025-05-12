import z from 'zod'

export const seniorsFormSchema = z.object({
    firstName: z.string().nonempty('First name is required'),
    middleName: z.string().optional(),
    lastName: z.string().nonempty('Last name is required'),

    email: z.string().email('Enter a valid email').nonempty('Email is required'),
    contactNumber: z.string().nonempty('Contact Number is required'),

    age: z.string().nonempty('Age is required'),
    birthDate: z.string().nonempty('Birth Date is required'),

    gender: z.string().nonempty('Gender is required'),
    barangay: z.string().nonempty('Barangay is required'),
    purok: z.string().nonempty('Purok is required'),
})


export type SeniorsFormData = z.infer<typeof seniorsFormSchema>
