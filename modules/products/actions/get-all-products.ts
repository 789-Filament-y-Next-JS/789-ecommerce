"use server"

import apiClient from "@/lib/api-client"
import { GetAllProductsResponse } from "../interfaces/get-all-products-response.interface";



export const getAllProducts = async (page: string | number = 1) => {


    const { data } = await apiClient.get<GetAllProductsResponse>('/products')
    return data;


    // const response = await fetch('http://localhost:8000/api/products')
    // const data = await response.json()

    // return data.products as any[]; // Adjust the type as needed, e.g., Product[]

}
