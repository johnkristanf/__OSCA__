'use client'

import { SignUpFormData, signupSchema } from '@/schema/auth/signup.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import PrimaryButton from '../ui/primary-button'
import { cn } from '@/lib/utils'
import { Eye, EyeOff } from 'lucide-react'

// Import react-datepicker and its CSS
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { format } from 'date-fns' 

interface SignUpFormProps {
    onBackToLogin: () => void;
}

const SignUpForm = ({ onBackToLogin }: SignUpFormProps) => {
    // REACT FORM INITIALIZATION
    const {
        register,
        handleSubmit,
        formState: { errors },
        control, 
        watch,
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
    const [signupError, setSignupError] = useState<string | null>(null);

    const onSignUp = async (data: SignUpFormData) => {
        setIsSigningUp(true)
        setSignupError(null)

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
                setSignupError(result.message || 'An error occurred during signup.');
                setIsSigningUp(false);
                return;
            }

            onBackToLogin();
            alert('Sign up successful! Please log in.');
        } catch (error) {
            console.error('Signup error:', error);
            setSignupError('An unexpected error occurred. Please try again.');
        } finally {
            setIsSigningUp(false);
        }
    }

    return (
        <div>
            <div className="w-full sm:w-[450px] flex min-h-full bg-gray-200 rounded-md flex-1 flex-col justify-center px-6 lg:px-8">
                <div className="flex items-center justify-center gap-3 sm:mx-auto sm:w-full sm:max-w-sm mt-10">
                    <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Sign Up
                    </h2>
                </div>

                <div className="mt-8 pb-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit(onSignUp)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
                            {/* First Name */}
                            <div>
                                <label htmlFor="firstName" className="block text-sm/6 font-medium text-gray-900">
                                    First Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register('firstName')}
                                        id="firstName"
                                        placeholder="Enter your first name"
                                        className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6"
                                    />
                                    <span className="text-red-800 mt-1">{errors.firstName?.message}</span>
                                </div>
                            </div>

                            {/* Last Name */}
                            <div>
                                <label htmlFor="lastName" className="block text-sm/6 font-medium text-gray-900">
                                    Last Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register('lastName')}
                                        id="lastName"
                                        placeholder="Enter your last name"
                                        className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6"
                                    />
                                    <span className="text-red-800 mt-1">{errors.lastName?.message}</span>
                                </div>
                            </div>

                            {/* Middle Name (Optional) */}
                            <div>
                                <label htmlFor="middleName" className="block text-sm/6 font-medium text-gray-900">
                                    Middle Name (Optional)
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register('middleName')}
                                        id="middleName"
                                        placeholder="Enter your middle name"
                                        className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6"
                                    />
                                    <span className="text-red-800 mt-1">{errors.middleName?.message}</span>
                                </div>
                            </div>

                            {/* Contact No. */}
                            <div>
                                <label htmlFor="contactNo" className="block text-sm/6 font-medium text-gray-900">
                                    Contact Number
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register('contactNo')}
                                        id="contactNo"
                                        type="tel"
                                        maxLength={11}
                                        placeholder="e.g., 09123456789"
                                        className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6"
                                    />
                                    <span className="text-red-800 mt-1">{errors.contactNo?.message}</span>
                                </div>
                            </div>

                            {/* Username */}
                            <div>
                                <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                                    Username
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register('username')}
                                        id="username"
                                        placeholder="Create a username"
                                        className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6"
                                    />
                                    <span className="text-red-800 mt-1">{errors.username?.message}</span>
                                </div>
                            </div>

                            {/* Birthday - Now with DatePicker */}
                            <div>
                                <label htmlFor="bday" className="block text-sm/6 font-medium text-gray-900">
                                    Birthday
                                </label>
                                <div className="mt-2">
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
                                                dateFormat={[
                                                    "MM/dd/yyyy", // Primary format for display and default entry
                                                    "yyyy-MM-dd",
                                                    "MMMM d, YYYY", // Allows "April 2, 2000"
                                                    "MMM d, YYYY",  // Allows "Apr 2, 2000"
                                                    "MMMM dd, YYYY", // Allows "April 02, 2000"
                                                    "MMMM dd YYYY", // Allows "April 02 2000"
                                                    "MM/dd/yyyy", // Allows "04/02/2000"
                                                ]}
                                                placeholderText="MM/DD/YYYY or April 2, 2000"
                                                showYearDropdown
                                                showMonthDropdown
                                                dropdownMode="select"
                                                className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6"
                                            />
                                        )}
                                    />
                                    <span className="text-red-800 mt-1">{errors.bday?.message}</span>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="md:col-span-2">
                                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                    Email Address
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register('email')}
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6"
                                    />
                                    <span className="text-red-800 mt-1">{errors.email?.message}</span>
                                </div>
                            </div>

                            {/* Password */}
                            <div className="md:col-span-2">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Password
                                </label>
                                <div className="mt-2">
                                    <div className="relative">
                                        <input
                                            {...register('password')}
                                            id="password"
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Create a password"
                                            className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground focus:outline-none"
                                            tabIndex={-1}
                                        >
                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                    <span className="text-red-800 mt-1">{errors.password?.message}</span>
                                </div>
                            </div>

                            {/* Confirm Password */}
                            <div className="md:col-span-2">
                                <label htmlFor="confirmPassword" className="block text-sm/6 font-medium text-gray-900">
                                    Confirm Password
                                </label>
                                <div className="mt-2">
                                    <div className="relative">
                                        <input
                                            {...register('confirmPassword')}
                                            id="confirmPassword"
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            placeholder="Confirm your password"
                                            className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground focus:outline-none"
                                            tabIndex={-1}
                                        >
                                            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                    <span className="text-red-800 mt-1">{errors.confirmPassword?.message}</span>
                                </div>
                            </div>
                        </div>

                        {signupError && (
                            <div className="text-red-800 text-sm mt-2 text-center">
                                {signupError}
                            </div>
                        )}

                        <div className="mt-6">
                            <PrimaryButton
                                type="submit"
                                className={cn(
                                    'flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600',
                                    isSigningUp
                                        ? 'bg-gray-400'
                                        : 'bg-green-600 hover:bg-green-700 hover:cursor-pointer'
                                )}
                                disabled={isSigningUp}
                            >
                                {isSigningUp ? 'Signing Up...' : 'Sign Up'}
                            </PrimaryButton>
                        </div>
                    </form>
                    <p className="mt-6 text-center text-sm text-gray-500">
                        Already have an account?{' '}
                        <button
                            type="button"
                            onClick={onBackToLogin}
                            className="font-semibold leading-6 text-green-600 hover:text-green-500 cursor-pointer"
                        >
                            Log in here
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm;