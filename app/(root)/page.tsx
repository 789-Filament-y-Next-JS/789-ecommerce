import { HeroSection } from "@/components/hero-section";
import { ProductList } from "@/modules/products/components/product-list";


export default function HomePage() {
    return (
        <>
            <HeroSection/>

            <section>
                <div className="container">
                    <ProductList/>
                </div>
            </section>
        </>
    )
}