import React from 'react'
import { featuresData } from "./FeaturesData";
import Image from "next/image"

const FeaturesArea = () => {
    return (
        <div className="px-6 md:px-16 lg:px-24 py-28 ">
            <div className='pb-12'>
                <h2 className='text-sfsblue font-bold text-3xl mb-2 text-center'>Your guide to financial wellness</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6'>
                {
                    featuresData.map(item =>{
                        return <div key={item.id} className="flex flex-col items-center justify-center">
                            <div className={`flex items-center justify-center mb-8 ${item.addStyle}`}>
                                <Image width='100%' height="100%" src={item.iconUrl} />
                            </div>
                            <div >
                                <h3 className='text-sfsblue font-bold text-xl mb-2 text-center'>{item.heading}</h3> 
                            </div>
                            <div>
                                <p className='text-featurestext text-sm mb-2 text-center'>{item.body}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default FeaturesArea
