import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react';
import { supabase } from "../../utils/dbconnection";

function Singup() {

    const [users, setUsers] = useState([])
    const email = useRef()
    const fullName = useRef()
    const username = useRef()
    const password = useRef()

    useEffect(() => {
        fetchUsers();
      }, []);

    async function fetchUsers() {
        const { data } = await supabase.from("users").select();
        setUsers(data);
      }

    async function createUser() {
    if (validationInputs() == false) {
        alert('Wrong data input')
        return;
    };
    await supabase
      .from("users")
      .insert(
        [{
            fullname: fullName.current.value,
            username: username.current.value,
            email: email.current.value,
            password: password.current.value
          },],
        { upsert: false }
      );
      email.current.value = ""; fullName.current.value = ""; username.current.value= ""; password.current.value = ""
      window.location.href = "/";
    } 

    const validationInputs = ()=>{
        if (email.current.value == "" || fullName.current.value == "" || username.current.value == "" || password.current.value  == "") return false;
        return true;
    }

  return (
    <div className='singup prehome'>
        <div className='prehome__container'>

            <h1>Sing Up</h1>

            <div className='inputs-container'>
                <input ref={email} type='email' placeholder='Email' />
                <input ref={fullName} type='text' placeholder='Full Name' />
                <input ref={username} type='text' placeholder='Username' />
                <input ref={password} type='password' placeholder='Password' />
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

            <button onClick={createUser}>Sing Up</button>

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