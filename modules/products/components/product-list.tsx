import { ProductCard } from './product-card'
import { ProductSummary } from '../interfaces/product-summary.interface';


interface Props {
    products: ProductSummary[];
}

export const ProductList = ({ products }: Props) => {

    return (
        <>
            <div className='mb-8'>
                <h1>Lista de productos</h1>
                <p>Productos mas recientes</p>
            </div>

            <ul className='product__list'>
                {
                    products.map((product, index) => (
                        <li key={index}>
                            <ProductCard product={product}/>
                        </li>
                    ))
                }
            </ul>

        </>
    )
}
