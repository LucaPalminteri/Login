import React from 'react'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import Post from '../../components/Post';

function Home() {

  const createPosts = (cant) => {
    const arrPosts = [];
    for(let i=0;i<cant;i++) {
      arrPosts.push(<Post key={i}/>)
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