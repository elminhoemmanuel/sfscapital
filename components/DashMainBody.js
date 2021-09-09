import React from 'react'
import { cardsData } from './CardsData'
import Image from 'next/image'

const DashMainBody = () => {
    return (
        <div className=' py-6'>
            {/* Welcome section of dashboard */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 px-6 md:px-8">
                <div>
                    <h1 className='text-sfsblue font-bold text-3xl mb-3 md:mb-0'>Hi, Welcome</h1>
                </div>

                <div className="">
                    <button className="bg-sfsorange text-white whitespace-nowrap flex items-center justify-center md:justify-start w-full md:w-auto text-center px-5 py-3 rounded">
                        <div className="mr-3">Invest Now</div>
                        <div>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle opacity="0.25" cx="15" cy="15" r="15" fill="white" />
                                <path d="M20 20.6667H9.33333C8.59733 20.6667 8 20.0693 8 19.3333V11.3333C8 10.5973 8.59733 10 9.33333 10H20C20.736 10 21.3333 10.5973 21.3333 11.3333V19.3333C21.3333 20.0693 20.736 20.6667 20 20.6667ZM9.33333 11.3333V19.3333H20V11.3333H9.33333ZM10.6667 13.3333H18.6667V14.6667H10.6667V13.3333ZM10.6667 16H17.3333V17.3333H10.6667V16Z" fill="white" />
                            </svg>
                        </div>
                    </button>
                </div>

            </div>

            {/* Cards section of dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8 px-6 md:px-8">
                {
                    cardsData.map(item => {
                        return <div key={item.id} className={`card h-32 w-full p-6 text-white rounded ${item.color}`}>
                            <p className="font-bold text-sm mb-2">{item.heading}</p>
                            <h1 className="text-xl font-bold mb-5">{item.amount}</h1>
                            <p className="text-xs">{item.downText}</p>
                        </div>
                    })
                }

            </div>

            {/* charts section of dashboard */}
            <div className='px-6 md:px-8'>
                <div>
                    <p className='text-sfsblue font-bold text-base mb-5'>Latest Investments</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-9 gap-3'>
                    <div className="bg-white col-span-9 md:col-span-4 lg:col-span-4 mb-5 md:mb-0 rounded-b-lg shadow-sm">
                        <div className="pic-box rounded px-6 py-8 ">
                            <p className="mb-8"><span className="rounded py-2 px-5 bg-gray-600 text-white">Fixed Plan</span></p>
                            <p className="text-white text-xl mb-2">Investment Title</p>
                            <p className="text-sm text-white">The Company currently operates in 25 states in...</p>
                        </div>
                        <div className='bg-white px-6 py-8 text-navborder rounded-b-lg shadow-sm'>
                            <div>
                                <h1 className="text-sm mb-3">INTEREST</h1>
                                <p className="text-lg mb-5">13% monthly</p>
                            </div>
                            <div className="mb-4">
                                <h1 className="text-sm mb-3">INVESTABLE AMOUNT</h1>
                                <div className="flex items-center">
                                    <div className="mr-4 md:mr-6">
                                        <p className="text-lg mb-5 font-bold text-gray-600 ">₦55,000.00</p>
                                    </div>
                                    <div className="mr-4 md:mr-6">
                                        <p className="text-lg mb-5">To</p>
                                    </div>
                                    <div>
                                        <p className="text-lg mb-5 font-bold text-gray-600">₦155,000.00</p>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <h1 className="text-sm mb-3">INVESTORS</h1>
                                <p className="text-lg mb-5">200</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white col-span-9 md:col-span-5 lg:col-span-5 rounded-lg shadow-sm px-4 py-4 lg:py-0">
                        <img className=" h-full w-full " src="/images/chartnew.svg" alt="chart" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DashMainBody
