import React from 'react'

const PriBtn = ({ btnType , btnText, addStyle, clicked }) => {

    let styling = `rounded bg-sfsyellow text-sfsblue py-2 hover:bg-yellow-500 focus:outline-none ${addStyle}`

    return (
        <button onClick={clicked} type={btnType} className={styling}>
            {btnText}
        </button>
    )
}

export default PriBtn
