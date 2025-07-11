import { getAllProducts } from "@/modules/products/actions/get-all-products";
import { ProductList } from "@/modules/products/components/product-list";


interface Props {
    params: Promise<{ page: string }>;
}

export default async function ProductsPaginationPage({ params }: Props) {
    
    const { page } = await params;
    console.log(page);


    const { products, meta } = await getAllProducts(page);
    

    return (
        <section className="py-8">
            <div className="container">
                <ProductList products={products} meta={meta} />
            </div>
        </section>
    );
}