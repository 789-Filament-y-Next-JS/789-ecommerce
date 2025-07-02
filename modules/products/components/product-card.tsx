import React from 'react'
import Link from 'next/link'

import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const ProductCard = () => {
    return (
        <Card>
            <CardContent>
                <h3 className='text-2xl font-medium'>Nombre del producto</h3>
                <p>$ 1299</p>
            </CardContent>  
            <CardFooter>
                <Link href='#' className='w-full'>
                    <Button className='w-full' variant='outline' size='lg'>Ver producto</Button>
                </Link>
            </CardFooter>
        </Card>
    )
}
