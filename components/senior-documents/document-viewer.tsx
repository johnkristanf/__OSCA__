import { useState } from 'react'
import Image from 'next/image'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from '@/components/ui/dialog'
import { DownloadIcon} from '@radix-ui/react-icons' // npm install @radix-ui/react-icons
import { getDownloadUrl, formatDocumentTagName } from '@/utils/format'
import { RegistrationDocument } from '@/types/seniors'

interface DocumentViewerProps {
    document: RegistrationDocument 
    trigger: React.ReactNode 
    onOpenChange?: (open: boolean) => void
    defaultOpen?: boolean
}

export function DocumentViewer({ document, trigger, onOpenChange, defaultOpen }: DocumentViewerProps) {
    const [open, setOpen] = useState(defaultOpen || false);

    const handleOpenChange = (isOpen: boolean) => {
        setOpen(isOpen);
        onOpenChange?.(isOpen);
    };

    if (!document || !document.imageUrl) {
        return null; // Or render a placeholder/error message
    }

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent className="!max-w-4xl !h-[95vh] flex flex-col p-6">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">
                        {formatDocumentTagName(document.tag)}
                    </DialogTitle>
                    <DialogDescription className="text-gray-600">
                        File: {document.file_name}
                    </DialogDescription>
                </DialogHeader>

                <div className="flex-grow relative w-full flex justify-center items-center bg-gray-100 rounded-md overflow-hidden my-4">
                    <Image
                        src={document.imageUrl}
                        alt={document.file_name || 'Document image'}
                        layout="fill"
                        objectFit="contain" // Ensures the whole image is visible
                        className="rounded-lg"
                        priority // Prioritize loading of visible image
                    />
                </div>

                <div className="flex justify-end pt-4 border-t border-gray-200">
                    {document.imageUrl ? (
                        <a
                            href={getDownloadUrl(document.imageUrl, document.file_name)}
                            download={document.file_name}
                            className="inline-flex items-center px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200"
                        >
                            <DownloadIcon className="mr-2 h-4 w-4" />
                            Download
                        </a>
                    ) : (
                        <p className="text-red-600 text-sm">
                            File unavailable for download.
                        </p>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}