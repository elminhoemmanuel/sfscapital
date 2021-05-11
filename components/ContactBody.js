import React from 'react'
import SectionHeader from './SectionHeader'
import { footerObjTwo} from './FooterData'
import Link from 'next/link'

const ContactBody = () => {

    return (
        <div className='px-6 md:px-10 lg:px-20 pt-40 pb-16 bg-cultured'>
            <div className='mb-3'>
                <h1 className='text-center text-3xl md:text-4xl text-greensec'>Contact Us</h1>
            
            </div>

            <div className='mb-16'>
                <p className="text-black text-sm text-center">
                    Please contact us using this form if you have any questions or comments about Cropshares.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                        <h1 className='font-bold text-xl mb-6 text-greenpri'>Helplines</h1>

                        <p className='text-sm mb-3'>Our phone lines will be on
                            from 8:30am to 4pm, Mondays to
                            Fridays
                        </p>
                        <a className='hover:text-greenpri block mb-1 text-sm' href="tel:+23409136553953">+23409136553953</a>
                        <a className='hover:text-greenpri block mb-1 text-sm' href="tel:+23409136553953">+23409136553953</a>

                    </div>
                    
                    <div>
                        <h1 className='font-bold text-xl mb-6 text-greenpri'>Email</h1>

                        <p className='text-sm mb-3'>All official correspondence and
                            enquiries should be forwared to;
                        </p>
                        <a className='hover:text-greenpri block mb-2 text-sm' href="mailto:cropsharesafrica@gmail.com">cropsharesafrica@gmail.com</a>

                    </div>

                    <div>
                        <h1 className='font-bold text-xl mb-6 text-greenpri'>Office Address</h1>

                        <p className='text-sm mb-3'>Suite 007, First Floor, Future View Plaza, opposite FCMB, Sabo Tasha, Kaduna State.
                        </p>

                    </div>

                    <div>
                        <h1 className='font-bold text-xl mb-6 text-greenpri'>Connect</h1>

                        <div className='flex items-center justify-start'>
                            {footerObjTwo.map(item =>{
                                return <Link key={item.id} href={item.url} className='block'>
                                            <a className='hover:text-greenpri block mb-2 mr-4'>
                                                {item.image}
                                            </a>
                                        </Link>
                                    
                            })}
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default ContactBody
