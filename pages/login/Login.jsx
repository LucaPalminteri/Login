import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Login() {
  return (
    <div className='login prehome'>

        <div className='prehome__container'>
            <h1>Log In</h1>
            <div className='inputs-container'>
                <input type='text' placeholder='Username or email'/>
                <input type='password' placeholder='Password'/>
            </div>
            <Link href='/homepage/Home'>
                <button>Log In</button>
            </Link>
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
            <h4>Forgot password?</h4>

            <div className='switch-prehome'>
                <p>Dont have an account? </p> 
                <Link href='/login/Singup'>
                    <p className='blue-letter'> Sing Up</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Login