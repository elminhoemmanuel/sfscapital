import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import router, { useRouter } from "next/router";
import { setPagination } from '../redux/actions/search'

const Pagination = () => {

    const dispatch = useDispatch();
    const { currentPage } = useSelector((state) => state.search);
    const handlePagination = (value) =>{
        dispatch(setPagination(value));
    }

    return (
        // Pagination buttons
        <div className='flex items-center justify-center pt-6'>
            <div>
                {
                    currentPage === 1 ?
                        <button onClick={()=>{handlePagination(1)}} className='focus:outline-none block border border-bexels bg-bexels hover:bg-bexels text-white hover:text-white rounded p-4 mr-2'>
                            1
                        </button> :
                        <button onClick={()=>{handlePagination(1)}} className='focus:outline-none block border border-bexels bg-transparent hover:bg-bexels text-gray-600 hover:text-white rounded p-4 mr-2'>
                            1
                        </button>
                }
            </div>
            <div>
                {
                    currentPage === 2 ?
                        <button onClick={()=>{handlePagination(2)}} className='focus:outline-none block border border-bexels bg-bexels hover:bg-bexels text-white hover:text-white rounded p-4 mr-2'>
                            2
                        </button> :
                        <button onClick={()=>{handlePagination(2)}} className='focus:outline-none block border border-bexels bg-transparent hover:bg-bexels text-gray-600 hover:text-white rounded p-4 mr-2'>
                            2
                        </button>
                }
            </div>
            <div>
                {
                    currentPage === 3 ?
                        <button onClick={()=>{handlePagination(3)}} className='focus:outline-none block border border-bexels bg-bexels hover:bg-bexels text-white hover:text-white rounded p-4 mr-2'>
                            3
                        </button> :
                        <button onClick={()=>{handlePagination(3)}} className='focus:outline-none block border border-bexels bg-transparent hover:bg-bexels text-gray-600 hover:text-white rounded p-4 mr-2'>
                            3
                        </button>
                }
            </div>
        </div>
    )
}

export default Pagination
