import Link from 'next/link'
import React from 'react'

function Singup() {
  return (
    <div>
        <h1>Singup</h1>

        <div>
            <input type='text' placeholder='Email'/>
            <input type='text' placeholder='Full Name'/>
            <input type='text' placeholder='Username'/>
            <input type='password' placeholder='Password'/>
        </div>
        <hr/>
        <div>
            <h3>or login with google</h3>
        </div>

        <h5>privacy policy</h5>

        <Link href='/login/Login'>
            <button>Sing Up</button>
        </Link>

        <div>
            <p>Already have an account? </p> 
            <Link href='/login/Login'>Log  In</Link>
        </div>

    </div>
  )
}

export default Singup