import React, {useState, useEffect} from 'react'
import { useRouter } from "next/router"
import SearchField from './SearchField';

const Hero = () => {

    // const [imgNumber, setImgNumber] = useState(1)
    // const max = 10

    // useEffect(() => {
    //     setTimeout(() => {
    //         setImgNumber(Math.floor(Math.random() * max) + 1);
    //     }, 7000);
    // }, [ imgNumber ])

    const styling = `hero-height hero1 bg-cover bg-no-repeat flex flex-col pt-8 px-6 justify-center`
    
    return (
        <div className={styling}>
            <div className="mb-8 text-left w-full md:w-4/5 lg:w-1/2 mx-auto">
                <h1 className='text-white font-bold tracking-wide text-4xl lg:text-5xl'>The best free stock photos</h1>
                <h1 className='text-white font-bold tracking-wide text-4xl lg:text-5xl'>shared by talented creators.</h1>
            </div>
            <SearchField />
        </div>
    )
}

export default Hero
