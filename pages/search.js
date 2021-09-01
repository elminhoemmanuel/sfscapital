import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import router, { useRouter } from "next/router";
import { setPage } from '../redux/actions/search'


export default function Search() {

    const { query } = useRouter(null);
    const [field, setField] = useState(null)
    const dispatch = useDispatch();
    const { page } = useSelector((state) => state.search);

    useEffect(() => {
        dispatch(setPage("search", () => { }));
    }, [])

    useEffect(() => {
        setField(query.value)
    }, [query])

    console.log(field);

    return (
        <>
            <Head>
                <title>Bexels | Search</title>
                <meta name="keywords" content="Bexels" />
            </Head>

            <div className='pt-24 pb-20'>
                Search
            </div>
        </>
    )
}
