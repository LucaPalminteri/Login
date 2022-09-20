import React from 'react'
import Banner from '../../components/Banner'
import Header from '../../components/Header';
import Image from 'next/image';

function Profile() {
  return (
    <div>
        <Header title={'Profile'}/>
        <div className='profile'>
          <div className='back-image'></div>
          <div className='profile-image'></div>
          <div className='profile-content'></div>
        </div>
        <Banner />
    </div>
  )
}

export default Profile