export interface Product {
    id: number;
    name: string;
    slug: string;
    image: string;
    price: string;
    summary: string;
    description: string;
    category: {
        name: string;
        slug: string;
    };
}