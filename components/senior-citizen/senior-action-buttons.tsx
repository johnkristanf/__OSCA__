// src/components/senior-citizen/senior-action-buttons.tsx
'use client';

import React, { JSX } from 'react';
import { useMutation, useQueryClient, QueryClient } from '@tanstack/react-query';
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import { Checkbox } from '@/components/ui/checkbox';
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
} from 'lucide-react';
import { DocumentViewDialog } from '@/components/senior-documents/document-view-dialog';
import { formatDateOnly, formatDateTime } from '@/utils/format';
import { Seniors } from '@/types/seniors';
import { useSeniorMutations } from '@/hooks/mutations/use-senior-mutations'; // Import the new hook
import { PaperPlaneIcon } from '@radix-ui/react-icons'; // Assuming you might use this icon in profile details

interface SeniorActionButtonsProps {
  senior: Seniors;
  queryClient: QueryClient; // Explicitly use QueryClient type
}

export const SeniorActionButtons: React.FC<SeniorActionButtonsProps> = ({ senior, queryClient }) => {
  const [showView, setShowView] = React.useState(false);
  const [showEdit, setShowEdit] = React.useState(false);
  const [editData, setEditData] = React.useState({
    email: senior.email,
    contact_no: senior.contact_no,
    emergency_no: senior.emergency_no,
    barangay: senior.barangay,
    purok: senior.purok,
    pwd: senior.pwd,
  });

  const { deleteSeniorMutation, updateSeniorMutation } = useSeniorMutations(queryClient);

  const handleDelete = () => {
    deleteSeniorMutation.mutate(senior.id);
  };

  const handleUpdate = () => {
    updateSeniorMutation.mutate({ id: senior.id, ...editData });
  };

  const profileDetails = [
    { icon: <MailIcon className="w-4 h-4 text-muted-foreground" />, label: 'Email', value: senior.email },
    { icon: <PhoneIcon className="w-4 h-4 text-muted-foreground" />, label: 'Contact No.', value: senior.contact_no },
    {
      icon: <AlertTriangleIcon className="w-4 h-4 text-muted-foreground" />,
      label: 'Emergency No.',
      value: senior.emergency_no,
    },
    {
      icon: <CalendarIcon className="w-4 h-4 text-muted-foreground" />,
      label: 'Birthdate',
      value: formatDateOnly(senior.birthdate),
    },
    { icon: <UserIcon className="w-4 h-4 text-muted-foreground" />, label: 'Gender', value: senior.gender },
    { icon: <MapPinIcon className="w-4 h-4 text-muted-foreground" />, label: 'Barangay', value: senior.barangay },
    { icon: <LandmarkIcon className="w-4 h-4 text-muted-foreground" />, label: 'Purok', value: senior.purok },
    { icon: <UserCheck className="w-4 h-4 text-muted-foreground" />, label: 'PWD', value: senior.pwd ? 'Yes' : 'No' },
    {
      icon: <StickyNoteIcon className="w-4 h-4 text-muted-foreground" />,
      label: 'Remarks',
      value: senior.remarks?.name ?? 'N/A',
    },
    senior.releasedAt && {
      icon: <PaperPlaneIcon className="w-4 h-4 text-muted-foreground" />,
      label: 'Released On',
      value: formatDateTime(senior.releasedAt),
    },
  ].filter(Boolean) as { icon: JSX.Element; label: string; value: string | null }[];

  return (
    <div className="flex gap-2">
      {/* View Dialog */}
      <Dialog open={showView} onOpenChange={setShowView}>
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon">
            <EyeIcon className="w-4 h-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl">Senior Profile</DialogTitle>
            <DialogDescription>Full details of **{senior.firstname} {senior.lastname}**</DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {profileDetails.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 border rounded-lg p-3 bg-muted/50 shadow-sm"
              >
                {item.icon}
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wide">
                    {item.label}
                  </p>
                  <p className="text-sm mt-1">{item.value}</p>
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
            <DialogDescription>Update contact and location information of the senior.</DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4 py-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={editData.email || ''}
                onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                placeholder="Enter email"
              />
            </div>
            <div>
              <Label htmlFor="contact_no">Contact Number</Label>
              <Input
                id="contact_no"
                value={editData.contact_no}
                onChange={(e) => setEditData({ ...editData, contact_no: e.target.value })}
                placeholder="Enter contact number"
              />
            </div>
            <div>
              <Label htmlFor="emergency_no">Emergency Number</Label>
              <Input
                id="emergency_no"
                value={editData.emergency_no}
                onChange={(e) => setEditData({ ...editData, emergency_no: e.target.value })}
                placeholder="Enter emergency number"
              />
            </div>
            <div>
              <Label htmlFor="barangay">Barangay</Label>
              <Input
                id="barangay"
                value={editData.barangay}
                onChange={(e) => setEditData({ ...editData, barangay: e.target.value })}
                placeholder="Enter barangay"
              />
            </div>
            <div>
              <Label htmlFor="purok">Purok</Label>
              <Input
                id="purok"
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
            <Button type="button" onClick={handleUpdate} disabled={updateSeniorMutation.isPending}>
              {updateSeniorMutation.isPending ? 'Saving...' : 'Save'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-700">
            <Trash className="w-4 h-4" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>This will permanently delete the senior record.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-red-600 hover:bg-red-700" disabled={deleteSeniorMutation.isPending}>
              {deleteSeniorMutation.isPending ? 'Deleting...' : 'Delete'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};