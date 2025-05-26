'use client'

import Image from 'next/image'
import LoginForm from '@/components/auth/LoginForm'
import SignUpForm from '@/components/auth/SignUpForm' // Import the SignUpForm
import { useState } from 'react' // Import useState hook
import { Metadata } from 'next'

// export const metadata: Metadata = {
//     title: 'Dashboard',
// }

export default function Home() {
    const [showSignUp, setShowSignUp] = useState(false) // State to toggle between forms

    return (
        <div className="flex items-center justify-center min-h-screen bg-[url('/img/cthall-bg.png')] bg-cover bg-center font-[family-name:var(--font-geist-sans)]">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-20 grid lg:grid-cols-2 gap-16 lg:gap-32">
                <div className="flex flex-col justify-center gap-5">
                    <div className="flex items-center gap-3">
                        <Image
                            className="dark:invert rounded-full"
                            src="/img/cthall-logo.jpg"
                            alt="Next.js logo"
                            width={120}
                            height={38}
                            priority
                        />

                        <div className="flex flex-col">
                            <h1 className="mb-2 text-4xl font-extrabold tracking-tight leading-none text-gray-200 md:text-5xl lg:text-7xl dark:text-white">
                                OSCA
                            </h1>
                            <p className="font-bold text-gray-300">
                                OFFICE OF THE SENIOR CITIZEN AFFAIRS
                            </p>
                        </div>
                    </div>

                    <p className="text-lg text-center font-bold text-gray-300 lg:text-xl dark:text-gray-400">
                        Connecting seniors with lifelong learning and community support. promotes
                        active aging, protection of senior rights.
                    </p>
                </div>

                <div>
                    {/* Conditionally render LoginForm or SignUpForm */}
                    {showSignUp ? (
                        <SignUpForm onBackToLogin={() => setShowSignUp(false)} /> // Pass a prop to go back to login
                    ) : (
                        <LoginForm onGoToSignUp={() => setShowSignUp(true)} /> // Pass a prop to go to signup
                    )}
                </div>
            </div>
        </div>
    )
}
