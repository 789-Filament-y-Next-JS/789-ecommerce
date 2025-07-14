import Link from 'next/link'
import { AppBarMenu } from './app-bar-menu'
import { ShoppingCart } from 'lucide-react'
import { AppSidebar } from '../app-sidebar'
import { Button } from '../ui/button'


export const AppBar = () => {
    return (
        <nav className='border-b border-gray-200'>
            <div className='container py-4 grid grid-cols-3'>

                {/* LOGO */}
                <div className='navbar-logo'>
                    <div className='navbar-logo-icon'>
                        <span className='font-semibold'>T</span>
                    </div>
                    <h2 className='text-base'>TechStore</h2>
                </div>

                {/* MENU */}
                <div className='hidden md:block'>
                    <AppBarMenu />
                </div>

                {/* CARRITO Y LOGIN */}
                <div className='flex-center justify-end gap-6'>

                    <Link href={'/cart'}>
                        <Button variant={'ghost'}>
                            <ShoppingCart size={20} />
                        </Button>
                    </Link>

                    <Link className='hidden md:block' href='/auth/login'>Iniciar Sesion</Link>
                </div>

                {/* MENU RESPONSIVE */}
                <div className='md:hidden flex justify-end'>
                    <AppSidebar />
                </div>

            </div>
        </nav>
    )
}
