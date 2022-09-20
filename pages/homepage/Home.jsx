import React from 'react'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import { useContext } from 'react';
import { UserContext } from '../../utils/ThemeContext';

function Home() {

  const user = useContext(UserContext)


    console.log(user.getUser());

  return (
    <div>
        <Header title={'Home'}/>
        <Banner />
    </div>
  )
}

export default Home