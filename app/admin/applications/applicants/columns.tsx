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
import { Pencil, Trash, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button' // Assuming you have a Button component

import { useFetchCategoryAndStatus } from '@/hooks/use-fetch-category-status'
import { ListBoxComponent } from '@/components/listbox-component'
import { useState } from 'react'
import { Categories, Status } from '@/types/seniors'
import PrimaryButton from '@/components/ui/primary-button'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UpdateCategoryData, UpdateStatusData } from '@/types/application'
import { PUTApiResponse } from '@/types/api'
import { apiService } from '@/lib/axios'
import { toast } from 'sonner'
import { Input } from '@/components/ui/input'

// THIS IS FOR APPLICANTS DATA TABLE COLUMN
export const applicantsColumn: ColumnDef<any>[] = [
    {
        accessorKey: 'fullname',
        header: 'Full Name',
        // Use accessorFn to create a derived value for filtering and sorting
        accessorFn: (row) => [row.senior.firstname, row.senior.middlename, row.senior.lastname].filter(Boolean).join(' '),
        cell: ({ row }) => {
            const first = row.original.senior.firstname || ''
            const middle = row.original.senior.middlename || ''
            const last = row.original.senior.lastname || ''
            const fullName = [first, middle, last].filter(Boolean).join(' ')
            return <div>{fullName}</div>
        },
        filterFn: 'includesString', // Use a simple string inclusion filter
    },

    {
        accessorKey: 'applied_benefit',
        header: 'Applied Benefit',
        cell: ({ row }) => {
            const benefit = row.original.benefit.name || ''
            return <div>{benefit}</div>
        },
        // If filtering by benefit name, use accessorFn
        accessorFn: (row) => row.benefit.name,
        filterFn: 'equals',
    },

    {
        accessorKey: 'senior_category',
        header: 'Category',
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
        // If filtering by category name, use accessorFn
        accessorFn: (row) => row.category?.name || 'N/A',
        filterFn: 'equals',
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
        // If filtering by status name, use accessorFn
        accessorFn: (row) => row.status.name,
        filterFn: 'equals',
    },

    {
        accessorKey: 'createdAt',
        header: 'Registered Date',
        cell: ({ row }) => {
            return formatDateTime(row.getValue('createdAt'))
        },
        filterFn: (row, columnId, filterValue) => {
            const date = formatDateTime(row.getValue(columnId));
            return date.includes(filterValue as string);
        },
    },
    {
        accessorKey: 'actions',
        header: 'Actions',
        cell: ({ row }) => {
            const applicant = row.original
            const queryClient = useQueryClient()
            const { categories, status, isCategoryLoading, isStatusLoading } =
                useFetchCategoryAndStatus()

            const [showUpdateDialog, setShowUpdateDialog] = useState<boolean>(false)
            const [showRequirementsDialog, setShowRequirementsDialog] = useState<boolean>(false)
            const [showDeleteDialog, setShowDeleteDialog] = useState<boolean>(false)

            const fallbackCategory: Categories = {
                id: -1,
                name: 'Select Category',
            }

            const [selectedCategories, setSelectedCategories] = useState<Categories>(
                applicant.category ?? fallbackCategory
            )
            const [selectedStatus, setSelectedStatus] = useState<Status>(applicant.status)

            const categoryMutation = useMutation({
                mutationFn: async (data: UpdateCategoryData) => {
                    return await apiService.put<PUTApiResponse>('/api/seniors/category', data)
                },
                onSuccess: (resp) => {
                    toast.success(resp.msg)
                    queryClient.invalidateQueries({ queryKey: ['applications'] })
                },
                onError: (error) => {
                    toast.error('Error in Updating Category, please try again!')
                    console.error('Error updating category:', error)
                },
            })

            const statusMutation = useMutation({
                mutationFn: async (data: UpdateStatusData) => {
                    return await apiService.put<PUTApiResponse>(
                        '/api/benefits/application/status',
                        data
                    )
                },
                onSuccess: (resp) => {
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

            const deleteMutation = useMutation({
                mutationFn: async (applicationId: number) => {
                    return await apiService.delete(
                        `/api/benefits/application?application_id=${applicationId}`
                    )
                },
                onSuccess: () => {
                    toast.success('Application deleted successfully!')
                    queryClient.invalidateQueries({ queryKey: ['applications'] })
                    setShowDeleteDialog(false)
                },
                onError: (error) => {
                    toast.error('Error deleting application, please try again!')
                    console.error('Error deleting application:', error)
                },
            })

            const onUpdateApplication = () => {
                if (selectedCategories.id === -1) {
                    toast.warning('At least select a category to proceed')
                    return
                }

                const updateCategoryData: UpdateCategoryData = {
                    application_id: applicant.id,
                    category_id: selectedCategories.id,
                }

                const updateStatusData: UpdateStatusData = {
                    application_id: applicant.id,
                    status_id: selectedStatus.id,
                }

                categoryMutation.mutate(updateCategoryData)
                statusMutation.mutate(updateStatusData)
            }

            const onDeleteApplication = () => {
                deleteMutation.mutate(applicant.id)
            }

            return (
                <div className="flex gap-2">
                    {/* Requirements Dialog Trigger */}
                    <Dialog open={showRequirementsDialog} onOpenChange={setShowRequirementsDialog}>
                        <DialogTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <FileText className="w-4 h-4" />
                            </Button>
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
                            {applicant.benefit.benefit_requirements?.map((requirement: any) => (
                                <div className="col-span-full" key={requirement.id}>
                                    <label className="block text-sm/6 text-gray-900 mb-3">
                                        {requirement.name}
                                    </label>
                                    <div className="space-y-2">
                                        <Input type="file" />
                                    </div>
                                </div>
                            ))}
                        </DialogContent>
                    </Dialog>

                    {/* Update Dialog Trigger */}
                    <Dialog open={showUpdateDialog} onOpenChange={setShowUpdateDialog}>
                        <DialogTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Pencil className="w-4 h-4" />
                            </Button>
                        </DialogTrigger>
                        <DialogContent
                            onKeyDown={(e) => e.preventDefault()}
                            onFocusOutside={(e) => e.preventDefault()}
                        >
                            <DialogHeader>
                                <DialogTitle>Update Senior Application</DialogTitle>
                                <DialogDescription>
                                    Categorize and update status of senior application based on
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

                    {/* Delete Dialog Trigger */}
                    <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
                        <DialogTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-red-600 hover:text-red-700"
                            >
                                <Trash className="w-4 h-4" />
                            </Button>
                        </DialogTrigger>
                        <DialogContent
                            onKeyDown={(e) => e.preventDefault()}
                            onFocusOutside={(e) => e.preventDefault()}
                        >
                            <DialogHeader>
                                <DialogTitle>Delete Senior Application</DialogTitle>
                                <DialogDescription>
                                    Are you sure you want to delete this application? This action
                                    cannot be undone.
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <PrimaryButton
                                    onClick={() => setShowDeleteDialog(false)}
                                    className="!bg-gray-400 text-white"
                                >
                                    Cancel
                                </PrimaryButton>
                                <PrimaryButton
                                    onClick={onDeleteApplication}
                                    className={
                                        deleteMutation.isPending
                                            ? '!bg-red-300 text-white'
                                            : '!bg-red-600 text-white'
                                    }
                                    disabled={deleteMutation.isPending}
                                >
                                    {deleteMutation.isPending ? 'Deleting...' : 'Delete'}
                                </PrimaryButton>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            )
        },
    },
]
