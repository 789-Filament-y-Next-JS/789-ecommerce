"use client"

import { Button } from '@/components/ui/button'
import { Product } from '@/modules/products/interfaces/product.interface'
import { ShoppingCart } from 'lucide-react'
import { useCartStore } from '../stores/cart.store';


interface Props {
    product: Product;
}


export const ButtonCart = ({ product }: Props) => {

    const { addProductToCart } = useCartStore();

    return (
        <Button
            onClick={() => addProductToCart( product )}

        >
            <ShoppingCart /> Agregar al carrito
        </Button>
    )
}
