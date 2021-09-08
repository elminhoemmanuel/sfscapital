import React from 'react'

const SecBtn = ({ btnType , btnText, addStyle }) => {

    let styling = `rounded bg-sfsgreen text-white hover:bg-green-700 focus:outline-none ${addStyle}`

    return (
        <button type={btnType} className={styling}>
            {btnText}
        </button>
    )
}

export default SecBtn
