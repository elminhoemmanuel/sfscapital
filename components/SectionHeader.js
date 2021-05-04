import React from 'react'

const SectionHeader = ({textColor}) => {

    const style = "text-center text-3xl md:text-4xl "  + textColor + " "

    return (
        <div className='mb-16'>
            <h1 className={style}>How Cropshares Works</h1>
            
        </div>
    )
}

export default SectionHeader
