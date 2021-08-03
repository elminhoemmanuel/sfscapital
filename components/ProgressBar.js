import React from 'react'

const ProgressBar = ({percentage}) => {
    // console.log(percentage)
    return (
        <div className='progress-bar relative w-full rounded-full bg-inputgrey'>
            <div className='filler bg-yellow-600 h-full rounded-full' style={{width: `${percentage}%`}}>
            </div>
        </div>
    )
}

export default ProgressBar
