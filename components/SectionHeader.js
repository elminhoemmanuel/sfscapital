import React from 'react'

const SectionHeader = ({textColor , headerText}) => {

    const style = "text-center text-3xl md:text-4xl  "  + textColor + " "

    return (
        <div className='mb-16'>
            <h1 className={style}>{headerText}</h1>
            
        </div>
    )
}

export default SectionHeader
