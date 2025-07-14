"use client";

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { Meta } from '../interfaces/get-all-categories-response.interface';
import { useRouter } from "next/navigation";


interface Props {
    meta: Meta;
}

export const CategoriesPagination = ({ meta }: Props) => {

    const router = useRouter();

    const totalPages = meta.last_page;

    // ARRAY DE TOTAL PAGES
    const pagesArray = Array.from({ length: totalPages }, (_, index) => index + 1);


    const handleClick = ( page: string | number ) => {
        router.push(`/categories?page=${page}`) 
    }

    return (
        <>
            <Pagination className="justify-start">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>

                    {
                        pagesArray.map((page) => (
                            <PaginationItem key={page} onClick={() => handleClick(page)}>
                                <PaginationLink href=''>
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                        ))
                    }

                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </>
    )
}
