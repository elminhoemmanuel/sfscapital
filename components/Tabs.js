import React, { useState, useEffect } from 'react'
import { setTab , fetchTabPictures } from '../redux/actions/tabs'
import { START_FETCH , STOP_FETCH } from '../redux/types'
import { useDispatch, useSelector } from 'react-redux';

const Tabs = () => {

    const dispatch = useDispatch();
    const { activeTab } = useSelector((state) => state.tabs);

    const handleTab = (value) =>{
        dispatch(setTab(value));
        dispatch(fetchTabPictures(value, ()=>{}));
    }

    useEffect(() => {
        dispatch(fetchTabPictures("any pictures", ()=>{}));
    }, [])


    return (
        <div className="flex justify-center items-center shadow ">
            {
                activeTab === "any pictures" ?
                    <button
                    onClick={()=>{handleTab("any pictures")}}
                    type="button" className='focus:outline-none px-6 py-3 block border-b-2 border-blue-600 text-gray-600'>
                        Home
                    </button> :
                    <button
                    onClick={()=>{handleTab("any pictures")}}
                    type="button" className='focus:outline-none px-6 py-3 block border-b-2 border-gray-200 text-gray-600'>
                        Home
                    </button>
            }
            {
                activeTab === "food" ?
                    <button
                    onClick={()=>{handleTab("food")}}
                    type="button" className='focus:outline-none px-6 py-3 block border-b-2 border-blue-600 text-gray-600'>
                        Food
                    </button> :
                    <button
                    onClick={()=>{handleTab("food")}}
                    type="button" className='focus:outline-none px-6 py-3 block border-b-2 border-gray-200 text-gray-600'>
                        Food
                    </button>
            }
            {
                activeTab === "people" ?
                    <button
                    onClick={()=>{handleTab("people")}}
                    type="button" className='focus:outline-none px-6 py-3 block border-b-2 border-blue-600 text-gray-600'>
                        People
                    </button> :
                    <button
                    onClick={()=>{handleTab("people")}}
                    type="button" className='focus:outline-none px-6 py-3 block border-b-2 border-gray-200 text-gray-600'>
                        People
                    </button>
            }
            {
                activeTab === "places" ?
                    <button
                    onClick={()=>{handleTab("places")}}
                    type="button" className='focus:outline-none px-6 py-3 block border-b-2 border-blue-600 text-gray-600'>
                        Places
                    </button> :
                    <button
                    onClick={()=>{handleTab("places")}}
                    type="button" className='focus:outline-none px-6 py-3 block border-b-2 border-gray-200 text-gray-600'>
                        Places
                    </button>
            }
        </div>
    )
}

export default Tabs
