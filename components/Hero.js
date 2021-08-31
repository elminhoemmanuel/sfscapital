import React, {useState, useEffect} from 'react'
import { AiOutlineSearch } from "react-icons/ai";

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
                <h1 className='text-white font-bold tracking-wide text-4xl'>The best free stock photos</h1>
                <h1 className='text-white font-bold tracking-wide text-4xl'>shared by talented creators.</h1>
            </div>
            <form className="w-full md:w-4/5 lg:w-1/2 mx-auto text-left relative">
                <input type="text" name="searchQuery" required
                className="block w-full bg-bexash rounded-lg py-4 px-4 focus:outline-none placeholder-gray-600"
                placeholder="Search for free photos"
                />
                <AiOutlineSearch className='h-6 w-6 absolute top-4 right-7 text-gray-600' />
            </form>
        </div>
    )
}

export default Hero
