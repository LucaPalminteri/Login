import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function Singup() {
  return (
    <div className='singup prehome'>

        <div className='prehome__container'>

            <h1>Sing Up</h1>

            <div className='inputs-container'>
                <input type='text' placeholder='Email'/>
                <input type='text' placeholder='Full Name'/>
                <input type='text' placeholder='Username'/>
                <input type='password' placeholder='Password'/>
            </div>
            <hr/>
            <div className='alternative'>
                <span className='or'>OR</span>
                <button className='google-btn'>
                    <Image
                        src='/google.jpg'
                        alt=''
                        width={40}
                        height={40}
                     />
                     <h3>Log In with Google</h3>
                </button>
            </div>

            <h5>privacy policy</h5>

            <Link href='/login/Login'>
                <button>Sing Up</button>
            </Link>

            <div  className='switch-prehome'>
                <p>Already have an account? </p> 
                <Link className='blue-letter' href='/login/Login'>
                    <p className='blue-letter'> Log In</p>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default Singup