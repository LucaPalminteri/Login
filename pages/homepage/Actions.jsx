import React from 'react'
import Link from 'next/link'

function Actions() {
  return (
    <div>
        <h1>Actions</h1>
        <Link href='/homepage/home'>home</Link> | 
        <Link href='/homepage/Actions'>Actions</Link> | 
        <Link href='/homepage/Profile'>Profile</Link>
    </div>
  )
}

export default Actions