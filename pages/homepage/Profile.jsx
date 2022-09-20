import React from 'react'
import Link from 'next/link'
import Banner from '../../components/Banner'
import SettingsIcon from '@mui/icons-material/Settings';
import Header from '../../components/Header';

function Profile() {
  return (
    <div>
        <Header title={'Profile'}/>
        <Link href='/settings/Settings'><SettingsIcon /></Link>
        <br/>
        <Banner />
    </div>
  )
}

export default Profile