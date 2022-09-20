import React from 'react'
import Link from 'next/link'

function Settings() {
  return (
    <div>
        <h1>Settings</h1>
        <Link href='/homepage/Profile'>Go back to my profile</Link> |
        <Link href='/login/Login'>Sing Out</Link>
    </div>
  )
}

export default Settings