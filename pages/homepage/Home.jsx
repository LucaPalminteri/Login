import React from 'react'
import Link from 'next/link'

function Home() {
  return (
    <div>
        <h1>Home</h1>
        <Link href='/homepage/Home'>Home</Link> | 
        <Link href='/homepage/Actions'>actions</Link> | 
        <Link href='/homepage/Profile'>Profile</Link>

    </div>
  )
}

export default Home