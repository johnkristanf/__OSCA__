'use client'

import { formatDateTime } from '@/utils/format'
import { ColumnDef } from '@tanstack/react-table'

// THIS IS FOR APPLICANTS DATA TABLE COLUMN
export const applicantsColumn: ColumnDef<any>[] = [
    {
        accessorKey: 'fullname',
        header: 'Full Name',
        cell: ({ row }) => {
            const first = row.original.senior.firstname || ''
            const middle = row.original.senior.middlename || ''
            const last = row.original.senior.lastname || ''
            const fullName = [first, middle, last].filter(Boolean).join(' ')
            return <div>{fullName}</div>
        },
    },

    {
        accessorKey: 'email',
        header: 'Email',
        cell: ({ row }) => {
            const email = row.original.senior.email || ''
            return <div>{email}</div>
        },
    },

    {
        accessorKey: 'applied_benefit',
        header: 'Applied Benefit',
        cell: ({ row }) => {
            const benefit = row.original.benefit.name || ''
            return <div>{benefit}</div>
        },
    },

    {
        accessorKey: 'senior_category',
        header: 'Senior Category',
        cell: ({ row }) => {
            const category = row.original.category
            const categoryName = category ? category.name : 'N/A'
            return <div>{categoryName}</div>
        },
    },

    {
        accessorKey: 'createdAt',
        header: 'Registered Date',
        cell: ({ row }) => {
            return formatDateTime(row.getValue('createdAt'))
        },
    },
    // {
    //     accessorKey: 'updatedAt',
    //     header: 'Updated At',
    //     cell: ({ row }) => {
    //         return formatDateTime(row.getValue('updatedAt'))
    //     },
    // },

    {
        accessorKey: 'actions',
        header: 'Actions',
        cell: ({ row }) => {
            const applicant = row.original

            return (
                <div className="flex gap-4 text-sm">
                    <button
                        onClick={() => console.log('View Documents', applicant)}
                        className="text-green-600 hover:underline hover:cursor-pointer"
                    >
                        View Documents
                    </button>
                    <button
                        onClick={() => console.log('Edit', applicant)}
                        className="text-blue-600 hover:underline hover:cursor-pointer"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => console.log('Delete', applicant)}
                        className="text-red-600 hover:underline hover:cursor-pointer"
                    >
                        Delete
                    </button>
                </div>
            )
        },
    },
]
