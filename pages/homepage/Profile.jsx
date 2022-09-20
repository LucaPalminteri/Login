import React from 'react'
import Link from 'next/link'

function Profile() {
  return (
    <div>
        <h1>Profile</h1>
        <Link href='/settings/Settings'>Settings</Link>
        <br/>
        <Link href='/homepage/Home'>Home</Link> | 
        <Link href='/homepage/Actions'>actions</Link> | 
        <Link href='/homepage/Profile'>Profile</Link>
    </div>
  )
}

export default Profile