import React, {useState} from 'react'

const PrimaryBtn = ({addStyle, buttonText}) => {

    const style = addStyle + ' text-center block rounded-full whitespace-nowrap py-3 px-8 text-white border-2 border-greenpri hover:bg-greensec hover:border-greensec focus:outline-none ' 

    return (
        
        <button type='submit' className={style}>
            {buttonText}
        </button>
    )
}

export default PrimaryBtn
