import {FaTwitter, FaFacebook, FaYoutubeSquare, FaInstagramSquare} from 'react-icons/fa'

export const footerObjOne = [
    {
        id:1,
        value:'Plans-catalogue',
        link:'/plans'
    },
    {
        id:2,
        value:'Terms and conditions',
        link:'/terms'
    },
    {
        id:3,
        value:'Privacy policy',
        link:'/privacy'
    },
    {
        id:4,
        value:'Contact Us',
        link:'/contact'
    },
    {
        id:5,
        value:'FAQs',
        link:'/faqs'
    },
]

export const footerObjTwo = [
    {
        id:1,
        value:'TwitterLogo',
        url:'/',
        image:<FaTwitter className='text-greenpri w-10 h-10'/>
    },
    {
        id:2,
        value:'FacebookLogo',
        url:'/',
        image:<FaFacebook className='text-greenpri w-10 h-10'/>
    },
    {
        id:3,
        value:'InstagramLogo',
        url:'/',
        image:<FaInstagramSquare className='text-greenpri w-10 h-10'/>
    },
    {
        id:4,
        value:'YoutubeLogo',
        url:'/',
        image:<FaYoutubeSquare className='text-greenpri w-10 h-10'/>
    }
]