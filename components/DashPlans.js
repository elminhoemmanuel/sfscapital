import React,{ useState , useEffect} from 'react'
import { CurrentInvestmentsData } from './CurrentInvestmentsData';
import Link from 'next/link';
import { FaStopwatch , FaHandHoldingUsd , FaTag } from 'react-icons/fa';
import PrimaryBtn from './PrimaryBtn';
import SinglePlan from './SinglePlan';
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'
import axios from 'axios'

const DashPlans = ({user}) => {

    const [singlePlan, setSinglePlan] = useState()
    const [plans, setPlans] = useState([])
    const [isLoading3, setisLoading3] = useState(true)
    const router = useRouter();

    useEffect(() => {

        const userToken = localStorage.getItem('userToken');
  
        axios.get(`https://api.cropsharesafrica.com/api/plan`, 
            {
                headers: {
                'Authorization': `Bearer ${userToken}`
                }}
            )
            .then((response) => {
                console.log(response);
                response.data.data.map(item=>(
                  plans.push(item)
                ))
                console.log(plans);
                
                setisLoading3(!isLoading3)
                
            }, (error) => {
            console.log(error)
        });       
                
    }, [])

    return (
        <div className='bg-white rounded '>

            <div className='border-b border-graybg px-6 py-3'>
                <h1 className='text-lg md:text-xl text-greenpri'>Available Investments</h1>
            </div>

            <div>
                {
                    isLoading3 ?
                    <div className='flex items-center justify-center py-16'>
                        <div className="spinner-page"></div>
                    </div> :

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 py-16'>
                    {
                        plans.map(item=>(
                            <button key={item.id}
                            onClick={()=>{
                                router.replace(`/dashboard/plans/single/${item.id}`)
                            }}
                            className='focus:outline-none block' >
                                <div className='block rounded-lg bg-white text-black shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
                                    <div className={`${item.css_class} rounded-t-lg bg-no-repeat bg-cover bg-center w-full h-52`}>
                                    </div>

                                    <div className='px-4 py-8'>
                                        <h1 className='text-left text-lg md:text-xl mb-5 font-bold'>{item.name}</h1>
                                        <div className='flex items-center justify-between mb-7'>
                                            <div className='flex items-center'>
                                                <div className='mr-2'>
                                                    <FaStopwatch className='text-greensec w-6 h-6' />
                                                </div>
                                                <div>
                                                    <p className='text-base font-bold'>{item.duration} Months</p>
                                                </div>

                                            </div>
                                            <div className='flex items-center'>
                                                <div className='lg:mr-2 mr-1'>
                                                    <FaHandHoldingUsd className='text-greensec w-6 h-6' />
                                                </div>
                                                <div>
                                                    <p className='text-sm md:text-base font-bold'>{item.roi}% ROI</p>
                                                </div>

                                            </div>

                                        </div>

                                        <div className='flex items-center'>
                                                <div className='mr-1 lg:mr-2'>
                                                    <FaTag className='text-greensec w-4 h-4' />
                                                </div>
                                                <div>
                                                    <p className='text-base font-bold'>NGN {item.cost_per_unit} / Unit</p>
                                                </div>

                                        </div>
                                    </div>
                                </div>
                            </button>
                        ))
                    }

                    </div>
                }
            </div>
                    
        </div>
    )
}

export default DashPlans
