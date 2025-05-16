'use client'

import { formatDateTime } from '@/utils/format'
import { ColumnDef } from '@tanstack/react-table'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { useFetchCategoryAndStatus } from '@/hooks/use-fetch-category-status'
import { ListBoxComponent } from '@/components/listbox-component'
import { useEffect, useState } from 'react'
import { Categories, Status } from '@/types/seniors'
import PrimaryButton from '@/components/ui/primary-button'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UpdateCategoryData, UpdateStatusData } from '@/types/application'
import { PUTApiResponse } from '@/types/api'
import { apiService } from '@/lib/axios'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

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

            const categoryStyles: Record<string, string> = {
                'Low-income seniors': 'bg-blue-600 text-white',
                'Regular senior citizens': 'bg-green-600 text-white',
                'Special assistance cases': 'bg-yellow-500 text-white',
            }

            return (
                <div>
                    <span
                        className={`px-3 py-1 rounded-md text-xs font-semibold ${
                            categoryStyles[categoryName] || 'bg-gray-400 text-white'
                        }`}
                    >
                        {categoryName}
                    </span>
                </div>
            )
        },
    },

    {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => {
            const status = row.original.status.name

            const statusStyles: Record<string, string> = {
                PENDING: 'bg-yellow-500 text-white',
                APPROVED: 'bg-green-600 text-white',
                REJECT: 'bg-red-600 text-white',
            }

            return (
                <div>
                    <span
                        className={`px-3 py-1 rounded-md text-xs font-semibold ${
                            statusStyles[status] || 'bg-gray-400 text-white'
                        }`}
                    >
                        {status}
                    </span>
                </div>
            )
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
            // APPLICATION DATA
            const applicant = row.original

            // QUERY CLIENT FOR APPLICATION INVALIDATION AFTER UPDATE
            const queryClient = useQueryClient()

            // HOOK FOR FETCHING CATEGORY AND STATUS
            const { categories, status, isCategoryLoading, isStatusLoading } =
                useFetchCategoryAndStatus()

            // DIALOG STATE HOLDER
            const [showUpdateDialog, setShowUpdateDialog] = useState<boolean>(false)
            const [showRequirementsDialog, setShowRequirementsDialog] = useState<boolean>(false)

            // CATEGORY NULL CATCHER
            const fallbackCategory: Categories = {
                id: -1,
                name: 'Select Category',
            }

            // SELECTED LISTBOX VALUE CATEGORY HOLDER
            const [selectedCategories, setSelectedCategories] = useState<Categories>(
                applicant.category ?? fallbackCategory
            )

            // SELECTED LISTBOX VALUE STATUS HOLDER
            const [selectedStatus, setSelectedStatus] = useState<Status>(applicant.status)

            // MUTATION FOR UPDATING SENIOR CATEGORY
            const categoryMutation = useMutation({
                mutationFn: async (data: UpdateCategoryData) => {
                    return await apiService.put<PUTApiResponse>('/api/seniors/category', data)
                },
                onSuccess: (resp) => {
                    console.log('Success:', resp)
                    toast.success(resp.msg)
                    queryClient.invalidateQueries({ queryKey: ['applications'] })
                },

                onError: (error) => {
                    toast.error('Error in Updating Category, please try again!')
                    console.error('Error updating category:', error)
                },
            })

            // MUTATION FOR UPDATING APPLICATION STATUS
            const statusMutation = useMutation({
                mutationFn: async (data: UpdateStatusData) => {
                    return await apiService.put<PUTApiResponse>(
                        '/api/benefits/application/status',
                        data
                    )
                },
                onSuccess: (resp) => {
                    console.log('Success:', resp)
                    toast.success(resp.msg)
                    queryClient.invalidateQueries({ queryKey: ['applications'] })

                    setTimeout(() => {
                        setShowUpdateDialog(false)
                    }, 1000)
                },

                onError: (error) => {
                    toast.error('Error in Updating Status, please try again!')
                    console.error('Error updating status:', error)
                },
            })

            // UPDATE SUBMIT HANDLER
            const onUpdateApplication = () => {
                // DEFAULT CATEGORY AND STATUS CATCHER
                if (selectedCategories.id === -1) {
                    toast.warning('Atleast select category to proceed')
                    return
                }

                // UPDATE SENIOR CATEGORY DATA
                const updateCategoryData: UpdateCategoryData = {
                    application_id: applicant.id,
                    category_id: selectedCategories.id,
                }

                // UPDATE APPLICATION STATUS DATA
                const updateStatusData: UpdateStatusData = {
                    application_id: applicant.id,
                    status_id: selectedStatus.id,
                }

                console.log('updateCategoryData: ', updateCategoryData)
                console.log('updateStatusData: ', updateStatusData)

                categoryMutation.mutate(updateCategoryData)
                statusMutation.mutate(updateStatusData)
            }

            return (
                <div className="flex gap-4 text-sm">
                    {/* DIALOG FOR REQUIREMENTS NEEDED FOR THE BENEFIT APPLICATION */}
                    <Dialog open={showRequirementsDialog} onOpenChange={setShowRequirementsDialog}>
                        <DialogTrigger className="text-green-600 hover:underline hover:cursor-pointer">
                            Requirements
                        </DialogTrigger>
                        <DialogContent
                            onKeyDown={(e) => e.preventDefault()}
                            onFocusOutside={(e) => e.preventDefault()}
                        >
                            <DialogHeader>
                                <DialogTitle>{applicant.benefit.name} Requirements</DialogTitle>
                                <DialogDescription>
                                    View and upload documents needed for the senior benefit
                                    application
                                </DialogDescription>
                            </DialogHeader>

                            {applicant.benefit.benefit_requirements &&
                                applicant.benefit.benefit_requirements.map((requirement) => (
                                    <div className="col-span-full">
                                        <label className="block text-sm/6 text-gray-900 mb-3">
                                            {requirement.name}
                                        </label>
                                        <div className="space-y-2">
                                            <Input
                                                type="file"
                                                // onChange={(e) =>
                                                //     handleFileChange(
                                                //         e,
                                                //         RegistrationDocumentTag.BIRTH_CERTIFICATE
                                                //     )
                                                // }
                                            />
                                        </div>
                                    </div>
                                ))}
                        </DialogContent>
                    </Dialog>

                    {/* DIALOG FOR UPDATING CATEGORY AND STATUS APPLICATION */}
                    <Dialog open={showUpdateDialog} onOpenChange={setShowUpdateDialog}>
                        <DialogTrigger className="text-blue-600 hover:underline hover:cursor-pointer">
                            Update
                        </DialogTrigger>
                        <DialogContent
                            onKeyDown={(e) => e.preventDefault()}
                            onFocusOutside={(e) => e.preventDefault()}
                        >
                            <DialogHeader>
                                <DialogTitle>Update Senior Application</DialogTitle>
                                <DialogDescription>
                                    Categorized and Update Status senior application based on
                                    eligibility
                                </DialogDescription>
                            </DialogHeader>

                            <div className="flex flex-col">
                                <h1>Senior Category</h1>

                                {isCategoryLoading ? (
                                    <h1>Loading Categories...</h1>
                                ) : (
                                    <ListBoxComponent
                                        label=""
                                        options={categories}
                                        selected={selectedCategories}
                                        onChange={setSelectedCategories}
                                        getLabel={(category) => category?.name ?? ''}
                                        getKey={(category) => category?.id ?? -1}
                                    />
                                )}
                            </div>

                            <div className="flex flex-col">
                                <h1>Status</h1>

                                {isStatusLoading ? (
                                    <h1>Loading Status...</h1>
                                ) : (
                                    <ListBoxComponent
                                        label=""
                                        options={status}
                                        selected={selectedStatus}
                                        onChange={setSelectedStatus}
                                        getLabel={(status) => status?.name ?? ''}
                                        getKey={(status) => status?.id ?? -1}
                                    />
                                )}
                            </div>

                            {/* DIALOG FOOTER */}
                            <DialogFooter>
                                <PrimaryButton
                                    className={
                                        categoryMutation.isPending || statusMutation.isPending
                                            ? '!bg-gray-500 text-white'
                                            : ''
                                    }
                                    disabled={
                                        categoryMutation.isPending || statusMutation.isPending
                                    }
                                    onClick={onUpdateApplication}
                                >
                                    {categoryMutation.isPending || statusMutation.isPending
                                        ? 'Updating...'
                                        : 'Update'}
                                </PrimaryButton>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>

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
