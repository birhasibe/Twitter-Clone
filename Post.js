import React from 'react';
import './Post.css';
import {Avatar} from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import { ChatBubbleOutline } from '@mui/icons-material';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post(){
   
    return(
        <div className='post'>
        <div className='post__avatar'> 
        <Avatar src={Avatar}/>
        </div>
        <div className='post__body'>
        <div className='post__header'>
            <div className='post__headerText'>
            <h3>
                Rafeh Qazi <span className='post__header__speacial'>
                <VerifiedIcon className='post__badge'/>
                </span>
            </h3>
            </div>
            <div className='post__headerDescription'>
                <p>
                Challenge you to build a Twitter Clone with React
                </p>
            </div>
        </div>
        <img src='https://media.giphy.com/media/lz67zZWfWPsWnuGH0s/giphy.gif' alt='media'/>
        <div className='post__footer'>
            <ChatBubbleOutline fontSize='small'/>
            <RepeatIcon fontSize='small'/>
            <FavoriteBorderIcon fontSize='small'/>
            <PublishIcon fontSize='small'/>
        </div>
        </div>
        </div>
    )
}

export default Post