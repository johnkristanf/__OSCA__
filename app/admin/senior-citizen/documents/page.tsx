'use client'

import { apiService } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'

import PrimaryButton from '@/components/ui/primary-button'
import { SeniorsDocuments } from '@/types/seniors'
import { formatDateTime, formatDocumentTagName, getDownloadUrl } from '@/utils/format'
import Image from 'next/image'

const DocumentsPage = () => {
    const query = useQuery({
        queryKey: ['seniors-documents'],
        queryFn: async () => {
            const respData = await apiService.get<SeniorsDocuments[]>('/api/seniors/documents')
            console.log('respData Seniors Documents: ', respData)

            return respData
        },
    })

    const seniorDocuments = query.data

    return (
        <div className="container mx-auto border-1 border-gray-400 p-5 rounded-md mt-8">
            <div className="flex flex-col justify-center mb-6">
                <h1 className="text-2xl text-gray-600">Senior Citizen's Documents</h1>
                <p className="text-gray-500 text-sm">
                    Manage and view documents of registered senior citizens, including Birth
                    Certificate, Government Issued ID, etc...
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {query.isLoading ? (
                    <p className="text-gray-700 text-lg">Loading Documents...</p>
                ) : seniorDocuments && seniorDocuments.length === 0 ? (
                    <p className="text-gray-500">No documents found.</p>
                ) : (
                    seniorDocuments &&
                    seniorDocuments.map((docs) => (
                        <Card key={docs.id} className="w-[300px] overflow-y-auto">
                            <CardHeader>
                                <CardTitle>
                                    {docs.firstname} {docs.middlename} {docs.lastname}
                                </CardTitle>
                                <CardDescription>{docs.email}</CardDescription>
                            </CardHeader>

                            <CardContent>
                                <Dialog>
                                    <DialogTrigger className="bg-green-600 p-1 text-white rounded-md w-full hover:opacity-75 hover:cursor-pointer">
                                        View Documents
                                    </DialogTrigger>

                                    <DialogContent className="!max-w-3xl h-[90vh] overflow-y-auto">
                                        <DialogHeader>
                                            <DialogTitle>Registration Documents</DialogTitle>
                                            <DialogDescription></DialogDescription>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                {docs.documents.map((doc) => (
                                                    <div
                                                        key={doc.id}
                                                        className="max-w-lg bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mt-12"
                                                    >
                                                        <a href="#">
                                                            <Image
                                                                src={doc.imageUrl}
                                                                className="rounded-t-lg h-64 w-full object-cover object-center"
                                                                width="500"
                                                                height="500"
                                                                alt={doc.file_name}
                                                            />
                                                        </a>
                                                        <div className="p-5 w-full">
                                                            <h5 className="mb-2 truncate text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                                {formatDocumentTagName(doc.tag)}
                                                            </h5>
                                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                                                {formatDateTime(doc.createdAt)}
                                                            </p>

                                                            {doc.imageUrl ? (
                                                                <a
                                                                    href={getDownloadUrl(
                                                                        doc.imageUrl,
                                                                        doc.file_name
                                                                    )}
                                                                    download={doc.file_name}
                                                                    className="block w-full bg-green-700 text-white rounded-md p-2 text-center hover:opacity-75"
                                                                >
                                                                    Download
                                                                </a>
                                                            ) : (
                                                                <h1 className='text-red-800'>
                                                                    Sorry, the file can’t be
                                                                    downloaded right now due to a
                                                                    server issue. Please try again
                                                                    later.
                                                                </h1>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>
        </div>
    )
}

export default DocumentsPage
