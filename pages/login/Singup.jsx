import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { supabase } from "../../utils/dbconnection";

function Singup() {

    const [users, setUsers] = useState([])
    const [inputs,setInputs] = useState({email:"",fullName:"",username:"",password:""})

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
            fullname: inputs.fullName,
            username: inputs.username,
            email: inputs.email,
            password: inputs.password
          },],
        { upsert: false }
      );
      setInputs({email:"",fullName:"",username:"",password:""})
      window.location.href = "/";
    } 

    const handleInput = (e,i)=> {
        switch(i){
            case 1: setInputs(prev => ({...prev, email: e}))
            break;
            case 2: setInputs(prev => ({...prev, fullName: e}))
            break;
            case 3: setInputs(prev => ({...prev, username: e}))
            break;
            case 4: setInputs(prev => ({...prev, password: e}))
            break;
        }
    }

    const validationInputs = ()=>{
        if (inputs.email == "" || inputs.fullName == "" || inputs.username == "" || inputs.password == "") return false;
        return true;
    }

  return (
    <div className='singup prehome'>

        <div className='prehome__container'>

            <h1>Sing Up</h1>

            <div className='inputs-container'>
                <input 
                    type='email' 
                    placeholder='Email' 
                    value={inputs.email} 
                    onChange={(e, i) => handleInput(e.target.value, 1)}
                />
                <input 
                    type='text' 
                    placeholder='Full Name' 
                    value={inputs.fullName} 
                    onChange={(e, i) => handleInput(e.target.value, 2)}
                />
                <input 
                    type='text' 
                    placeholder='Username' 
                    value={inputs.username} 
                    onChange={(e, i) => handleInput(e.target.value, 3)} 
                />
                <input 
                    type='password' 
                    placeholder='Password' 
                    value={inputs.password} 
                    onChange={(e, i) => handleInput(e.target.value, 4)} 
                />
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