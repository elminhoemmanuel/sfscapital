import React from 'react'
import Link from 'next/link'
import SectionHeader from './SectionHeader'

const CTA = () => {

    const headerColor= "text-white"

    const headerText = 'What else do you need?'

    return (
        <div className='text-white px-6 md:px-10 lg:px-20 py-16 bg-gradient-to-br from-greenpri to-greensec'>
            <SectionHeader headerText={headerText} textColor={headerColor}/>
            <p className='text-center'>Start earning returns by investing in commercial and mechanized farming now!</p>

            <div className='pt-4 flex items-center justify-center'>

                    <Link className='block ' href="/register">
                        <a className='text-lg text-center block rounded-full whitespace-nowrap w-4/5 md:w-3/5 lg:w-1/5 py-4 px-12 text-white border-2 border-greenpri bg-greenpri hover:bg-greensec hover:border-greensec font-bold'>
                            Get Started
                        </a>
                    </Link>

            </div>
            
        </div>
    )
}

export default CTA
