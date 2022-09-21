import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import EmojiObjectsRoundedIcon from '@mui/icons-material/EmojiObjectsRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Image from 'next/image';
import { useState } from 'react';

function Post() {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => setToggle(prev => !prev)

  return (
    <div className='post'>
        <div className='post__header'>
            <Image 
                className='header-img'
                src={'/anon.jpg'}
                alt=''
                width={50}
                height={50}
            />
            <h3>@username</h3>
            <MoreHorizIcon fontSize='large' className='action-icon' />
        </div>
        <div className='idea-post'> 

        </div>
        <div className='actions-post'>
            {
            toggle ? 
            <div onClick={handleToggle}>
                <EmojiObjectsRoundedIcon className='lightbulb'  fontSize='large' /> 
            </div> :
            <div onClick={handleToggle}>
                <EmojiObjectsOutlinedIcon className='lightbulb' fontSize='large' />
            </div>
            }
            <ChatBubbleOutlineRoundedIcon className='action-icon' fontSize='large' />
            <ShareRoundedIcon className='action-icon' fontSize='large' />
            <BookmarkBorderRoundedIcon className='action-icon' fontSize='large' />
        </div>
        <h6>4 HOURS AGO</h6>
    </div>
  )
}

export default Post