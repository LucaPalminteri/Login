import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import EmojiObjectsRoundedIcon from '@mui/icons-material/EmojiObjectsRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Image from 'next/image';
import { useState } from 'react';


function Post({username,profile_img,post_img,lights}) {

    const [toggleLightBulb, setToggleLightBulb] = useState(false)
    const [toggleBookmark, setToggleBookmark] = useState(false)

    const [auxCont,setAuxCont] = useState(0)
    const [showAux,setShowAux] = useState(false)

    if (toggleLightBulb) lights++

    const handleToggleLightBulb = () => setToggleLightBulb(prev => !prev)
    const handleBookmark = () => setToggleBookmark(prev => !prev)

    const handlePost = () => {
        setAuxCont(prev=> prev+1)
        if(auxCont == 1) {
            setToggleLightBulb(prev => !prev)
            setShowAux(true)
        }
        setTimeout(()=>{
            if(auxCont != 1) setAuxCont(0)
            setShowAux(false)
        },400)
        console.log(auxCont);
    }


  return (
    <div className='post'>
        <div className='post__header'>
            {/* <Image 
                className='header-img'
                src={profile_img}
                alt=''
                width={50}
                height={50}
            /> */}
            <div className='header-img' style={{width:50,height:50,backgroundImage: `url(${profile_img})`, backgroundSize: 'cover'}}></div>
            <h3>@{username}</h3>
            <MoreHorizIcon fontSize='large' className='action-icon' />
        </div>
        <div onClick={handlePost} className='idea-post' style={{backgroundImage: `url(${post_img})`, backgroundSize: 'cover'}}>
            {toggleLightBulb && showAux &&<EmojiObjectsRoundedIcon className='lightbulb'  fontSize='large' /> }
        </div>
        <div className='actions-post'>
            {
            toggleLightBulb ? 
            <div onClick={handleToggleLightBulb}>
                <EmojiObjectsRoundedIcon className='lightbulb'  fontSize='large' /> 
            </div> :
            <div onClick={handleToggleLightBulb}>
                <EmojiObjectsOutlinedIcon className='lightbulb' fontSize='large' />
            </div>
            }
            <ChatBubbleOutlineRoundedIcon className='action-icon' fontSize='medium' />
            <ShareRoundedIcon className='action-icon' fontSize='medium' />

            {
                toggleBookmark ?
                <div onClick={handleBookmark} className='action-icon' >
                    <BookmarkIcon fontSize='medium' /> 
                </div> :
                <div className='action-icon' onClick={handleBookmark}>
                    <BookmarkBorderRoundedIcon fontSize='medium'/>
                </div>
            }
        </div>
        <h6 style={{fontSize: 16}}>{lights} Lights</h6>
        <h6>4 HOURS AGO</h6>
    </div>
  )
}

export default Post