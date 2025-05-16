'use client'
import { DataTable } from '@/components/data-table'
import { applicantsColumn } from './columns'
import { useState } from 'react'
import { ListBoxComponent } from '@/components/listbox-component'
import { apiService } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import { BenefitApplicationData } from '@/types/application'

const dummyApplicantsData = [
    {
        id: 1,
        firstname: 'Maria',
        middlename: 'Santos',
        lastname: 'Reyes',
        email: 'maria.reyes@example.com',
        benefits: {
            name: 'Monthly Allowance',
        },

        status: {
            name: 'PENDING',
        },

        category: {
            name: 'Low-income seniors',
        },
        createdAt: new Date('2024-12-01T10:00:00Z'),
    },

    {
        id: 1,
        firstname: 'Maria',
        middlename: 'Santos',
        lastname: 'Reyes',
        email: 'maria.reyes@example.com',
        benefits: {
            name: 'Monthly Allowance',
        },

        status: {
            name: 'PENDING',
        },

        category: null,
        createdAt: new Date('2024-12-01T10:00:00Z'),
    },
]

const benefits = [
    {
        id: 1,
        name: 'Monthly Allowance',
    },
    {
        id: 2,
        name: 'Medical assistance',
    },
    {
        id: 3,
        name: 'Discount privileges',
    },
]

const ApplicantPage = () => {
    // USE QUERY FOR FETCHING APPLICATIONS DATA
    const benefitApplicationQuery = useQuery({
        queryKey: ['applications'],
        queryFn: async () => {
            const respData = await apiService.get<BenefitApplicationData[]>(
                '/api/benefits/application'
            )

            return respData
        },
    })

    console.log("BenefitApplicationData: ", benefitApplicationQuery.data);
    

    // SELECTED BENEFIT FILTER STATE
    const [selected, setSelected] = useState(benefits[2])

    return (
        <div className="container mx-auto border-1 border-gray-400 p-5 rounded-md mt-8">
            <div className="flex flex-col justify-center mb-6">
                <h1 className="text-2xl text-gray-600">Senior Citizen Benefit Applicants</h1>
                <p className="text-gray-500 text-sm">
                    View and manage records of senior citizens applying for OSCA benefits, including
                    their personal details, application status, and supporting documents.
                </p>
            </div>

            <div className="flex justify-end gap-3 mb-3">
                <ListBoxComponent
                    label="Filter by Benefits"
                    options={benefits}
                    selected={selected}
                    onChange={setSelected}
                    getLabel={(person) => person.name}
                    getKey={(person) => person.id}
                />

                <div className="relative mt-5">
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
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search First Name, Last Name..."
                        required
                    />
                </div>
            </div>

            {benefitApplicationQuery.isLoading ? (
                <div className="py-10 text-gray-500 text-lg">Loading applications...</div>
            ) : benefitApplicationQuery.isError ? (
                <div className="py-10 text-red-500 text-lg">
                    Failed to load application data.
                </div>
            ) : benefitApplicationQuery.data && benefitApplicationQuery.data.length === 0 ? (
                <div className="py-10 text-gray-400 text-lg">No application records found.</div>
            ) : (
                <DataTable columns={applicantsColumn} data={benefitApplicationQuery.data ?? []} />
            )}
        </div>
    )
}

export default ApplicantPage
