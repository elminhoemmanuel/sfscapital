import React from 'react'

const PriBtn = ({ btnType , btnText, addStyle }) => {

    let styling = `rounded bg-bexels text-white py-2 hover:bg-green-800 ${addStyle}`

    return (
        <button type={btnType} className={styling}>
            {btnText}
        </button>
    )
}

export default PriBtn
