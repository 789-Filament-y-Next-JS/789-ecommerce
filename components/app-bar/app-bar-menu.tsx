"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { appbarMenuItems } from '@/constants'


export const AppBarMenu = () => {

    const pathname = usePathname();

    return (
        <ul className='flex items-center justify-center gap-4'>
            {
                appbarMenuItems.map((item) => (
                    <li 
                        key={item.href}
                        className={ pathname === item.href ? 'text-blue-500' : '' }    
                    >
                        <Link href={ item.href }>{ item.label }</Link>
                    </li>
                ))
            }
        </ul>
    )
}
