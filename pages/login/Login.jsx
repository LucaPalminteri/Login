import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { supabase } from "../../utils/dbconnection";

function Login() {

    const [users, setUsers] = useState([])
    const [inputs,setInputs] = useState({username:"",password:""})

    useEffect(() => {
        fetchUsers();
      }, []);

    async function fetchUsers() {
        const { data } = await supabase.from("users").select();
        setUsers(data);
      }

    const handleInput = (e,i)=> {
      switch(i){
          case 1: setInputs(prev => ({...prev, username: e}))
          break;
          case 2: setInputs(prev => ({...prev, password: e}))
          break;
      }
    }

    const validationInputs = ()=>{
        if (inputs.username == "" || inputs.password == "") return ;
        logIn()
    }

    const logIn = () => {
        users.map(user => {
            if((inputs.username == user.username || inputs.email == user.email) && inputs.password == user.password) window.location.href = "/homepage/Home";
            else console.log("not fine");
        })
    }

    console.log(inputs);

  return (
    <div className='login prehome'>

        <div className='prehome__container'>
            <h1>Log In</h1>
            <div className='inputs-container'>
                <input 
                    type='text' 
                    placeholder='Username or email' 
                    value={inputs.email} 
                    onChange={(e, i) => handleInput(e.target.value, 1)}
                />
                <input 
                    type='password' 
                    placeholder='Password' 
                    value={inputs.email} 
                    onChange={(e, i) => handleInput(e.target.value, 2)}
                />
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