import { Loader2Icon } from 'lucide-react'
import React from 'react'

export const LoadingView = () => {
    return (
        <section className='min-h-[70vh] flex-center'>
            <div className="container flex-center">
                <Loader2Icon className="animate-spin" />
                Cargando...
            </div>

        </section>
    )
}
