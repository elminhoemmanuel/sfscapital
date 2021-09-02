import React, {useState, useEffect} from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/router"
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from '../redux/actions/search'

const SearchField = () => {

    const dispatch = useDispatch();
    const { page , queryValue } = useSelector((state) => state.search);
    // console.log( queryValue );
    const [searchQuery, setSearchQuery] = useState( queryValue ? queryValue : "" )
    const router = useRouter();

    const submitSearch = (e) =>{
        e.preventDefault();
        if( page === 'home' ){
            dispatch(setQuery(searchQuery, ()=>{}))
            router.push(`/search?value=${queryValue}`);
        }else if( page === 'search' ){
            dispatch(setQuery(searchQuery, ()=>{}))
        }
    }

    const handleChange = (e) =>{
        setSearchQuery(e.target.value)  
    }

    // useEffect(() => {
    //     dispatch(setQuery(searchQuery, ()=>{}))
    // }, [searchQuery])

    return (
        <form
            onSubmit={submitSearch}
            autoComplete = "off"
            className={
                page === "search" ? "w-full mx-auto text-left relative" :
                "w-full md:w-4/5 lg:w-1/2 mx-auto text-left relative"
            }>
            <input type="text" name="searchQuery" required
                value={searchQuery}
                onChange={handleChange}
                className="block w-full bg-bexash rounded-lg py-2 md:py-4 px-2 md:px-4 focus:outline-none placeholder-gray-600"
                placeholder={ page === "search" ? "" : "Search for free photos"}
            />
            <AiOutlineSearch className='h-6 w-6 absolute top-2 md:top-4 right-4 md:right-7 text-gray-600' />
        </form>
    )
}

export default SearchField
