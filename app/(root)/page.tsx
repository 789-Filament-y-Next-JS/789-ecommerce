import { HeroSection } from "@/components/hero-section";
import { getAllProducts } from "@/modules/products/actions/get-all-products";
import { ProductList } from "@/modules/products/components/product-list";
import { Metadata } from "next";

export const revalidate = 15;

export default async function HomePage() {

    const { products, meta } = await getAllProducts()

    return (
        <>
            <HeroSection/>

            <section>
                <div className="container">
                    <ProductList meta={meta} products={products}/>
                </div>
            </section>
        </>
    )
}

export const metadata: Metadata = {
    title: "Tech Store",
    description: "Welcome to Tech Store, your one-stop shop for the latest in technology and gadgets. Explore our wide range of products and find the perfect tech solution for you.",
}