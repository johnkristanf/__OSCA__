'use client'

import { seniorRecordsColumn } from './columns'
import { DataTable } from '../../../../components/data-table'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faPlus } from '@fortawesome/free-solid-svg-icons'
import PrimaryButton from '@/components/ui/primary-button'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import RegisterFormComponents from '@/components/senior-citizen/RegisterForm'
import { useQuery } from '@tanstack/react-query'
import { apiService } from '@/lib/axios'
import { Seniors } from '@/types/seniors'
import { useState } from 'react'

const RecordPage = () => {
    // STATE FOR HANDLING MODAL
    const [showRegistrationModal, setShowRegistrationModal] = useState<boolean>(false)

    // FETCHING SENIORS QUERY
    const seniorQuery = useQuery({
        queryKey: ['seniors'],
        queryFn: async () => {
            const respData = await apiService.get<Seniors[]>('/api/seniors')
            console.log('respData seniors: ', respData)

            return respData
        },
    })

    return (
        <div className="container mx-auto border-1 border-gray-400 p-5 rounded-md mt-8">
            <div className="flex flex-col justify-center mb-6">
                <h1 className="text-2xl text-gray-600">Senior Citizen</h1>
                <p className="text-gray-500 text-sm">
                    Manage and view records of registered senior citizens, including personal
                    information.
                </p>
            </div>

            <div className="flex justify-end gap-2 mt-8 mb-3">
                <Dialog open={showRegistrationModal} onOpenChange={setShowRegistrationModal}>
                    {/* DIALOG TRIGGER */}
                    <DialogTrigger className="bg-green-600 flex items-center gap-1 !text-white hover:cursor-pointer hover:bg-green-700 px-2 rounded-md">
                        <FontAwesomeIcon icon={faCirclePlus} className="size-3" />
                        Register New
                    </DialogTrigger>

                    {/* DIALOG CONTENT */}
                    <DialogContent
                        onEscapeKeyDown={(e) => e.preventDefault()} // Prevent ESC key
                        onPointerDownOutside={(e) => e.preventDefault()} // Prevent click outside
                        className="!max-w-3xl"
                    >
                        <DialogHeader>
                            <DialogTitle>Register New Senior</DialogTitle>
                            <DialogDescription>
                                Fill out the form below to register a senior citizen.
                            </DialogDescription>
                        </DialogHeader>

                        {/* REGISTER SENIOR CITIZEN FORM */}
                        <RegisterFormComponents
                            setShowRegistrationModal={setShowRegistrationModal}
                        />
                    </DialogContent>
                </Dialog>

                <Input
                    type="search"
                    className="w-56 border-1 border-gray-400"
                    placeholder="Search Senior Citizen..."
                />
            </div>

            {/* SENIORS TABLE */}
            {seniorQuery.isLoading ? (
                <div className="text-center py-10 text-gray-500">Loading Records...</div>
            ) : (
                <DataTable columns={seniorRecordsColumn} data={seniorQuery.data ?? []} />
            )}
        </div>
    )
}

export default RecordPage
