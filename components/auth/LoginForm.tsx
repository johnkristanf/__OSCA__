'use client'

import { LoginFormData, loginSchema } from '@/schema/auth/login.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import PrimaryButton from '../ui/primary-button'
import { cn } from '@/lib/utils' // Assuming this is clsx or similar
import { Eye, EyeOff, Loader2 } from 'lucide-react' // Added Loader2 icon

interface LoginFormProps {
    onGoToSignUp?: () => void
}

const LoginForm = ({ onGoToSignUp }: LoginFormProps) => {
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
        <div className="w-full">
            <div className="mb-8 text-center">
                <h2 className="text-4xl font-bold text-gray-800">Welcome Back!</h2>
                <p className="text-gray-600 mt-2">Sign in to your OSCA account.</p>
            </div>

            <form onSubmit={handleSubmit(onLogin)} className="space-y-6">
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                        Username
                    </label>
                    <div className="mt-1">
                        <input
                            {...register('username')}
                            id="username"
                            placeholder="Enter your username"
                            className={cn(
                                'block w-full rounded-md border border-gray-300 px-4 py-2 text-base text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500',
                                errors.username &&
                                    'border-red-500 focus:border-red-500 focus:ring-red-500'
                            )}
                            autoComplete="username"
                        />
                        {errors.username && (
                            <p className="mt-1 text-sm text-red-600">{errors.username.message}</p>
                        )}
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <div className="text-sm">
                            <a
                                href="#"
                                className="font-medium text-emerald-600 hover:text-emerald-500 transition duration-200"
                            >
                                Forgot password?
                            </a>
                        </div>
                    </div>

                    <div className="mt-1">
                        <div className="relative">
                            <input
                                {...register('password')}
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter your password"
                                autoComplete="current-password"
                                className={cn(
                                    'block w-full rounded-md border border-gray-300 px-4 py-2 text-base text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500',
                                    errors.password &&
                                        'border-red-500 focus:border-red-500 focus:ring-red-500'
                                )}
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
                        {errors.root?.serverError && (
                            <p className="mt-1 text-sm text-red-600">
                                {errors.root.serverError.message}
                            </p>
                        )}
                    </div>
                </div>

                <div>
                    <PrimaryButton
                        type="submit"
                        className={cn(
                            'flex w-full items-center justify-center rounded-md px-4 py-2.5 text-lg font-semibold text-white shadow-md transition duration-300 ease-in-out',
                            isLoggingIn
                                ? 'cursor-not-allowed bg-gray-400'
                                : 'bg-emerald-600 hover:bg-emerald-700'
                        )}
                        disabled={isLoggingIn}
                    >
                        {isLoggingIn ? (
                            <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                Logging In...
                            </>
                        ) : (
                            'Login'
                        )}
                    </PrimaryButton>
                </div>
            </form>

            {onGoToSignUp && (
                <p className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <button
                        type="button"
                        onClick={onGoToSignUp}
                        className="font-semibold text-emerald-600 hover:text-emerald-500 transition duration-200 cursor-pointer underline"
                    >
                        Sign up here
                    </button>
                </p>
            )}
        </div>
    )
}

export default LoginForm
