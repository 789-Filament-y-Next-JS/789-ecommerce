import { CategoriesList } from "@/modules/categories/components/categories-list";

export default function CategoriesPage() {
    return (
        <>
            <header className="pt-8">
                <div className="container">
                    <h1>Categorias</h1>
                    <p className="text-muted-foreground">Explora nuestra amplia gama de categorías y encuentra la solución tecnológica perfecta para ti.</p>
                </div>
            </header>

            <section className="py-8 min-h-[70vh]">
                <div className="container">

                    <CategoriesList/>
                </div>
            </section>
        </>
    );
}

export const metadata = {
    title: "Categories - Tech Store",
    description: "Explore our wide range of categories and find the perfect tech solution for you.",
}