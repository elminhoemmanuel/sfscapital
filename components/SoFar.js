import React from 'react'
import SectionHeader from './SectionHeader'

const SoFar = () => {

    const textColor = 'text-greensec';

    const headerText = 'Our Numbers so far'

    return (
        <div className='px-6 md:px-10 lg:px-20 py-24 bg-white'>
            <SectionHeader headerText={headerText} textColor={textColor}/>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
                <div className='shadow-lg p-12 bg-white rounded'>
                    <h1 className='text-3xl font-black text-center text-greensec'>300</h1>
                    <p className='text-sm md:text-base text-center'>Investors served</p>
                </div>
 
                <div className='shadow-lg p-12 bg-white rounded'>
                    <h1 className='text-3xl font-black text-center text-greensec'>770+</h1>
                    <p className='text-sm md:text-base text-center'>Hectares farmed</p>
                </div>

                <div className='shadow-lg p-12 bg-white rounded'>
                    <h1 className='text-3xl font-black text-center text-greensec'>3000</h1>
                    <p className='text-sm md:text-base text-center'>Metric tons of maize produced</p>
                </div>

                <div className='shadow-lg p-12 bg-white rounded'>
                    <h1 className='text-3xl font-black text-center text-greensec'>500+</h1>
                    <p className='text-sm md:text-base text-center'>Jobs created</p>
                </div>

            </div>

            
        </div>
    )
}

export default SoFar
