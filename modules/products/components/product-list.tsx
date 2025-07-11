import { ProductCard } from './product-card'
import { ProductSummary } from '../interfaces/product-summary.interface';
import { ProductsPagination } from './products-pagination';
import { Meta } from '../interfaces/get-all-products-response.interface';


interface Props {
    products: ProductSummary[];
    meta: Meta
}

export const ProductList = ({ products, meta }: Props) => {

    return (
        <>
            <div className='mb-8'>
                <h1>Lista de productos</h1>
                <p>Productos mas recientes</p>
            </div>

            <div className='mb-8'>
                <ProductsPagination meta={meta}/>
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

            <div className='mt-8'>
                <ProductsPagination meta={meta}/>
            </div>

        </>
    )
}
