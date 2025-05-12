'use client'

import { formatDateTime } from '@/utils/format'
import { ColumnDef } from '@tanstack/react-table'


// THIS IS FOR APPLICANTS DATA TABLE COLUMN
export const applicantsColumn: ColumnDef<any>[] = [
    {
        accessorKey: 'fullname',
        header: 'Full Name',
        cell: ({ row }) => {
            const first = row.original.firstname || ''
            const middle = row.original.middlename || ''
            const last = row.original.lastname || ''
            const fullName = [first, middle, last].filter(Boolean).join(' ')
            return <div>{fullName}</div>
        },
    },

    {
        accessorKey: 'email',
        header: 'Email',
    },
    {
        accessorKey: 'contact_no',
        header: 'Contact No.',
    },
    {
        accessorKey: 'birthdate',
        header: 'Birthdate',
        cell: ({ row }) => {
            return formatDateTime(row.getValue('birthdate'))
        },
    },
    {
        accessorKey: 'age',
        header: 'Age',
        cell: ({ row }) => <div className="text-right">{row.getValue('age')}</div>,
    },
    {
        accessorKey: 'gender',
        header: 'Gender',
    },
    {
        accessorKey: 'barangay',
        header: 'Barangay',
    },
    {
        accessorKey: 'purok',
        header: 'Purok',
    },
    {
        accessorKey: 'remarks',
        header: 'Remarks',
        cell: ({ row }) => {
          const remarks = row.original.remarks?.name || 'N/A'
          return <div>{remarks}</div>
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
]
