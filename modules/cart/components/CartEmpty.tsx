import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const CartEmpty = () => {
    return (
        <section className='pt-8 flex-center min-h-[50vh]'>
            <div className="container flex-center flex-col gap-4">
                <span className='text-2xl'>
                    <ShoppingCart size={80} className='text-neutral-500'/>
                </span>

                <p className='text-lg'>El carrito esta vacio</p>

                <Link href={'/products'}>
                    <Button>Ver productos</Button>
                </Link>
            </div>
        </section>
    )
}
