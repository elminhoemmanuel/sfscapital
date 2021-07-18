import Head from 'next/head'
import DashSinglePlan from '../../../../components/DashSinglePlan'
import DashPlanCalc from '../../../../components/DashPlanCalc'
import DashNav from '../../../../components/DashNav'
import {useRouter} from 'next/router'
import Link from 'next/link'
import React, { useState , useEffect} from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'


export default function Home() {

  const router = useRouter()
    const plan_id = router.query.id;
    const [isLoading2, setisLoading2] = useState(true);
    const [isLoading, setisLoading] = useState(true);
    const [isLoading3, setisLoading3] = useState(true);
    const [showSingle, setShowSingle] = useState(true);
    const [showCalc, setShowCalc] = useState(false);
    const [user, setUser] = useState()
    const [plan, setPlan] = useState()
    
    const openCalc = () =>{
      setShowSingle(false);
      setShowCalc(true);
    }

    const openSingle = () =>{
      setShowSingle(true);
      setShowCalc(false);
    }

    useEffect(() => {
      const userToken = localStorage.getItem('userToken');

      if(plan_id !== undefined){
          axios.get(`https://api.cropsharesafrica.com/api/plan/fetch/${plan_id}`, 
          {
              headers: {
              'Authorization': `Bearer ${userToken}`
              }}
          )
          .then((response) => {
              // console.log(response.data);
              if(!plan){
                setPlan(response.data.data);
              }
              console.log(plan)
              if(plan !== undefined){
                setisLoading3(!isLoading3)
              }
          }, (error) => {
              console.log(error)
          
          });
      } 
              
    }, [plan_id,plan])


    useEffect(() => {

        const userToken = localStorage.getItem('userToken');

        axios.get(`https://api.cropsharesafrica.com/api/user?`, 
            {
                headers: {
                'Authorization': `Bearer ${userToken}`
                }}
            )
            .then((response) => {
                // console.log(response);
                setUser(response.data)
                console.log(user);
                if(isLoading2){
                    setisLoading2(!isLoading2)
                }else{
                  if(user){
                    if(user.reg_completed===0){
                      Swal.fire({
                        title: 'Welcome Cropsharer',
                        text: 'Please complete your profile to enable you carryout other activities on our platform',
                        icon: 'info',
                        confirmButtonText: 'Go to Profile',
                        iconColor:"#90cc42",
                        confirmButtonColor:"#2D5427",
                        allowOutsideClick:false,
                      })
                      .then((response) => {
                        console.log(response);
                        if(response.isConfirmed){
                            router.replace('/dashboard/profile')
                        }
                        if(response.isDismissed){
                            router.replace('/dashboard/profile')
                        }
                      })
                    }
                  }
                  setisLoading(!isLoading)
                }
                
            }, (error) => {
            console.log(error)
        });       
                
    }, [isLoading2])

  return (
    <>
        <Head>
            <title>Cropshares | Dashboard</title>
            <meta name="keywords" content="Cropshares, agri-bussiness investment made easy"/>
            <script src="https://js.paystack.co/v1/inline.js"></script>
        </Head>

        {
          plan===undefined || user===undefined ?
          <div className='flex items-center justify-center py-16'>
            <div className="spinner-page"></div>
          </div> :
          <div className='2xl:max-w-screen-2xl 2xl:mx-auto pt-20 relative'>
            <DashNav user={user}/>
            {showSingle && <DashSinglePlan user={user} plan={plan} openCalc={openCalc}/>}
            {showCalc && <DashPlanCalc user={user} plan={plan}/>}
          </div>
        }
    </>
  )
}
