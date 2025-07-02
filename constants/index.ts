


export const appbarMenuItems = [
    {
        label: 'Inicio',
        href: '/',
    },
    {
        label: 'Productos',
        href: '/products',
    },
    {
        label: 'Categorias',
        href: '/categories',
        subMenu: [
            {
                label: 'Electronica',
                href: '/categories/electronica',
            },
            {
                label: 'Ropa',
                href: '/categories/ropa',
            },
            {
                label: 'Hogar',
                href: '/categories/hogar',
            }
        ]
    }
];

