import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import router, { useRouter } from "next/router";
import { setPage, fetchSearchPictures } from '../redux/actions/search'
import SearchDisplay from '../components/SearchDisplay';
import Pagination from '../components/Pagination';


export default function Search() {

    const { query } = useRouter(null);
    const [field, setField] = useState(null)
    const dispatch = useDispatch();
    const { page, queryValue, currentPage } = useSelector((state) => state.search);

    useEffect(() => {
        dispatch(setPage("search", () => { }));
        let data = {}
        data.queryField = queryValue;
        data.pageValue = currentPage;
        dispatch(fetchSearchPictures(data, () => { }));
    }, [])

    useEffect(() => {
        let data = {}
        data.queryField = queryValue;
        data.pageValue = currentPage;
        dispatch(fetchSearchPictures(data, () => { }));
    }, [ queryValue, currentPage ])

    useEffect(() => {
        setField(query.value)
    }, [query])

    // console.log(field);

    return (
        <>
            <Head>
                <title>Bexels | Search</title>
                <meta name="keywords" content="Bexels" />
            </Head>

            <div className='pt-40 pb-20'>
                <div>
                    <p className="text-2xl md:text-4xl text-black text-center">Search results for {queryValue}</p>
                </div>

                <div className="py-8 px-3 md:px-6">
                    <SearchDisplay />
                </div>

                <div className="py-4 px-3 md:px-6">
                    <Pagination />
                </div>
                
            </div>
        </>
    )
}
