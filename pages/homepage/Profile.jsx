import React from 'react'
import Link from 'next/link'
import Banner from '../../components/Banner'
import SettingsIcon from '@mui/icons-material/Settings';

function Profile() {
  return (
    <div>
        <h1>Profile</h1>
        <Link href='/settings/Settings'><SettingsIcon /></Link>
        <br/>
        <Banner />
    </div>
  )
}

export default Profile