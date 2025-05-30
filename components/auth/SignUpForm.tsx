'use client'

import { SignUpFormData, signupSchema } from '@/schema/auth/signup.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import PrimaryButton from '../ui/primary-button'
import { cn } from '@/lib/utils' // Assuming this is clsx or similar
import { Eye, EyeOff, Loader2 } from 'lucide-react' // Added Loader2 icon

// Import react-datepicker and its CSS
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { format } from 'date-fns'

interface SignUpFormProps {
    onBackToLogin: () => void;
}

const SignUpForm = ({ onBackToLogin }: SignUpFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        watch, // Useful if you need to watch a field's value for conditional rendering or validation
        setError, // For manual error setting
        clearErrors, // For clearing errors before submission
    } = useForm<SignUpFormData>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            middleName: '',
            contactNo: '',
            username: '',
            bday: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    })

    const router = useRouter()

    const [isSigningUp, setIsSigningUp] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    // Using setError directly for server-side errors, no need for a separate state
    // const [signupError, setSignupError] = useState<string | null>(null);

    const onSignUp = async (data: SignUpFormData) => {
        setIsSigningUp(true)
        clearErrors('root.serverError') // Clear previous server-side errors

        try {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                // Set server-side error using react-hook-form's setError
                setError('root.serverError', {
                    type: 'manual',
                    message: result.message || 'An error occurred during signup. Please try again.',
                });
                return;
            }

            // On successful signup, navigate back to login and potentially show a success message
            onBackToLogin();
            // TODO: Replace with a more sophisticated notification system (e.g., toast library)
            // For example: toast.success('Sign up successful! Please log in.');
            alert('Sign up successful! Please log in.'); // Keeping alert for now as per original code
        } catch (error) {
            console.error('Signup error:', error);
            setError('root.serverError', {
                type: 'manual',
                message: 'An unexpected error occurred. Please try again.',
            });
        } finally {
            setIsSigningUp(false);
        }
    }

    return (
        <div className="w-full">
            <div className="mb-8 text-center">
                <h2 className="text-4xl font-bold text-gray-800">Create Your Account</h2>
                <p className="text-gray-600 mt-2">Join OSCA today and connect with the community.</p>
            </div>

            <form onSubmit={handleSubmit(onSignUp)} className="space-y-6">
                <div className="grid grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-2"> {/* Adjusted gap-y */}
                    {/* First Name */}
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                            First Name
                        </label>
                        <div className="mt-1">
                            <input
                                {...register('firstName')}
                                id="firstName"
                                placeholder="Enter your first name"
                                className={cn(
                                    "block w-full rounded-md border border-gray-300 px-4 py-2 text-base text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500",
                                    errors.firstName && "border-red-500 focus:border-red-500 focus:ring-red-500"
                                )}
                            />
                            {errors.firstName && (
                                <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Last Name */}
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                            Last Name
                        </label>
                        <div className="mt-1">
                            <input
                                {...register('lastName')}
                                id="lastName"
                                placeholder="Enter your last name"
                                className={cn(
                                    "block w-full rounded-md border border-gray-300 px-4 py-2 text-base text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500",
                                    errors.lastName && "border-red-500 focus:border-red-500 focus:ring-red-500"
                                )}
                            />
                            {errors.lastName && (
                                <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Middle Name (Optional) */}
                    <div>
                        <label htmlFor="middleName" className="block text-sm font-medium text-gray-700">
                            Middle Name (Optional)
                        </label>
                        <div className="mt-1">
                            <input
                                {...register('middleName')}
                                id="middleName"
                                placeholder="Enter your middle name"
                                className={cn(
                                    "block w-full rounded-md border border-gray-300 px-4 py-2 text-base text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500",
                                    errors.middleName && "border-red-500 focus:border-red-500 focus:ring-red-500"
                                )}
                            />
                            {errors.middleName && (
                                <p className="mt-1 text-sm text-red-600">{errors.middleName.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Contact No. */}
                    <div>
                        <label htmlFor="contactNo" className="block text-sm font-medium text-gray-700">
                            Contact Number
                        </label>
                        <div className="mt-1">
                            <input
                                {...register('contactNo')}
                                id="contactNo"
                                type="tel"
                                maxLength={11}
                                placeholder="e.g., 09123456789"
                                className={cn(
                                    "block w-full rounded-md border border-gray-300 px-4 py-2 text-base text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500",
                                    errors.contactNo && "border-red-500 focus:border-red-500 focus:ring-red-500"
                                )}
                            />
                            {errors.contactNo && (
                                <p className="mt-1 text-sm text-red-600">{errors.contactNo.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Username */}
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <div className="mt-1">
                            <input
                                {...register('username')}
                                id="username"
                                placeholder="Create a username"
                                className={cn(
                                    "block w-full rounded-md border border-gray-300 px-4 py-2 text-base text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500",
                                    errors.username && "border-red-500 focus:border-red-500 focus:ring-red-500"
                                )}
                            />
                            {errors.username && (
                                <p className="mt-1 text-sm text-red-600">{errors.username.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Birthday - Now with DatePicker */}
                    <div>
                        <label htmlFor="bday" className="block text-sm font-medium text-gray-700">
                            Birthday
                        </label>
                        <div className="mt-1">
                            <Controller
                                name="bday"
                                control={control}
                                render={({ field }) => (
                                    <DatePicker
                                        selected={field.value ? new Date(field.value) : null}
                                        onChange={(date: Date | null) => {
                                            // Format the date to MM/DD/YYYY before sending to field.onChange
                                            field.onChange(date ? format(date, 'MM/dd/yyyy') : '');
                                        }}
                                        dateFormat="MM/dd/yyyy" // Standard format for display
                                        showYearDropdown
                                        showMonthDropdown
                                        dropdownMode="select"
                                        placeholderText="MM/DD/YYYY"
                                        className={cn(
                                            "block w-full rounded-md border border-gray-300 px-4 py-2 text-base text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500",
                                            errors.bday && "border-red-500 focus:border-red-500 focus:ring-red-500"
                                        )}
                                    />
                                )}
                            />
                            {errors.bday && (
                                <p className="mt-1 text-sm text-red-600">{errors.bday.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Email */}
                    <div className="md:col-span-2"> {/* Takes full width on medium screens and up */}
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <div className="mt-1">
                            <input
                                {...register('email')}
                                id="email"
                                type="email"
                                placeholder="Enter your email address"
                                className={cn(
                                    "block w-full rounded-md border border-gray-300 px-4 py-2 text-base text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500",
                                    errors.email && "border-red-500 focus:border-red-500 focus:ring-red-500"
                                )}
                                autoComplete="email"
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Password */}
                    <div className="md:col-span-2"> {/* Takes full width on medium screens and up */}
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <div className="mt-1">
                            <div className="relative">
                                <input
                                    {...register('password')}
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Create a password"
                                    className={cn(
                                        "block w-full rounded-md border border-gray-300 px-4 py-2 text-base text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500",
                                        errors.password && "border-red-500 focus:border-red-500 focus:ring-red-500"
                                    )}
                                    autoComplete="new-password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                                    tabIndex={-1}
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="md:col-span-2"> {/* Takes full width on medium screens and up */}
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <div className="mt-1">
                            <div className="relative">
                                <input
                                    {...register('confirmPassword')}
                                    id="confirmPassword"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    placeholder="Confirm your password"
                                    className={cn(
                                        "block w-full rounded-md border border-gray-300 px-4 py-2 text-base text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500",
                                        errors.confirmPassword && "border-red-500 focus:border-red-500 focus:ring-red-500"
                                    )}
                                    autoComplete="new-password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                                    tabIndex={-1}
                                >
                                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                            {errors.confirmPassword && (
                                <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
                            )}
                        </div>
                    </div>
                </div>

                {errors.root?.serverError && ( // Display server-side error
                    <div className="mt-4 text-center text-sm text-red-600">
                        {errors.root.serverError.message}
                    </div>
                )}

                <div className="mt-6">
                    <PrimaryButton
                        type="submit"
                        className={cn(
                            'flex w-full items-center justify-center rounded-md px-4 py-2.5 text-lg font-semibold text-white shadow-md transition duration-300 ease-in-out',
                            isSigningUp
                                ? 'cursor-not-allowed bg-gray-400'
                                : 'bg-emerald-600 hover:bg-emerald-700'
                        )}
                        disabled={isSigningUp}
                    >
                        {isSigningUp ? (
                            <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                Signing Up...
                            </>
                        ) : (
                            'Sign Up'
                        )}
                    </PrimaryButton>
                </div>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
                Already have an account?{' '}
                <button
                    type="button"
                    onClick={onBackToLogin}
                    className="font-semibold text-emerald-600 hover:text-emerald-500 transition duration-200 cursor-pointer underline"
                >
                    Log in here
                </button>
            </p>
        </div>
    )
}

export default SignUpForm;