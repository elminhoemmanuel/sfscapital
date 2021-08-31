import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const TabsDisplay = () => {

    const { loading, photos , error } = useSelector((state) => state.tabs);

    return (
        <div className="px-6 py-6">
            {
                loading ?
                <div className="flex items-center justify-center">
                    <div className="spinner-page"></div>
                </div> 
                
                :

                <div >
                    {
                        photos[0] ?
                        
                        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
                            {
                                photos.map(item =>(
                                    <div className="" key={item.id}>
                                        <img className="w-full " src={item.src.original} alt="Image from Pexel" />
                                    </div>
                                ))
                            }
                        </div>
            
                        :

                        <div>
                            <p className="text-gray-600 text-center">{error ? error : "No images found"}</p>
                        </div>
                    }
                </div>
            }            
        </div>
    )
}

export default TabsDisplay
