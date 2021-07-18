import React, {useState} from 'react'


const SinglePlan = ({ singlePlan, closeShowPlan }) => {

    const [units, setUnits] = useState(1)

    return (
        <div className='absolute px-8 md:px-32 w-full h-full bg-gray-700 bg-opacity-50 
        flex flex-col z-50 '>
            <div className='modal-box fixed w-4/5 lg:w-3/5 bg-white border border-gray-100 overflow-y-auto'>
                <div className='px-6 py-2 border-b border-graybg'>
                    <div className='flex items-center'>
                        <div className='mr-3'>
                            <button className='focus:outline-none block' onClick={closeShowPlan}>
                                <img className='' src="/images/ModalClose.svg" alt="close icon" />
                            </button>
                        </div>
                        <div><h1 className='text-lg text-black font-bold'></h1>{singlePlan.name}</div>
                    </div>
                </div>
                <div className='px-6 py-2 '>
                    <p className='text-sm mb-4'>Select how many units of this plan you want to purchase</p>
                    
                    <div className='mb-4'>
                            <div className='mb-1'><label htmlFor="firstname" className='text-sm'>Number of Units</label></div>
                            <input type="number" 
                                name='firstname'
                                id='firstname'
                                value={units}
                                onChange={(e)=>{setUnits(e.target.value)}}
                                placeholder='0'
                                className='placeholder-black w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'
                            />
                            
                    </div>
                    <div className='mb-4'>
                            <div className='mb-1'><label htmlFor="firstname" className='text-sm'>Unit Cost(₦)</label></div>
                            <div className='placeholder-black w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'>
                                {165525}
                            </div>
                            
                    </div>
                    <div className='mb-4'>
                            <div className='mb-1'><label htmlFor="firstname" className='text-sm'>ROI(%)</label></div>
                            <div className='placeholder-black w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'>
                                {59.5 * units}
                            </div>
                            
                    </div>
                    <div className='mb-4'>
                            <div className='mb-1'><label htmlFor="firstname" className='text-sm'>Investment Amount(₦)</label></div>
                            <div className='placeholder-black w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'>
                                {165525 * units}
                            </div>
                            
                    </div>
                    <div className='mb-4'>
                            <div className='mb-1'><label htmlFor="firstname" className='text-sm'>Returns(₦)</label></div>
                            <div className='placeholder-black w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'>
                                {98000 * units}
                            </div>
                            
                    </div>
                    <div className='mb-4'>
                            <div className='mb-1'><label htmlFor="firstname" className='text-sm'>Total Payable(₦)</label></div>
                            <div className='placeholder-black w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'>
                                {165525 * units}
                            </div>
                            
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SinglePlan
