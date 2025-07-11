import apiClient from "@/lib/api-client"
import { GetProductBySlugResponse } from "../interfaces/get-product-by-slug-response.interface";
import { isAxiosError } from "axios";



export const getProductBySlug = async (slug: string) => {

    try {

        const { data } = await apiClient.get<GetProductBySlugResponse>(`/products/${slug}`);
        return data.product;

    } catch (error) {

        if (isAxiosError(error)) {
            
            if (error.response?.status === 404) {
                return undefined; // Product not found
            }

            throw new Error(`Error fetching product by slug`);
        }
    }
}