import React from 'react'

interface Props {
    htmlString: string;
}

export const HtmlRenderer = ({ htmlString }: Props) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: htmlString }}>

        </div>
    )
}
