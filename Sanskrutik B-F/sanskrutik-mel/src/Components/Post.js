import { Avatar } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import React , { useState } from 'react';
import './Post.css'

const Post = ({profilePic,imgName,username,timeStamp,message}) => {
    console.log(timeStamp)
    return (
        <div className="post">
           <div className="post__top">
               <Avatar src={profilePic} className='post__avatar' />
               <div className="post__topInfo">
                   <h3>{username}</h3>
                   <p>{new Date(timeStamp).toUTCString().split(' ').slice(0, 5).join(' ')}
                    </p>
               </div>
           </div>

            <div className="post__bottom">
                <p>{message}</p>
                 
            </div>

            {
                imgName ? (
                    <div className="post__image">
                        <img src={`http://localhost:9000/retrieve/image/single?name=${imgName}`} alt='post-img' />
                    </div>
                ) : (
                        console.log('DEBUG >>> no image here')
                    )
            }

           <div className="post__options">      
                <div className="post__option">
                    <ThumbUpIcon/>
                    <p>Like</p>
                </div>

                <div className="post__option">
                    <ChatBubbleOutlineIcon/>
                    <p>Comment</p>
                    
                </div>

                <div className="post__option">
                    <NearMeIcon/>
                    <p>Share</p>
                </div>

                <div className="post__option">
                    <AccountCircleIcon/>
                    <ExpandMoreOutlinedIcon/>
                </div>
            </div>

        </div>
    )
}

export default Post
