
const TestimonialCard = ({ testimonialObj }) => {
    return ( 
        <div className=''>
            <div className=' flex items-center justify-center '>
                    <div className=' '>
                        <img className=' object-cover relative z-30 rounded-full w-24 h-24 shadow-xl border-2 border-gray-200' src="/images/passport.jpg" alt="testifier picture"/>
                    </div>
            </div>
            <div className='shadow-xl px-4 md:px-6 py-10 bg-white follower'>
                <div className='flex flex-col w-full  py-8'>
                    <div className='mb-2 text-sm text-didallatitle'><p>{testimonialObj.text}</p></div>
                    <div className='mb-2 text-sm'><p className='font-bold'>{testimonialObj.name}</p></div>
                    <div className='mb-2 text-sm text-didallabody'><p className=''>{testimonialObj.location}</p></div>
                </div>
            </div>
        </div>
     );
}
 
export default TestimonialCard;