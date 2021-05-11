import React from 'react'
import SectionHeader from './SectionHeader'
import { teamObjOne } from './TeamData';


const Team = () => {

    const textColor = 'text-greensec';

    const headerText = 'Our Team'

    return (
        <div className='px-6 md:px-10 lg:px-20 py-24 bg-cultured'>
            <SectionHeader headerText={headerText} textColor={textColor}/>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center lg:text-left'>
                {
                    teamObjOne.map(item =>(
                        <div className='text-center lg:text-left' key={item.id}>
                            <div className='flex items-center justify-center lg:justify-start lg:items-start'>
                                <img className='w-64 h-64 rounded-tl-2xl rounded-r-2xl ' src={item.img} alt="Team member picture" />
                            </div>
                            <div className='pt-4'>
                                <h1 className='text-lg font-bold text-black'>{item.name}</h1>
                                <p className='text-sm font-bold text-black'>{item.position}</p>

                            </div>

                        </div>
                    ))
                }

            </div>
            
        </div>
    )
}

export default Team
