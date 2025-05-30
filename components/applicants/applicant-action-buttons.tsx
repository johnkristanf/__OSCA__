// src/app/admin/applications/applicants/components/applicant-action-buttons.tsx
'use client';

import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Pencil, Trash, FileText } from 'lucide-react';
import { toast } from 'sonner';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
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
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import PrimaryButton from '@/components/ui/primary-button'; // Assuming this path is correct
import { ListBoxComponent } from '@/components/listbox-component'; // Assuming this path is correct

import { useFetchCategoryAndStatus } from '@/hooks/use-fetch-category-status';
import { apiService } from '@/lib/axios';
import { Categories, Status } from '@/types/seniors';
import { UpdateCategoryData, UpdateStatusData } from '@/types/application';
import { PUTApiResponse } from '@/types/api';

import { DocumentUploadForm } from './document-upload-form'; // New path for the extracted component

interface ApplicantActionButtonsProps {
  applicant: any; // Consider creating a specific type for applicant if available
  queryClient: ReturnType<typeof useQueryClient>;
}

export const ApplicantActionButtons: React.FC<ApplicantActionButtonsProps> = ({
  applicant,
  queryClient,
}) => {
  const { categories, status, isCategoryLoading, isStatusLoading } = useFetchCategoryAndStatus();

  const [showUpdateDialog, setShowUpdateDialog] = useState<boolean>(false);
  const [showRequirementsDialog, setShowRequirementsDialog] = useState<boolean>(false);

  const fallbackCategory: Categories = {
    id: -1,
    name: 'Select Category',
  };

  const [selectedCategories, setSelectedCategories] = useState<Categories>(
    applicant.category ?? fallbackCategory
  );
  const [selectedStatus, setSelectedStatus] = useState<Status>(applicant.status);

  // Filter out the "PENDING" status
  const filteredStatus = status?.filter((s) => s.name !== 'PENDING');

  const categoryMutation = useMutation({
    mutationFn: async (data: UpdateCategoryData) => {
      return await apiService.put<PUTApiResponse>('/api/seniors/category', data);
    },
    onSuccess: (resp) => {
      toast.success(resp.msg);
      queryClient.invalidateQueries({ queryKey: ['applications'] });
    },
    onError: (error) => {
      toast.error('Error in Updating Category, please try again!');
      console.error('Error updating category:', error);
    },
  });

  const statusMutation = useMutation({
    mutationFn: async (data: UpdateStatusData) => {
      return await apiService.put<PUTApiResponse>('/api/benefits/application/status', data);
    },
    onSuccess: (resp) => {
      toast.success(resp.msg);
      queryClient.invalidateQueries({ queryKey: ['applications'] });
      setTimeout(() => {
        setShowUpdateDialog(false);
      }, 1000);
    },
    onError: (error) => {
      toast.error('Error in Updating Status, please try again!');
      console.error('Error updating status:', error);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (applicationId: number) => {
      return await apiService.delete(
        `/api/benefits/application?application_id=${applicationId}`
      );
    },
    onSuccess: () => {
      toast.success('Application deleted successfully!');
      queryClient.invalidateQueries({ queryKey: ['applications'] });
    },
    onError: (error) => {
      toast.error('Error deleting application, please try again!');
      console.error('Error deleting application:', error);
    },
  });

  const onUpdateApplication = () => {
    if (selectedCategories.id === -1) {
      toast.warning('At least select a category to proceed');
      return;
    }

    const updateCategoryData: UpdateCategoryData = {
      application_id: applicant.id,
      category_id: selectedCategories.id,
    };

    const updateStatusData: UpdateStatusData = {
      application_id: applicant.id,
      status_id: selectedStatus.id,
    };

    categoryMutation.mutate(updateCategoryData);
    statusMutation.mutate(updateStatusData);
  };

  const onDeleteApplication = () => {
    deleteMutation.mutate(applicant.id);
  };

  return (
    <div className="flex gap-2">
      {/* Requirements Dialog Trigger */}
      {/* <Dialog open={showRequirementsDialog} onOpenChange={setShowRequirementsDialog}>
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon">
            <FileText className="w-4 h-4" />
          </Button>
        </DialogTrigger>
        <DialogContent
          onKeyDown={(e) => e.preventDefault()}
          onFocusOutside={(e) => e.preventDefault()}
          className="sm:max-w-lg"
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold">
              {applicant.benefit.name} Requirements
            </DialogTitle>
            <DialogDescription>
              Upload required documents for this senior citizen's benefit.
            </DialogDescription>
          </DialogHeader>

          <DocumentUploadForm applicant={applicant} queryClient={queryClient} />

          <DialogFooter className="mt-6 flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowRequirementsDialog(false)}
              className="px-4 py-2"
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog> */}

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
              Categorize and update status of senior application based on eligibility
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
                options={filteredStatus}
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
              disabled={categoryMutation.isPending || statusMutation.isPending}
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
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-700">
            <Trash className="w-4 h-4" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent
          onKeyDown={(e) => e.preventDefault()}
          onFocusOutside={(e) => e.preventDefault()}
        >
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete the senior application. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={onDeleteApplication}
              className="!bg-red-600 text-white hover:!bg-red-700"
              disabled={deleteMutation.isPending}
            >
              {deleteMutation.isPending ? 'Deleting...' : 'Delete'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};