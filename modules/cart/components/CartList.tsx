"use client"
import { Card, CardContent } from '@/components/ui/card';
import { useCartStore } from '../stores/cart.store'
import { CartEmpty } from './CartEmpty';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';

export const CartList = () => {
    const imageUrl = "http://localhost:8000/storage/";


    const { cart, incrementQuantity, decrementQuantity, removeToCart } = useCartStore();

    if (cart.length === 0) {
        return <CartEmpty />
    }



    return (
        <section className='pt-8'>
            <div className="container">
                <ul className='flex flex-col gap-4'>
                    {
                        cart.map(item => (
                            <li key={item.productId}>
                                <Card>
                                    <CardContent className='cart-card-content'>
                                        <Image
                                            src={imageUrl + item.productImage}
                                            alt={item.productName}
                                            width={100}
                                            height={100}
                                        />

                                        <div>
                                            <h4 className='text-lg font-semibold'>{item.productName}</h4>
                                            <p className='text-neutral-500 font-semibold'>${item.productPrice}</p>

                                            <div className='flex-center gap-4'>
                                                <Button
                                                    size={'sm'}
                                                    onClick={() => decrementQuantity(item.productId)}
                                                >
                                                    -
                                                </Button>

                                                <span>{item.quantity}</span>

                                                <Button
                                                    size={'sm'}
                                                    onClick={() => incrementQuantity(item.productId)}
                                                >
                                                    +
                                                </Button>

                                                <Button
                                                    variant={'destructive'}
                                                    onClick={() => removeToCart(item.productId)}
                                                >
                                                    <Trash/>
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}
