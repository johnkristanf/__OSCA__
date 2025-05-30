// app\admin\senior-citizen\record\page.tsx
'use client';

import { useState, useMemo } from 'react'; // Import useMemo
import { useQuery } from '@tanstack/react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useSession } from 'next-auth/react';

import { DataTable } from '../../../../components/data-table';
import { getSeniorRecordsColumns } from './columns'; // Import the function, not a variable
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import RegisterFormComponents from '@/components/senior-citizen/RegisterForm';
import { UploadMedicalDocumentsForm } from '@/components/senior-documents/medical-documents-form';
import { apiService } from '@/lib/axios';
import { Seniors } from '@/types/seniors';
import { DownloadReleasedSeniorsReport } from '@/components/senior-citizen/download-released-seniors-report';

const RecordPage = () => {
  const { data: session, status } = useSession(); // Get session data and status
  const userRole = (session?.user as any)?.role || 'USER'; // Determine user role

  // State for managing dialog visibility
  const [showRegistrationModal, setShowRegistrationModal] = useState<boolean>(false);
  const [showUploadMedicalModal, setShowUploadMedicalModal] = useState<boolean>(false);

  // Fetching seniors query
  const seniorQuery = useQuery<Seniors[]>({
    queryKey: ['seniors'],
    queryFn: async () => {
      const response = await apiService.get<Seniors[]>('/api/seniors');
      console.log('Fetched seniors data: ', response);
      return response;
    },
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: true,
  });

  // Memoize the columns to prevent unnecessary re-renders of DataTable
  const columns = useMemo(() => {
    return getSeniorRecordsColumns(userRole, status);
  }, [userRole, status]); // Re-calculate columns only when userRole or session status changes

  // Check if the user is an user
  const isUser = userRole === 'USER'; // Renamed from isUser to reflect ADMIN permissions better

  return (
    <div className="container mx-auto p-5 rounded-md mt-8 border border-gray-200 shadow-sm">
      <div className="flex flex-col mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Senior Citizen Records</h1>
        <p className="text-gray-600 text-base mt-1">
          Efficiently manage and view comprehensive records of registered senior citizens.
        </p>
      </div>

      <div className="flex justify-end gap-3 mt-8 mb-6">
        {/* Download Released Seniors Report Button - Conditionally rendered based on role */}
        {userRole === 'ADMIN' && seniorQuery.data && (
          <DownloadReleasedSeniorsReport data={seniorQuery.data} />
        )}

        {/* Register New Senior Dialog - Conditionally rendered for USER (assuming 'USER' can register, 'ADMIN' might just manage) */}
        {isUser && ( // If 'USER' is meant to be the one who registers, keep this. If 'ADMIN' does, change to userRole === 'ADMIN'
          <Dialog open={showRegistrationModal} onOpenChange={setShowRegistrationModal}>
            <DialogTrigger asChild>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors duration-200">
                <FontAwesomeIcon icon={faCirclePlus} className="size-4" />
                Register New
              </Button>
            </DialogTrigger>

            <DialogContent
              onEscapeKeyDown={(e) => e.preventDefault()}
              onPointerDownOutside={(e) => e.preventDefault()}
              className="!max-w-3xl overflow-y-auto max-h-[90vh]"
            >
              <DialogHeader>
                <DialogTitle className="text-2xl font-semibold">Register New Senior Citizen</DialogTitle>
                <DialogDescription>
                  Complete the form below to register a new senior citizen into the system.
                </DialogDescription>
              </DialogHeader>
              <RegisterFormComponents setShowRegistrationModal={setShowRegistrationModal} />
            </DialogContent>
          </Dialog>
        )}

        {/* Upload Medical Documents Dialog Trigger - Conditionally rendered for USER */}
        {isUser && ( // Same logic as above for 'Register New'
          <Button
            onClick={() => setShowUploadMedicalModal(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faPlus} className="size-4" />
            Upload Medical Documents
          </Button>
        )}

        {/* Upload Medical Documents Dialog */}
        <UploadMedicalDocumentsForm
          isOpen={showUploadMedicalModal}
          onClose={() => setShowUploadMedicalModal(false)}
        />
      </div>

      {/* Senior Records Data Table */}
      {seniorQuery.isLoading || status === 'loading' ? (
        <div className="text-center py-10 text-gray-500 flex items-center justify-center">
          <svg className="animate-spin h-6 w-6 mr-3 text-blue-500" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading Senior Records...
        </div>
      ) : seniorQuery.isError ? (
        <div className="text-center py-10 text-red-500">
          Error loading records: {seniorQuery.error.message || 'An unexpected error occurred.'}
        </div>
      ) : seniorQuery.data?.length === 0 ? (
        <div className="text-center py-10 text-gray-500">No senior citizen records found.</div>
      ) : (
        <DataTable columns={columns} data={seniorQuery.data ?? []} />
      )}
    </div>
  );
};

export default RecordPage;