import Link from 'next/link';

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { CategorySummary } from '../interfaces/category-summary.interface'


interface Props {
    category: CategorySummary;
}

export const CategoryCard = ({ category }: Props) => {
    return (
        <Link href={`/categories/${category.slug}`} className="block">
            <Card className='gap-2'>
                <CardHeader>
                    {category.name}
                </CardHeader>
                <CardContent>
                    {category.summary}
                </CardContent>
            </Card>
        </Link>
    )
}
