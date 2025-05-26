'use client'

import { apiService } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button' // Assuming you have a Button component
import { EyeOpenIcon, DownloadIcon } from '@radix-ui/react-icons' // For icons
import Image from 'next/image'
import { RegistrationDocument, SeniorsDocuments } from '@/types/seniors' // This type might need to be adjusted to include the 'documents' array with imageUrl
import { formatDateTime, formatDocumentTagName, getDownloadUrl } from '@/utils/format'
import { DocumentViewer } from '@/components/document-viewer' // Import the new component

// Assume SeniorsDocuments type is something like:
// export type SeniorsDocuments = Senior & { documents: RegistrationDocument[] };

const DocumentsPage = () => {
    const query = useQuery<SeniorsDocuments[]>({
        // Specify generic type for useQuery
        queryKey: ['seniors-documents'],
        queryFn: async () => {
            const respData = await apiService.get<SeniorsDocuments[]>('/api/seniors') // Assuming this endpoint now returns seniors with their documents
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
                    // Simple loading skeleton for cards
                    Array.from({ length: 3 }).map((_, index) => (
                        <Card key={index} className="w-[300px] h-[200px] animate-pulse">
                            <CardHeader className="space-y-2">
                                <div className="h-6 bg-gray-200 rounded"></div>
                                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                            </CardHeader>
                            <CardContent>
                                <div className="h-10 bg-gray-200 rounded"></div>
                            </CardContent>
                        </Card>
                    ))
                ) : seniorDocuments && seniorDocuments.length === 0 ? (
                    <p className="text-gray-500 col-span-full text-center">
                        No documents found for any senior.
                    </p>
                ) : (
                    seniorDocuments &&
                    seniorDocuments.map((senior) => (
                        <Card key={senior.id} className="w-[300px] flex flex-col">
                            <CardHeader>
                                <CardTitle>
                                    {senior.firstname} {senior.middlename} {senior.lastname}
                                </CardTitle>
                                <CardDescription>{senior.email}</CardDescription>
                            </CardHeader>

                            <CardContent className="flex-grow flex flex-col">
                                {senior.documents && senior.documents.length > 0 ? (
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button className="w-full bg-green-600 hover:bg-green-700">
                                                <EyeOpenIcon className="mr-2 h-4 w-4" /> View All (
                                                {senior.documents.length})
                                            </Button>
                                        </DialogTrigger>

                                        <DialogContent className="!max-w-4xl h-[95vh] flex flex-col p-6">
                                            <DialogHeader>
                                                <DialogTitle className="text-3xl font-bold text-gray-800">
                                                    Documents for {senior.firstname}{' '}
                                                    {senior.lastname}
                                                </DialogTitle>
                                                <DialogDescription className="text-gray-600">
                                                    Browse and download individual documents.
                                                </DialogDescription>
                                            </DialogHeader>

                                            {/* Document Grid/Carousel */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto pr-2">
                                                {senior.documents.map(
                                                    (doc: RegistrationDocument) => (
                                                        <div
                                                            key={doc.id}
                                                            className="bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col overflow-hidden"
                                                        >
                                                            {/* Document Preview (clickable) */}
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

                                                            {/* Document Info and Download */}
                                                            <div className="p-4 flex-grow flex flex-col justify-between">
                                                                <div>
                                                                    <h5 className="mb-1 text-lg font-semibold text-gray-900 truncate">
                                                                        {formatDocumentTagName(
                                                                            doc.tag
                                                                        )}
                                                                    </h5>
                                                                    <p className="text-sm text-gray-500">
                                                                        Uploaded:{' '}
                                                                        {formatDateTime(
                                                                            doc.createdAt
                                                                        )}
                                                                    </p>
                                                                </div>
                                                                <div className="mt-4">
                                                                    {doc.imageUrl ? (
                                                                        <a
                                                                            href={getDownloadUrl(
                                                                                doc.imageUrl,
                                                                                doc.file_name
                                                                            )}
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
                                                    )
                                                )}
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                ) : (
                                    <p className="text-gray-500 text-sm mt-auto">
                                        No documents uploaded.
                                    </p>
                                )}
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>
        </div>
    )
}

export default DocumentsPage
