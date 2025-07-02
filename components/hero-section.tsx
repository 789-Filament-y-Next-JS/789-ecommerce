import React from 'react'
import Link from 'next/link';
import { Button } from './ui/button';

export const HeroSection = () => {
    return (
        <header className='min-h-[50vh] flex-center justify-center'>
            <div className="container flex-col flex-center justify-center">

                <h1 className='text-5xl md:text-[5rem] font-bold mb-2'>Tecnología <span className='text-primary'>Premium</span></h1>
                <p className='text-lg mb-4'>Descubre los productos mas innovadores y de calidad excepcional.</p>

                <div className='flex-col md:flex-row flex-center gap-4'>
                    <Link href="/products">
                        <Button>Explorar Productos</Button>
                    </Link>

                    <Link href="/categories">
                        <Button variant='outline'>Ver Categorias</Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}
