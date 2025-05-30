// src/hooks/mutations/use-senior-mutations.ts
import { useMutation, useQueryClient, QueryClient } from '@tanstack/react-query';
import { apiService } from '@/lib/axios';
import { toast } from 'sonner';

interface SeniorUpdateData {
  id: number;
  email?: string | null;
  contact_no: string;
  emergency_no: string;
  barangay: string;
  purok: string;
  pwd: boolean;
}

export const useSeniorMutations = (queryClient: QueryClient) => {

  const deleteSeniorMutation = useMutation({
    mutationFn: async (id: number) => {
      await apiService.delete(`/api/seniors?id=${id}`);
    },
    onSuccess: () => {
      toast.success('Senior deleted successfully.');
      queryClient.invalidateQueries({ queryKey: ['seniors'] });
    },
    onError: (error: any) => {
      const errorMessage = error.response?.data?.message || `Failed to delete senior: ${error.message || 'Unknown error'}`;
      toast.error(errorMessage);
      console.error('Delete error:', error);
    },
  });

  const updateSeniorMutation = useMutation({
    mutationFn: async (data: SeniorUpdateData) => {
      await apiService.put(`/api/seniors`, data);
    },
    onSuccess: () => {
      toast.success('Senior updated successfully.');
      queryClient.invalidateQueries({ queryKey: ['seniors'] });
    },
    onError: (error: any) => {
      const errorMessage = error.response?.data?.message || `Update failed: ${error.message || 'Unknown error'}`;
      toast.error(errorMessage);
      console.error('Update error:', error);
    },
  });

  const releaseSeniorMutation = useMutation({
    mutationFn: async (seniorId: number) => {
      await apiService.post(`/api/seniors/release`, { seniorId });
    },
    onSuccess: () => {
      toast.success('Senior released successfully.');
      queryClient.invalidateQueries({ queryKey: ['seniors'] });
    },
    onError: (error: any) => {
      const errorMessage = error.response?.data?.message || `Failed to release senior: ${error.message || 'Unknown error'}`;
      toast.error(errorMessage);
      console.error('Release error:', error);
    },
  });

  return {
    deleteSeniorMutation,
    updateSeniorMutation,
    releaseSeniorMutation,
  };
};