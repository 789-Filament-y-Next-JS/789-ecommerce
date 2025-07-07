import { HeroSection } from "@/components/hero-section";
import { getAllProducts } from "@/modules/products/actions/get-all-products";
import { ProductList } from "@/modules/products/components/product-list";


export default async function HomePage() {

    const { products } = await getAllProducts()

    return (
        <>
            <HeroSection/>

            <section>
                <div className="container">
                    <ProductList products={products}/>
                </div>
            </section>
        </>
    )
}