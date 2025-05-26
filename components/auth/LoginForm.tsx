'use client'

import { LoginFormData, loginSchema } from '@/schema/auth/login.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import PrimaryButton from '../ui/primary-button'
import { cn } from '@/lib/utils'
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link' // Keep Link if you still want a direct link, or remove if only using the prop

interface LoginFormProps {
    onGoToSignUp: () => void; // New prop for navigating to signup
}

const LoginForm = ({ onGoToSignUp }: LoginFormProps) => { // Accept the prop
    // REACT FORM INITIALIZATION
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    })

    // INVALID CREDENTIALS ERROR HANDLING STATE
    const [invalidCredError, setInvalidCredError] = useState<string | null>(null)

    // LOADER STATE
    const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false)

    // SHOW/HIDE PASSWORD STATE
    const [showPassword, setShowPassword] = useState(false)

    // ROUTER INITIALIZATION
    const router = useRouter()

    // FORM SUBMISSION
    const onLogin = async (data: LoginFormData) => {
        setIsLoggingIn(true)

        const result = await signIn('credentials', {
            redirect: false,
            username: data.username,
            password: data.password,
        })

        console.log('result: ', result)

        if (result.error) {
            setIsLoggingIn(false)
            setInvalidCredError('Unexpected Error Please Try Again!')
            return
        }

        if (result.error && result.status === 401) {
            setIsLoggingIn(false)
            setInvalidCredError('Invalid username or password')
            return
        }

        router.push('/admin/dashboard')
        setIsLoggingIn(false)
    }

    return (
        <div>
            <div className="w-full sm:w-[450px] flex min-h-full bg-gray-200 rounded-md flex-1 flex-col justify-center px-6 lg:px-8">
                <div className="flex items-center justify-center gap-3 sm:mx-auto sm:w-full sm:max-w-sm mt-10">
                    <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Sign In
                    </h2>
                </div>

                <div className="mt-8 pb-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit(onLogin)} className="space-y-6">
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                Username
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register('username')}
                                    id="username"
                                    placeholder="Enter your username"
                                    className="block w-full rounded-md bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6"
                                />
                                <span className="text-red-800 mt-1">
                                    {errors.username?.message}
                                </span>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a
                                        href="#"
                                        className="font-semibold text-green-600 hover:underline"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                            </div>

                            <div className="mt-2">
                                <div className="relative">
                                    <input
                                        {...register('password')}
                                        id="password"
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Enter your password"
                                        autoComplete="current-password"
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

                                <div className="flex flex-col">
                                    <span className="text-red-800 mt-2">
                                        {errors.password?.message}
                                    </span>
                                    <span className="text-red-800 mt-2">{invalidCredError}</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <PrimaryButton
                                type="submit"
                                className={cn(
                                    'flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600',
                                    isLoggingIn
                                        ? 'bg-gray-400'
                                        : 'bg-green-600 hover:bg-green-700 hover:cursor-pointer '
                                )}
                                disabled={isLoggingIn}
                            >
                                {isLoggingIn ? 'Logging In...' : 'Login'}
                            </PrimaryButton>
                        </div>
                    </form>
                    {/* Sign up here section */}
                    <p className="mt-6 text-center text-sm text-gray-500">
                        Don't have an account?{' '}
                        <button
                            type="button" // Use a button to trigger the state change
                            onClick={onGoToSignUp}
                            className="font-semibold leading-6 text-green-600 hover:text-green-500 cursor-pointer"
                        >
                            Sign up here
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginForm