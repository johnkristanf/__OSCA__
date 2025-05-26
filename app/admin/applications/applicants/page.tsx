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
