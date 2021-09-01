import React, {useState, useEffect} from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/router"
import { useDispatch, useSelector } from 'react-redux';

const SearchField = () => {

    const [searchQuery, setSearchQuery] = useState("")
    const { page } = useSelector((state) => state.search);
    const router = useRouter();

    const submitSearch = (e) =>{
        e.preventDefault();
        router.push(`/search?value=${searchQuery}`);
    }

    return (
        <form
            onSubmit={submitSearch}
            className={
                page === "search" ? "w-full mx-auto text-left relative" :
                "w-full md:w-4/5 lg:w-1/2 mx-auto text-left relative"
            }>
            <input type="text" name="searchQuery" required
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full bg-bexash rounded-lg py-2 md:py-4 px-2 md:px-4 focus:outline-none placeholder-gray-600"
                placeholder={ page === "search" ? "" : "Search for free photos"}
            />
            <AiOutlineSearch className='h-6 w-6 absolute top-2 md:top-4 right-4 md:right-7 text-gray-600' />
        </form>
    )
}

export default SearchField
