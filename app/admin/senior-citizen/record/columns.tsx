'use client'

import { Seniors } from '@/types/seniors'
import { formatDateOnly, formatDateTime } from '@/utils/format'
import { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { apiService } from '@/lib/axios'
import { toast } from 'sonner'
import {
  AlertTriangleIcon,
  CalendarIcon,
  EyeIcon,
  LandmarkIcon,
  MailIcon,
  MapPinIcon,
  Pencil,
  PhoneIcon,
  StickyNoteIcon,
  Trash,
  UserCheck,
  UserIcon,
} from 'lucide-react'
import { EyeOpenIcon, DownloadIcon } from '@radix-ui/react-icons'
import React from 'react'
import { Label } from '@radix-ui/react-label'
import { Checkbox } from '@/components/ui/checkbox'
import Image from 'next/image'
import { RegistrationDocument, SeniorsDocuments } from '@/types/seniors'
import { formatDocumentTagName, getDownloadUrl } from '@/utils/format'
import { DocumentViewer } from '@/components/document-viewer'
import { ColumnFilter } from '@tanstack/react-table' // Import ColumnFilter for type hinting

export const seniorRecordsColumn: ColumnDef<Seniors>[] = [
  {
    accessorKey: 'fullname',
    header: 'Full Name',
    // Use accessorFn to create a derived value for filtering and sorting
    accessorFn: (row) => [row.firstname, row.middlename, row.lastname].filter(Boolean).join(' '),
    cell: ({ row }) => {
      const first = row.original.firstname || ''
      const middle = row.original.middlename || ''
      const last = row.original.lastname || ''
      const fullName = [first, middle, last].filter(Boolean).join(' ')
      return <div>{fullName}</div>
    },
    filterFn: 'includesString', // Use a simple string inclusion filter
  },
  {
    accessorKey: 'email',
    header: 'Email',
    filterFn: 'includesString',
  },
  {
    accessorKey: 'contact_no',
    header: 'Contact No.',
    filterFn: 'includesString',
  },
  {
    accessorKey: 'emergency_no',
    header: 'Emergency No.',
    filterFn: 'includesString',
  },
  {
    accessorKey: 'birthdate',
    header: 'Birthdate',
    cell: ({ row }) => {
      return formatDateOnly(row.getValue('birthdate'))
    },
    filterFn: (row, columnId, filterValue) => {
      // Custom filter for birthdate: assumes filterValue is a string 'YYYY-MM-DD'
      const date = formatDateOnly(row.getValue(columnId));
      return date.includes(filterValue as string);
    },
  },
  {
    accessorKey: 'age',
    header: 'Age',
    cell: ({ row }) => <div className="text-right">{row.getValue('age')}</div>,
    filterFn: 'equals',
  },
  {
    accessorKey: 'gender',
    header: 'Gender',
    filterFn: 'equals',
  },
  {
    accessorKey: 'barangay',
    header: 'Barangay',
    filterFn: 'equals',
  },
  {
    accessorKey: 'purok',
    header: 'Purok',
    filterFn: 'equals',
  },
  {
    accessorKey: 'pwd',
    header: 'PWD',
    cell: ({ row }) => (row.original.pwd ? 'Yes' : 'No'),
    filterFn: (row, columnId, filterValue) => {
      const pwdStatus = row.original.pwd ? 'Yes' : 'No';
      return (filterValue as string[]).includes(pwdStatus);
    },
  },
  {
    accessorKey: 'remarks',
    header: 'Remarks',
    cell: ({ row }) => {
      const remarks = row.original.remarks?.name || 'N/A'
      return <div>{remarks}</div>
    },
    // If you want to filter by remarks name, you need an accessorFn for it
    accessorFn: (row) => row.remarks?.name || 'N/A',
    filterFn: 'equals',
  },
  {
    accessorKey: 'createdAt',
    header: 'Registered Date',
    cell: ({ row }) => {
      return formatDateTime(row.getValue('createdAt'))
    },
    filterFn: (row, columnId, filterValue) => {
      // Custom filter for createdAt: assumes filterValue is a string 'YYYY-MM-DD'
      const date = formatDateTime(row.getValue(columnId));
      return date.includes(filterValue as string);
    },
  },
  {
    id: 'documents',
    header: 'Documents',
    cell: ({ row }) => {
      const senior = row.original
      return Array.isArray(senior.documents) && senior.documents.length > 0 ? (
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-green-600 hover:bg-green-700">
              <EyeOpenIcon className="mr-2 h-4 w-4" />
              View All ({senior.documents.length})
            </Button>
          </DialogTrigger>
          <DialogContent className="!max-w-4xl h-[95vh] flex flex-col p-6">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold text-gray-800">
                Documents for {senior.firstname} {senior.lastname}
              </DialogTitle>
              <DialogDescription className="text-gray-600">
                Browse and download individual documents.
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto pr-2">
              {senior.documents.map((doc: RegistrationDocument) => (
                <div
                  key={doc.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col overflow-hidden"
                >
                  <DocumentViewer
                    document={doc}
                    trigger={
                      <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden cursor-pointer group">
                        <Image
                          src={doc.imageUrl}
                          alt={doc.file_name}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                          <EyeOpenIcon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    }
                  />
                  <div className="p-4 flex-grow flex flex-col justify-between">
                    <div>
                      <h5 className="mb-1 text-lg font-semibold text-gray-900 truncate">
                        {formatDocumentTagName(doc.tag)}
                      </h5>
                      <p className="text-sm text-gray-500">
                        Uploaded: {formatDateTime(doc.createdAt)}
                      </p>
                    </div>
                    <div className="mt-4">
                      {doc.imageUrl ? (
                        <a
                          href={getDownloadUrl(doc.imageUrl, doc.file_name)}
                          download={doc.file_name}
                          className="inline-flex items-center justify-center w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                        >
                          <DownloadIcon className="mr-2 h-4 w-4" />
                          Download File
                        </a>
                      ) : (
                        <p className="text-red-600 text-xs text-center">
                          File missing.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      ) : (
        <p className="text-gray-500 text-sm">No documents uploaded.</p>
      )
    },
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      const senior = row.original
      const queryClient = useQueryClient()
      const [showView, setShowView] = React.useState(false)
      const [showEdit, setShowEdit] = React.useState(false)
      const [editData, setEditData] = React.useState({
        email: senior.email,
        contact_no: senior.contact_no,
        emergency_no: senior.emergency_no,
        barangay: senior.barangay,
        purok: senior.purok,
        pwd: senior.pwd,
      })

      const deleteMutation = useMutation({
        mutationFn: async (id: number) => {
          return await apiService.delete(`/api/seniors?id=${id}`)
        },
        onSuccess: () => {
          toast.success('Senior deleted successfully.')
          queryClient.invalidateQueries({ queryKey: ['seniors'] })
        },
        onError: (error) => {
          toast.error(`Failed to delete senior: ${error.message || 'Unknown error'}`)
          console.error('Delete error:', error)
        },
      })

      const handleDelete = () => {
        deleteMutation.mutate(senior.id)
      }

      return (
        <div className="flex gap-2">
          {/* View Dialog */}
          <Dialog open={showView} onOpenChange={setShowView}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon">
                {/* This EyeIcon is from lucide-react */}
                <EyeIcon className="w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle className="text-xl">Senior Profile</DialogTitle>
                <DialogDescription>
                  Full details of <strong>{senior.firstname} {senior.lastname}</strong>
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {[
                  [<MailIcon className="w-4 h-4 text-muted-foreground" />, 'Email', senior.email],
                  [
                    <PhoneIcon className="w-4 h-4 text-muted-foreground" />,
                    'Contact No.',
                    senior.contact_no,
                  ],
                  [
                    <AlertTriangleIcon className="w-4 h-4 text-muted-foreground" />,
                    'Emergency No.',
                    senior.emergency_no,
                  ],
                  [
                    <CalendarIcon className="w-4 h-4 text-muted-foreground" />,
                    'Birthdate',
                    formatDateOnly(senior.birthdate),
                  ],
                  [
                    <UserIcon className="w-4 h-4 text-muted-foreground" />,
                    'Gender',
                    senior.gender,
                  ],
                  [
                    <MapPinIcon className="w-4 h-4 text-muted-foreground" />,
                    'Barangay',
                    senior.barangay,
                  ],
                  [<LandmarkIcon className="w-4 h-4 text-muted-foreground" />, 'Purok', senior.purok],
                  [
                    <UserCheck className="w-4 h-4 text-muted-foreground" />,
                    'PWD',
                    senior.pwd ? 'Yes' : 'No',
                  ],
                  [
                    <StickyNoteIcon className="w-4 h-4 text-muted-foreground" />,
                    'Remarks',
                    senior.remarks?.name ?? 'N/A',
                  ],
                ].map(([icon, label, value], idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 border rounded-lg p-3 bg-muted/50 shadow-sm"
                  >
                    {icon}
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wide">
                        {label}
                      </p>
                      <p className="text-sm mt-1">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>

          {/* Edit Dialog */}
          <Dialog open={showEdit} onOpenChange={setShowEdit}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon">
                <Pencil className="w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-xl">
              <DialogHeader>
                <DialogTitle>Edit Information</DialogTitle>
                <DialogDescription>
                  Update contact and location information of the senior.
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4 py-4">
                <div>
                  <Label>Email</Label>
                  <Input
                    value={editData.email}
                    onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                    placeholder="Enter email"
                  />
                </div>
                <div>
                  <Label>Contact Number</Label>
                  <Input
                    value={editData.contact_no}
                    onChange={(e) => setEditData({ ...editData, contact_no: e.target.value })}
                    placeholder="Enter contact number"
                  />
                </div>
                <div>
                  <Label>Emergency Number</Label>
                  <Input
                    value={editData.emergency_no}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        emergency_no: e.target.value,
                      })
                    }
                    placeholder="Enter emergency number"
                  />
                </div>
                <div>
                  <Label>Barangay</Label>
                  <Input
                    value={editData.barangay}
                    onChange={(e) => setEditData({ ...editData, barangay: e.target.value })}
                    placeholder="Enter barangay"
                  />
                </div>
                <div>
                  <Label>Purok</Label>
                  <Input
                    value={editData.purok}
                    onChange={(e) => setEditData({ ...editData, purok: e.target.value })}
                    placeholder="Enter purok"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="pwd">PWD Status</Label>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="pwd"
                      checked={editData.pwd}
                      onCheckedChange={(checked) => setEditData({ ...editData, pwd: !!checked })}
                    />
                    <label
                      htmlFor="pwd"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Are you a PWD?
                    </label>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="button"
                  onClick={async () => {
                    const res = await fetch('/api/seniors', {
                      method: 'PUT',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ id: senior.id, ...editData }),
                    })

                    if (res.ok) {
                      toast.success('Senior updated successfully.')
                      queryClient.invalidateQueries({ queryKey: ['seniors'] })
                      setShowEdit(false)
                    } else {
                      const error = await res.json()
                      toast.error(`Update failed: ${error.message}`)
                    }
                  }}
                >
                  Save
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Delete */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-red-600 hover:text-red-700"
              >
                <Trash className="w-4 h-4" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will permanently delete the senior record.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleDelete}
                  className="bg-red-600 hover:bg-red-700"
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      )
    },
  },
]