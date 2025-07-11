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


interface Props {
    meta: Meta;
}

export const CategoriesPagination = ({ meta }: Props) => {
    const totalPages = meta.last_page;

    // ARRAY DE TOTAL PAGES
    const pagesArray = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <>
            <Pagination className="justify-start">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>

                    {
                        pagesArray.map((page) => (
                            <PaginationItem key={page}>
                                <PaginationLink href={`/products/page/${page}`}>
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
