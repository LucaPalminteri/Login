import React from 'react'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import { useContext } from 'react';
import { UserContext } from '../../utils/ThemeContext';


function Actions() {

  const user = useContext(UserContext)

    console.log(user.getUser());
  return (
    <div>
        <Header title={'Actions'}/>
        <button onClick={user.getUser}>get n</button>
        <Banner />
    </div>
  )
}

export default Actions