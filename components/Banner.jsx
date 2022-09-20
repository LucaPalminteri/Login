import React from 'react'
import Link from 'next/link'

function Banner() {
  return (
    <div>
        <Link href='/homepage/Home'>Home</Link> | 
        <Link href='/homepage/Actions'>Actions</Link> | 
        <Link href='/homepage/Profile'>Profile</Link>
    </div>
  )
}

export default Banner