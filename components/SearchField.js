import React, { useState, useEffect } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/router"
import { useDispatch, useSelector } from 'react-redux';
import { setQuery, fetchSearchPictures } from '../redux/actions/search';
import { setPagination } from '../redux/actions/search'

const SearchField = () => {

    const dispatch = useDispatch();
    const { page, queryValue, currentPage} = useSelector((state) => state.search);
    // console.log( queryValue );
    const [searchQuery, setSearchQuery] = useState(queryValue ? queryValue : "")
    const router = useRouter();
    

    const submitSearch = (e) => {
        e.preventDefault();
        if (page === 'home') {
            dispatch(setQuery(searchQuery, () => { }))
            dispatch(setPagination(1));
            router.push(`/search?value=${searchQuery}`);
        } else if (page === 'search') {
            dispatch(setQuery(searchQuery, () => { }))
            dispatch(setPagination(1));
            let data = {}
            data.queryField = queryValue;
            data.pageValue = 1;
            dispatch(fetchSearchPictures(data, () => { }));
        }
    }

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }

    // useEffect(() => {
    //     dispatch(setQuery(searchQuery, ()=>{}))
    // }, [searchQuery])

    return (
        <form
            onSubmit={submitSearch}
            autoComplete="off"
            className={
                page === "search" ? "w-full mx-auto text-left relative" :
                    "w-full md:w-4/5 lg:w-1/2 mx-auto text-left relative"
            }>
            <input type="text" name="searchQuery" required
                value={searchQuery}
                onChange={handleChange}
                className="search-box block w-full bg-bexash rounded-lg py-3 md:py-4 px-3 md:px-4 focus:outline-none placeholder-gray-600"
                placeholder={page === "search" ? "" : "Search for free photos"}
            />
            {
                page === "search" ? <AiOutlineSearch className='h-6 w-6 absolute top-3 md:top-4 right-4 md:right-7 lg:right-28 text-gray-600' /> : 
                <AiOutlineSearch className='h-6 w-6 absolute top-3 md:top-4 right-4 md:right-7 lg:right-32 text-gray-600' />
            }
            
        </form>
    )
}

export default SearchField
