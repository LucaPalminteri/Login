import React from 'react'
import Banner from '../../components/Banner'
import Header from '../../components/Header';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function Profile() {

  // const [user,setUser] = useState({})

  // const router = useRouter()
  // const {
  //   query: {fullname}
  // } = router

  // useEffect(()=> {
  //   setUser(router.query)
  // },[])
  

  return (
    <div>
        <Header title={'Profile'}/>
        <div className='profile'>
          <div className='back-image'></div>
          <div className='profile-image'></div>
          <div className='profile-info'>
            <div className='edit-ptofile-btn'>
              <Link href='/profile/Edit'>
                <button>Edit Profile</button>
              </Link>
            </div>

            <h3>{ "Name"}</h3>
            <h4>@{ "username"}</h4>
            <p>Description</p>
          </div>
        </div>
        <Banner />
    </div>
  )
}

export default Profile