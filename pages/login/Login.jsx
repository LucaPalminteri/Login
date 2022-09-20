import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react';
import { supabase } from "../../utils/dbconnection";

function Login() {

    const [users, setUsers] = useState([])
    const username = useRef()
    const password = useRef()

    useEffect(() => {
        fetchUsers();
      }, []);

    async function fetchUsers() {
        const { data } = await supabase.from("users").select();
        setUsers(data);
      }

    const validationInputs = ()=>{
        if (username.current.value == "" || password.current.value == "") return ;
        logIn()
    }

    const logIn = () => {
        users.map(user => {
            if((username.current.value == user.username || username.current.value == user.email) && password.current.value == user.password) window.location.href = "/homepage/Home";
            else console.log("not fine");
        })
    }

  return (
    <div className='login prehome'>

        <div className='prehome__container'>
            <h1>Log In</h1>
            <div className='inputs-container'>
                <input ref={username} type='text' placeholder='Username or email' />
                <input ref={password} type='password' placeholder='Password' />
            </div>
            <button onClick={validationInputs}>Log In</button>
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