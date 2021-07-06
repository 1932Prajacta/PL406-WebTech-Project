import React, { useEffect,useState } from 'react';
import Post from './Post'
import axios from '../axios'
import Pusher from 'pusher-js'
import './Profile.css';
import { useStateValue } from '../StateProvider'


const pusher = new Pusher('76a2a535c2203dc6eeff', {
    cluster: 'ap2'
});

function Profile(){

    const [{user},dispatch] = useStateValue()
    const [profilePic, setProfilePic] = useState('')
    const [postsData, setPostsData] = useState([])

    const syncFeed = () => {
        axios.get('/retrieve/posts')
            .then((res)=>{
                setPostsData(res.data);
            })
    }

    useEffect(() => {
        const channel = pusher.subscribe('posts');
        channel.bind('inserted', function(data) {
            syncFeed()
        });
    }, [])  
    
    useEffect(() => {
        syncFeed()
    }, [])
    const element = [];
    postsData.forEach(dataentry)
    function dataentry(entry) {
        if(user.displayName==entry.user){
            element.push(<Post 
                profilePic={entry.avatar}
                message={entry.text}
                timeStamp={entry.timeStamp}
                imgName={entry.imgName}
                username={entry.user}
            />)
        }
    }
    return(
        <div className="profile">
            <div className="profileDescription">
                <img src={user.photoURL}></img>
                <div className="profileDescription2">
                    <h1 className="displayname">{user.displayName}</h1>
                    <hr/>
                    <h2 className="bio">User Bio</h2>
                    <h2 className="bio">Group Catagory</h2>
                    <div className="profileDescription3">
                        {/* <h1>Posts {element.length}</h1> */}
                    </div>
                </div>
                
            </div>
            {element.length == 0 &&
                <h3>No posts yet</h3>
            }
            {element}
        </div>
    )
}

export default Profile;