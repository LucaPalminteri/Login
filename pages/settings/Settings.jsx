import React from 'react'
import Link from 'next/link'
import ReplyIcon from '@mui/icons-material/Reply';
import LogoutIcon from '@mui/icons-material/Logout';

function Settings() {
  return (
    <div>
        <h1>Settings</h1>
        <Link href='/homepage/Profile'><ReplyIcon/></Link> 
        <Link href='/login/Login'><LogoutIcon/></Link> Sing Out
    </div>
  )
}

export default Settings