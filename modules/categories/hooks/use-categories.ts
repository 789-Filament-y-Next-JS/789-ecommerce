"use client"
import { useQuery } from "@tanstack/react-query"
import { getAllCategories } from "../actions/get-all-categories"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"


export const useCategories = () => {

    const queryParams = useSearchParams()
    const pageParams = queryParams.get("page");

    const [page, setPage] = useState(queryParams.get('page') || 1);

    const { data, isPending } = useQuery({
        queryKey: ['categories', page],
        queryFn: () => getAllCategories(page),
        staleTime: 1000 * 60 * 60,
    })

    useEffect(() => {
        if( pageParams ){
            setPage(pageParams);
        }
    }, [pageParams])


    return {
        categories: data?.categories ?? [],
        meta: data?.meta ?? null,
        isPending,
    }

}