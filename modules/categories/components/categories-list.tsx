"use client"

import { CategoryCard } from './category-card'
import { useCategories } from '../hooks/use-categories'
import { LoadingView } from '@/components/loading-view';
import { CategoriesPagination } from './categories-pagination';

export const CategoriesList = () => {

    const { categories, isPending, meta } = useCategories();

    if (isPending) {
        return <LoadingView />
    }



    return (
        <>
            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    categories.map(category => (
                        <li key={category.slug}>
                            <CategoryCard category={category} />
                        </li>
                    ))
                }

            </ul>

            <div>
                <CategoriesPagination meta={meta!}/>
            </div>
        </>
    )
}
