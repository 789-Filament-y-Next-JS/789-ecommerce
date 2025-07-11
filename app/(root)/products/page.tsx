import { getAllProducts } from "@/modules/products/actions/get-all-products";
import { ProductList } from "@/modules/products/components/product-list";
import { Metadata } from "next";

export default async function ProductsPage() {

    const { products, meta } = await getAllProducts()
    

    return (
        <>
            <section className="py-8">
                <div className="container">
                    <ProductList products={products} meta={meta}/>
                </div>
            </section>

        </>
    );
}

export const metadata: Metadata = {
    title: "Products - Tech Store",
    description: "Explore our wide range of products and find the perfect tech solution for you.",
}