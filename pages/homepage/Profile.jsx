import React from 'react'
import Link from 'next/link'
import Banner from '../../components/Banner'

function Profile() {
  return (
    <div>
        <h1>Profile</h1>
        <Link href='/settings/Settings'>Settings</Link>
        <br/>
        <Banner />
    </div>
  )
}

export default Profile