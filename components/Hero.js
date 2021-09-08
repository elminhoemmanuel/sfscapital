import React from 'react'
import PriBtn from './PriBtn'

const Hero = () => {
    return (
        <div className="pb-8 grid grid-cols-1 md:grid-cols-2">
            <div className="pt-24 pl-6 md:pl-12 pr-6 md:pr-0">
                <div className="flex flex-col justify-center pt-12 pb-16">
                    <h1 className='text-sfsblue font-bold text-3xl md:text-4xl tracking-wider mb-2'>Our Mission is to</h1>
                    <h1 className='text-sfsblue font-bold text-3xl md:text-4xl tracking-wider mb-2'>Empower your </h1>
                    <h1 className='text-sfsblue font-bold text-3xl md:text-4xl tracking-wider mb-2'>Financial  Freedom</h1>
                    <div className="mt-5 mb-5">
                        <p className="text-sm pr-0 md:pr-40 lg:pr-60">
                            We help make dreams happen. Come to us with your dreams of a better future and we will make it happen.
                        </p>
                    </div>

                    <div>
                    <PriBtn btnType='button' btnText="Get started now" addStyle="font-bold text-base px-6 white-space-nowrap " />
                    </div>

                </div>
            </div>
            <div className="">
                <div className="pt-24 pr-6 md:pr-12 hero h-full w-full hidden md:block">

                </div>
            </div>
        </div>
    )
}

export default Hero
