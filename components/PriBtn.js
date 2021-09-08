import React from 'react'

const PriBtn = ({ btnType , btnText, addStyle }) => {

    let styling = `rounded bg-sfsyellow text-sfsblue py-2 hover:bg-yellow-500 focus:outline-none ${addStyle}`

    return (
        <button type={btnType} className={styling}>
            {btnText}
        </button>
    )
}

export default PriBtn
