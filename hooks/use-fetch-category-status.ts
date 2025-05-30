import { apiService } from '@/lib/axios'
import { Categories, Status } from '@/types/seniors'
import { useQuery } from '@tanstack/react-query'

export const useFetchCategoryAndStatus = () => {
    const categoryQuery = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const respData = await apiService.get<Categories[]>('/api/seniors/category')
            return respData
        },
    })

    const statusQuery = useQuery({
        queryKey: ['status'],
        queryFn: async () => {
            const respData = await apiService.get<Status[]>('/api/benefits/application/status')
            return respData
        },
    })

    return {
        categories: categoryQuery.data ?? [], // ← fallback to empty array
        status: statusQuery.data ?? [], // ← fallback to empty array
        isCategoryLoading: categoryQuery.isLoading,
        isStatusLoading: statusQuery.isLoading
    }

}

