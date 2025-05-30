// src/components/senior-citizen/release-action-button.tsx
'use client';

import React from 'react';
import { QueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
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
import { Seniors } from '@/types/seniors';
import { useSeniorMutations } from '@/hooks/mutations/use-senior-mutations'; // Import the new hook
import { PaperPlaneIcon } from '@radix-ui/react-icons';

interface ReleaseActionButtonProps {
  senior: Seniors;
  queryClient: QueryClient; // Explicitly use QueryClient type
}

export const ReleaseActionButton: React.FC<ReleaseActionButtonProps> = ({ senior, queryClient }) => {
  const { releaseSeniorMutation } = useSeniorMutations(queryClient);

  const handleRelease = () => {
    if (senior.releasedAt) {
      toast.info('Senior is already marked as released.');
      return;
    }
    releaseSeniorMutation.mutate(senior.id);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={senior.releasedAt ? 'text-gray-400 cursor-not-allowed' : 'text-orange-500 hover:text-orange-600'}
          disabled={!!senior.releasedAt}
        >
          <PaperPlaneIcon className="w-4 h-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm Release</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to mark **{senior.firstname} {senior.lastname}** as released? This action will record the current date and time as their release date.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleRelease} disabled={releaseSeniorMutation.isPending}>
            {releaseSeniorMutation.isPending ? 'Releasing...' : 'Release Senior'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};