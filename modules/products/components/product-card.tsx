import Link from 'next/link'
import Image from 'next/image';
import { ProductSummary } from '../interfaces/product-summary.interface'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

interface Props {
    product: ProductSummary;
}


export const ProductCard = ({ product }: Props) => {

    const imageUrl = "http://localhost:8000/storage/" + product.image;

    return (
        <Card>
            <CardHeader>
                <Image
                    src={imageUrl}
                    alt={ product.name }
                    width={300}
                    height={300}
                />
            </CardHeader>
            <CardContent>
                <h3 className='text-2xl font-medium'>{ product.name }</h3>
                <p>$ { product.price }</p>
            </CardContent>  
            <CardFooter>
                <Link href={`/products/${product.slug}`} className='w-full'>
                    <Button className='w-full' variant='outline' size='lg'>Ver producto</Button>
                </Link>
            </CardFooter>
        </Card>
    )
}
