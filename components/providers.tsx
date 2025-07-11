"use client";

import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/query-client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

interface Props {
    children?: React.ReactNode;
}


export const Providers = ({ children }: Props) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            { children }
        </QueryClientProvider>
    )
}
