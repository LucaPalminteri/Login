import React from 'react'
import Link from 'next/link'
import SettingsIcon from '@mui/icons-material/Settings';
import ReplyIcon from '@mui/icons-material/Reply';
import LogoutIcon from '@mui/icons-material/Logout';

function Header(props) {
  return (
    <div className='header'>
        {props.title == 'Settings' ? <Link href='/homepage/Profile'><ReplyIcon/></Link> : <></>}
        <h1>{props.title}</h1>
        {props.title == 'Profile' ? <Link href='/settings/Settings'><SettingsIcon /></Link> : <></>}
        {props.title == 'Settings' ? <Link href='/login/Login'><LogoutIcon/></Link> : <></>}
    </div>
  )
}

export default Header