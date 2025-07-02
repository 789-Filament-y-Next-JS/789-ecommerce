import React from 'react'
import { ProductCard } from './product-card'

export const ProductList = () => {
    return (
        <>
            <div className='mb-8'>
                <h1>Lista de producos</h1>
                <p>Productos mas recientes</p>
            </div>

            <ul className='product__list'>
                {
                    [0,1,2,3,4,5].map((item, index) => (
                        <li key={index}>
                            <ProductCard/>
                        </li>
                    ))
                }
            </ul>

        </>
    )
}
