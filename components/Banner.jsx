import React from 'react'
import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home';
import LayersIcon from '@mui/icons-material/Layers';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Banner() {
  return (
    <div className='banner'>
        <Link href='/homepage/Home'><HomeIcon fontSize='large'/></Link> 
        <Link href='/homepage/Actions'><LayersIcon fontSize='large'/></Link> 
        <Link href='/homepage/Profile'><AccountCircleIcon fontSize='large'/></Link>
    </div>
  )
}

export default Banner