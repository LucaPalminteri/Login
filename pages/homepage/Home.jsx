import React from 'react'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import Post from '../../components/Post';
import users from "../../components/infoTest/users.json"

function Home() {

  const createPosts = (cant) => {
    const arrPosts = [];
    for(let i=0;i<cant;i++) {
      arrPosts.push(
      <Post key={i} 
        username={users[i].username} 
        profile_img={users[i].profile_img}
        post_img={users[i].post_img}
        lights={users[i].lights}
      />)
    }
    return arrPosts
  }
  
  return (
    <div className='home'>
        <Header title={'Home'}/>
        {createPosts(10)}
        <Banner />
    </div>
  )
}

export default Home