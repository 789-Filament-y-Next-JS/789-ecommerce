import { useQuery } from "@tanstack/react-query"
import { getAllCategories } from "../actions/get-all-categories"


export const useCategories = () => {

    const { data, isPending } = useQuery({
        queryKey: ['categories'],
        queryFn: () => getAllCategories(),
        staleTime: 1000,
    })


    return {
        categories: data?.categories ?? [],
        meta: data?.meta ?? null,
        isPending,
    }

}