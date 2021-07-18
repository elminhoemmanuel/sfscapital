import Head from 'next/head'
import DashHomeProfile from '../../components/DashHomeProfile'
import DashNav from '../../components/DashNav'
import {useRouter} from 'next/router'
import Link from 'next/link'
import React, { useState , useEffect} from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'



export default function Home() {

  const router = useRouter();
    const [isLoading2, setisLoading2] = useState(true);
    const [isLoading, setisLoading] = useState(true);
    const [user, setUser] = useState()

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
        </Head>

        {
          isLoading && isLoading2 ?
          <div className='flex items-center justify-center py-16'>
            <div className="spinner-page"></div>
          </div> :
          <div className='2xl:max-w-screen-2xl 2xl:mx-auto pt-20 relative'>
            <DashNav user={user}/>
            <DashHomeProfile user={user}/>
          </div>
        }
    </>
  )
}
