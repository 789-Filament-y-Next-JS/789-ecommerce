import Link from 'next/link'
import { AppBarMenu } from './app-bar-menu'
import { ShoppingCart } from 'lucide-react'


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
                <AppBarMenu/>

                {/* CARRITO Y LOGIN */}
                <div className='flex-center justify-end gap-6'>
                    <ShoppingCart size={20}/>
                    <Link href='/auth/login'>Iniciar Sesion</Link>
                </div>

            </div>
        </nav>
    )
}
