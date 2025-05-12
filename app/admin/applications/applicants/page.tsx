'use client'
import { DataTable } from '@/components/data-table'
import { applicantsColumn } from './columns'
import { useState } from 'react'
import { ListBoxComponent } from '@/components/listbox-component'

const dummyApplicantsData = [
    {
        id: 1,
        firstname: 'Maria',
        middlename: 'Santos',
        lastname: 'Reyes',
        email: 'maria.reyes@example.com',
        contact_no: '09171234567',
        birthdate: new Date('1950-05-10'),
        age: '74',
        gender: 'female',
        barangay: 'San Roque',
        purok: 'Purok 2',
        remarks: {
            name: 'For Review',
        },
        createdAt: new Date('2024-12-01T10:00:00Z'),
        updatedAt: new Date('2025-01-15T15:45:00Z'),
    },
    {
        id: 2,
        firstname: 'Juan',
        middlename: '',
        lastname: 'Dela Cruz',
        email: 'juan.dc@example.com',
        contact_no: '09181234567',
        birthdate: new Date('1948-11-20'),
        age: '76',
        gender: 'male',
        barangay: 'Barangay Uno',
        purok: 'Purok 5',
        remarks: {
            name: 'Approved',
        },
        createdAt: new Date('2025-02-10T08:30:00Z'),
        updatedAt: new Date('2025-03-01T09:00:00Z'),
    },
    {
        id: 3,
        firstname: 'Luzviminda',
        middlename: 'G.',
        lastname: 'Torres',
        email: 'luz.torres@example.com',
        contact_no: '09192223333',
        birthdate: new Date('1952-07-25'),
        age: '72',
        gender: 'female',
        barangay: 'Malinis',
        purok: 'Purok 7',
        remarks: null, // No remarks
        createdAt: new Date('2025-01-05T12:00:00Z'),
        updatedAt: new Date('2025-01-06T13:00:00Z'),
    },
]

const people = [
    {
        id: 1,
        name: 'Wade Cooper',
        avatar: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 2,
        name: 'Arlene Mccoy',
        avatar: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 3,
        name: 'Devon Webb',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
    },
]

const ApplicantPage = () => {
    const [selected, setSelected] = useState(people[2])

    console.log('selected: ', selected)

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
                    options={people}
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

            <DataTable columns={applicantsColumn} data={dummyApplicantsData} />
        </div>
    )
}

export default ApplicantPage
