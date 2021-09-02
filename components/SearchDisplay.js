import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MdPerson } from "react-icons/md";
import { RiExternalLinkLine } from "react-icons/ri";
import Link from 'next/link';
import Masonry from 'react-masonry-css'

const SearchDisplay = () => {

    const dispatch = useDispatch();
    const { loading, error, queryValue, photos } = useSelector((state) => state.search);

    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        769: 2,
        500: 1
      };

    return (
        <div className="px-6">
            {
                loading ?
                    <div className="flex items-center justify-center">
                        <div className="spinner-page"></div>
                    </div>

                    :
                    // grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                    <div >
                        {
                            photos[0] ?

                                <Masonry
                                    breakpointCols={breakpointColumnsObj}
                                    className="my-masonry-grid"
                                    columnClassName="my-masonry-grid_column"
                                >
                                    {
                                        photos.map(item => (
                                            <div key={item.id} className='pics-item'>
                                                <div className="border border-gray-400 h-full">
                                                    <div className="" >
                                                        <img className="w-full " src={item.src.original} alt="Image from Pexel" />
                                                    </div>
                                                    <div className='py-4 px-2 md:px-4 bg-white'>
                                                        <p className="font-bold">Photographer details</p>
                                                        <div className=' flex items-center justify-between'>
                                                            <div className='flex items-center'>
                                                                <MdPerson className='h-5 w-5' />
                                                                <div><p className="text-sm">{item.photographer}</p></div>
                                                            </div>
                                                            <div className='flex items-center'>

                                                                <RiExternalLinkLine className='h-5 w-5' />
                                                                <div>
                                                                    <Link href={item.photographer_url}>
                                                                        <a className="text-bexels text-sm">Profile</a>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Masonry>

                                :

                                <div>
                                    <p className="text-gray-600 text-center">{error ? error : "No result found, please search for another word"}</p>
                                </div>
                        }
                    </div>
            }
        </div>
    )
}

export default SearchDisplay
