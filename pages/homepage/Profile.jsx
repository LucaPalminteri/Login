import React from 'react'
import Banner from '../../components/Banner'
import Header from '../../components/Header';
import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../../utils/ThemeContext';

function Profile() {

  const userContext = useContext(UserContext)
  const user = userContext.getUser();

  if (typeof window !== 'undefined') {
    const token = localStorage.getItem("token");
  }

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

            <h3>{user.fullname || "Name"}</h3>
            <h4>@{user.username || "username"}</h4>
            <p>Description</p>
          </div>
        </div>
        <Banner />
    </div>
  )
}

export default Profile