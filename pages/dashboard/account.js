import Head from 'next/head'
import DashHomeAccount from '../../components/DashHomeAccount'
import DashNav from '../../components/DashNav'
import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2'


export default function Home() {

  const router = useRouter();
  const [isLoading2, setisLoading2] = useState(true);
  const [isLoading, setisLoading] = useState(true);
  const [user, setUser] = useState()

  useEffect(() => {

    const userToken = localStorage.getItem('userToken');

    if (user === undefined) {
      axios.get(`https://api.cropsharesafrica.com/api/user?`,
        {
          headers: {
            'Authorization': `Bearer ${userToken}`
          }
        }
      )
        .then((response) => {
          // console.log(response);
          setUser(response.data)
          // console.log(user);
          if (user) {
            if (user.reg_completed === 0) {
              Swal.fire({
                title: 'Welcome Cropsharer',
                text: 'Please complete your profile to enable you carryout other activities on our platform',
                icon: 'info',
                confirmButtonText: 'Go to Profile',
                iconColor: "#90cc42",
                confirmButtonColor: "#2D5427",
                allowOutsideClick: false,
              })
                .then((response) => {
                  console.log(response);
                  if (response.isConfirmed) {
                    router.replace('/dashboard/profile')
                  }
                  if (response.isDismissed) {
                    router.replace('/dashboard/profile')
                  }
                })
            }
          }
          setisLoading(false)

        }, (error) => {
          console.log(error)
          setisLoading(false)
        });
    }

  }, [user])

  return (
    <>
      <Head>
        <title>Cropshares | Dashboard</title>
        <meta name="keywords" content="Cropshares, agri-bussiness investment made easy" />
      </Head>

      {
        isLoading ?
          <div className='flex items-center justify-center py-16'>
            <div className="spinner-page"></div>
          </div> :
          <div>
            {
              user ?
                <div className='2xl:max-w-screen-2xl 2xl:mx-auto pt-20 relative'>
                  <DashNav user={user} />
                  <DashHomeAccount user={user} />
                </div> :
                <div className='flex h-screen items-center justify-center text-lg'>
                  Something went wrong , Please check your internet connection and try again.
                </div>
            }
          </div>
      }
    </>
  )
}
