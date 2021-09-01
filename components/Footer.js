import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className="text-center text-sm py-8">
            <div className="w-4/5 mx-auto border-t-2 border-gray-300  py-3">
                <p>All pictures gotten from <Link href="https://www.pexels.com/"><a target="_blank">Pexels</a></Link></p>
                <p>©Copyright 2021</p>
            </div>
            
        </div>
    )
}

export default Footer
