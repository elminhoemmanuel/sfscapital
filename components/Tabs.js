import React from 'react'

const Tabs = () => {
    return (
        <div className="flex justify-center items-center shadow ">
            {
                activeTab === "home" ?
                    <button type="button" className='p-3 block border-b-2 border-blue-600 text-gray-600'>
                        Home
                    </button> :
                    <button type="button" className='p-3 block border-b-2 border-gray-200 text-gray-600'>
                        Home
                    </button>
            }
        </div>
    )
}

export default Tabs
