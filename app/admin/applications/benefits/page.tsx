'use client'

import { Card, CardContent } from '@/components/ui/card'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import PrimaryButton from '@/components/ui/primary-button'
import { apiService } from '@/lib/axios'
import { Seniors } from '@/types/seniors'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

const BenefitsPage = () => {
    // STATIC BENEFITS LIST (PLANNING ON MAKING IT CAN DYNAMICALLY ADD NEW, IF APPROVED)
    const benefits = [
        {
            name: 'Monthly Allowance',
            description: `Receive a regular monthly stipend provided by the government to qualified low-income
                senior citizens with no pension or financial support.`,
            tag: 'monthly_allowance',
        },
        {
            name: 'Medical Assistance',
            description: `Apply for financial aid to help cover medical expenses, 
                including medicines, check-ups, hospitalization, and treatments.`,
            tag: 'monthly_allowance',
        },
        {
            name: 'Discount Privileges',
            description: `Discounts and VAT exemptions on food, transportation, medical services, and other
                essential goods, as mandated by law.`,
            tag: 'discount_privileges',
        },
        {
            name: 'Emergency Financial Aid',
            description: `Request one-time cash assistance for urgent needs such as illness, calamities, or
                other unexpected emergencies.`,
            tag: 'emergency_financial_aid',
        },
    ]

    // SEARCH NAME STATE
    const [searchedName, setSearchedName] = useState<string>()

    const fetchSeniors = async (name?: string | undefined) => {
        // Build the URL with query parameters if provided
        const url = name ? `/api/seniors?name=${encodeURIComponent(name)}` : '/api/seniors'

        const respData = await apiService.get<Seniors[]>(url)
        console.log('respData seniors benefits: ', respData)
        return respData
    }

    // SENIOR DATA QUERY
    const seniorQuery = useQuery({
        queryKey: ['seniors-benefit', searchedName],
        queryFn: () => fetchSeniors(searchedName),
    })

    // INPUT SEARCH ONCHANGE
    const onSearch = (name: string) => {
        console.log('Searched Name:', name)
        setSearchedName(name)
    }

    return (
        <div className="container mx-auto border-1 border-gray-400 p-5 rounded-md mt-8">
            <div className="flex flex-col justify-center mb-6">
                <h1 className="text-2xl text-gray-600">Application Benefits</h1>
                <p className="text-gray-500 text-sm">
                    Track and manage the various benefits provided to senior citizens
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto min-h-screen place-items-center md:place-items-start">
                {benefits &&
                    benefits.map((benefit) => (
                        <Card key={benefit.name} className="w-full md:w-[310px]">
                            <CardContent>
                                <div className="w-full flex flex-col gap-2">
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {benefit.name}
                                    </h5>
                                    <p className="h-24 font-normal text-gray-500 dark:text-gray-400">
                                        {benefit.description}
                                    </p>

                                    <button></button>

                                    <Dialog>
                                        <DialogTrigger className="flex items-center justify-center block w-full bg-green-700 text-white rounded-md p-2 mt-5 text-center hover:opacity-75 hover:cursor-pointer">
                                            {' '}
                                            Start Applying
                                            <svg
                                                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 14 10"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                                />
                                            </svg>
                                        </DialogTrigger>

                                        {/* DIALOG FOR SENIOR CITIZEN SEARCHING */}
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Apply For {benefit.name} </DialogTitle>
                                                <DialogDescription>
                                                    <div className="relative">
                                                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                            <svg
                                                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                                                aria-hidden="true"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 20 20"
                                                            >
                                                                <path
                                                                    stroke="currentColor"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    stroke-width="2"
                                                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <input
                                                            type="search"
                                                            id="default-search"
                                                            className="block w-full p-2 ps-10 mt-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            placeholder="Search First Name, Last Name..."
                                                            onChange={(e) =>
                                                                onSearch(e.target.value)
                                                            }
                                                            required
                                                        />
                                                    </div>

                                                    {/* LIST OF SENIORS AND CHECKBOXES */}
                                                    {seniorQuery.isLoading ? (
                                                        <p className="text-gray-700 text-md mt-5">
                                                            Loading Seniors...
                                                        </p>
                                                    ) : seniorQuery.data &&
                                                      seniorQuery.data.length === 0 ? (
                                                        <p className="text-gray-700 text-md mt-5">
                                                            No seniors found.
                                                        </p>
                                                    ) : (
                                                        <ul className="space-y-2 p-2 text-lg">
                                                            {seniorQuery.data &&
                                                                seniorQuery.data.map((senior) => (
                                                                    <li
                                                                        key={senior.id}
                                                                        className="flex items-center space-x-2"
                                                                    >
                                                                        <input
                                                                            type="checkbox"
                                                                            className="form-checkbox"
                                                                        />
                                                                        <label
                                                                            htmlFor={`senior-${senior.id}`}
                                                                            className="text-gray-800"
                                                                        >
                                                                            {senior.firstname}
                                                                            {senior.middlename}
                                                                            {senior.lastname}
                                                                        </label>
                                                                    </li>
                                                                ))}
                                                        </ul>
                                                    )}
                                                </DialogDescription>
                                            </DialogHeader>

                                            <DialogFooter>
                                                <PrimaryButton>Submit</PrimaryButton>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
            </div>
        </div>
    )
}

export default BenefitsPage
