import React from 'react'
import SecBtn from './SecBtn'

const SearchArea = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="px-6 md:px-16 lg:px-24 pb-12">
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row md:items-center md:justify-center border border-gray-100 rounded p-4">
                <div className="mb-3 lg:mb-0 w-full md:w-1/2 lg:w-1/4 pr-2">
                    <select
                        className="text-inputtext w-full block border border-inputbg bg-inputbg focus:bg-transparent rounded focus:outline-none p-3 text-sm md:text-xs lg:text-sm"
                    >
                        <option value="">Select Product</option>
                        <option value="Assets">Assets</option>
                    </select>
                </div>
                <div className="mb-3 lg:mb-0 w-full md:w-1/2 text-input pr-2">
                    <input placeholder="How much do you want to invest?"
                        className="text-inputtext w-full block border border-inputbg bg-inputbg focus:bg-transparent rounded focus:outline-none p-3 text-sm md:text-xs lg:text-sm placeholder-inputtext"
                    />
                </div>
                <div className="mb-3 lg:mb-0 w-full md:w-1/2 lg:w-1/4 pr-2">
                    <select
                        className="text-inputtext w-full block border border-inputbg bg-inputbg focus:bg-transparent rounded focus:outline-none p-3 text-sm md:text-xs lg:text-sm"
                    >
                        <option value="">For how long?</option>
                        <option value="Assets">10 days</option>
                    </select>
                </div>
                <div className="mb-3 lg:mb-0 w-full md:w-1/2 lg:w-1/5 pr-2">
                    <SecBtn btnType="submit" btnText="Calculate" addStyle="py-3 w-full block" />
                </div>

            </form>
        </div>
    )
}

export default SearchArea
