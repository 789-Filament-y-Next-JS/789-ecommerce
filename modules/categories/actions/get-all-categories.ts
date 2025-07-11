"use server"

import apiClient from "@/lib/api-client"
import { GetAllCategoriesResponse } from "../interfaces/get-all-categories-response.interface"




export const getAllCategories = async (page: string | number = 1) => {

    const { data } = await apiClient.get<GetAllCategoriesResponse>('/categories', {
        params: {
            page,
        }
    })

    return data;


}