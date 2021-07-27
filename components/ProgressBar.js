import React from 'react'

const ProgressBar = ({percentage}) => {
    console.log(percentage)
    return (
        <div className='progress-bar'>
            <div className='filler' style={{width: `${percentage}%`}}>
            </div>
        </div>
    )
}

export default ProgressBar
