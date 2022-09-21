import React from 'react'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import { useContext } from 'react';
import { UserContext } from '../../utils/ThemeContext';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

function Home() {

  const user = useContext(UserContext)


    console.log(user.getUser());

  return (
    <div>
        <Header title={'Home'}/>
        <LightbulbOutlinedIcon />
        <Banner />
    </div>
  )
}

export default Home