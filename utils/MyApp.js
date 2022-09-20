import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Actions from '../pages/homepage/Actions'
import Home from '../pages/homepage/Home'
import Profile from '../pages/homepage/profile'
import Login from '../pages/login/Login'
import Singup from '../pages/login/singup'
import Edit from '../pages/profile/Edit'
import Settings from '../pages/settings/Settings'
import { store } from '../src/app/store'
import { Provider } from 'react-redux'

function MyApp() {
  return (
    <Provider store={store}>
        <Banner/>
        <Header/>
        <Actions/>
        <Home/>
        <Profile/>
        <Login/>
        <Singup/>
        <Edit/>
        <Settings/>
    </Provider>
  )
}

export default MyApp