import React from 'react'
import SectionHeader from './SectionHeader';

const Brands = () => {

    const textColor = 'text-greensec';

    const headerText = 'Our Partners'

    return (
        <div className='px-6 md:px-10 lg:px-20 py-16 bg-white'>
            <SectionHeader headerText={headerText} textColor={textColor}/>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 md:gap-32'>
                <div className='flex justify-center items-center'>
                    <img className='w-40 h-32' src="/images/fcmb.png" alt="fcmb logo"/>
                </div>

                <div className='flex justify-center items-center'>
                    <img className='w-52 h-32' src="/images/sterling.png" alt="sterling logo"/>
                </div>

                <div className='flex justify-center items-center'>
                    <img className='w-52 h-32' src="/images/royallogo.jpg" alt="royal exchange logo"/>
                </div>

                <div className='flex justify-center items-center'>
                    <img className='w-40 h-40' src="/images/nirsal.png" alt="nirsal logo"/>
                </div>

            </div>
            
        </div>
    )
}

export default Brands
