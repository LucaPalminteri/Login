import React from 'react'
import Link from 'next/link'

function Login() {
  return (
    <div className='login'>
        <h1>Login</h1>
        <div>
            <input type='text' placeholder='Username or email'/>
            <input type='password' placeholder='Password'/>
        </div>
        <Link href='/homepage/Home'>
            <button>Log In</button>
        </Link>
        <hr/>
        <div>
            <h3>or login with google</h3>
        </div>
        <h4>Forgot password?</h4>

        <div>
            <p>Dont have an account? </p> 
            <Link href='/login/Singup'>Sing Up</Link>
        </div>
            
        
        <br/>
        
    </div>
  )
}

export default Login