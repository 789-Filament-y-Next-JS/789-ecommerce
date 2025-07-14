import Image from "next/image";
import { notFound } from "next/navigation";

import { getAllProducts } from "@/modules/products/actions/get-all-products";
import { getProductBySlug } from "@/modules/products/actions/get-product-by-slug";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { HtmlRenderer } from "@/components/hrml-renderer";
import { ShoppingCart } from "lucide-react";
import { Metadata } from "next";
import { ButtonCart } from "@/modules/cart/components/ButtonCart";


interface Props {
    params: Promise<{ slug: string }>;
}

export const revalidate = 82000;

export  async function generateMetadata({ params }: Props): Promise<Metadata> {
    
    const { slug } = await params;

    const product = await getProductBySlug(slug);

    return {
        title: product?.name,
        description: product?.summary
    }

}


export default async function ProductPage({ params }: Props) {

    const { slug } = await params;

    const product = await getProductBySlug(slug);

    if( !product ){
        notFound();
    }

    const imageUrl = "http://localhost:8000/storage/" + product.image;

    return (
        <section className="pt-12 min-h-[60vh]">
            <div className="container grid grid-cols-1 md:grid-cols-2 flex-center gap-8">

                {/* IMAGEN */}
                <div className="flex-center">
                    <Image
                        src={imageUrl}
                        alt={ product.name }
                        width={400}
                        height={400}
                    />
                </div>

                {/* DATOS */}
                <div className="flex flex-col gap-4">
                    <h1 className="text-5xl">{ product.name }</h1>
                    <p className="text-3xl">${ product.price }</p>
                    <p className="text-lg">{ product.summary }</p>
                    {/* TODO: AGREGAR INPUT DE CANTIDAD */}
                    
                    
                    <ButtonCart product={product} />

                    <Separator className="my-2"/>
                    <HtmlRenderer htmlString={ product.description } />

                </div>


            </div>
        </section>
    );
}


export async function generateStaticParams() {
    
    const { products } = await getAllProducts();

    return products.map(product => ({
        slug: product.slug
    }))

    // return [
    //     { slug: "example-product" }, // Fallback for static generation
    //     { slug: "example-product" } // Fallback for static generation
    // ]

}
