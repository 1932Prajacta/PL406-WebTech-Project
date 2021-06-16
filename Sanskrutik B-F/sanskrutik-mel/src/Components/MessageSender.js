import { Avatar, Input } from '@material-ui/core'
import React, { useState } from 'react'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import SendIcon from '@material-ui/icons/Send';
import './MessageSender.css';
import { useStateValue } from '../StateProvider';
import firebase from 'firebase';
import db from '../firebase';
import axios from '../axios';
import FormData from 'form-data';


const MessageSender = () => {
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [image, setImage] = useState(null)
    const [{ user }, dispatch] = useStateValue()

    console.log(user)

    const handleChange = (e) =>  {
        
        if (e.target.files[0]) {
            debugger;
            setImage(e.target.files[0]);
        }
    }

    
    const selectFile = (e) => {
      
       const elem = document.getElementById('fileSelector')
        if(elem && document.createEvent) {
           var evt = document.createEvent("MouseEvents");
           evt.initEvent("click", true, false);
           elem.dispatchEvent(evt);
        }
       
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(image){
            const imgForm = new FormData()
            imgForm.append('file', image , image.name)
            
            axios.post("/upload/image",imgForm,{
                headers : {
                    'accept' : 'application/json',
                    'Accept-Language' : 'en-Us,en;q=0.8',
                    'Content-Type' : `multipart/form-data;boundary=${imgForm._boundary}`,
                }
            }).then((res)=>{
<<<<<<< HEAD
                // debugger;
=======
                console.log(res.data);
                debugger;
>>>>>>> e8e58f392bc4395d9601b8ac46f614b5bc62d5d9
                const postData = {
                    text : input,
                    imgName : res.data.filename,
                    user: user.displayName,
                    avatar : user.photoURL,
                    timeStamp : Date.now()
                }

                console.log(postData);
                savePost(postData);
            })
        }else{
            const postData = {
                text : input, 
                user: user.displayName,
                avatar : user.photoURL,
                timeStamp : Date.now()
            }
            savePost(postData);
        }


        setImageUrl('')
        setInput('')
        setImage(null)
    }

    const savePost = async (postData) => {
        await axios.post('/upload/post',postData)
            .then((resp)=>{
                console.log(resp);
            })
    }

    return (
        <div className="messageSender"> 
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />

                <form action="">
                    <input 
                        type="text"
                        className='messageSender__input'
                        placeholder="What's on yor mind?"
                        value={input}
                        onChange={(e)=> setInput(e.target.value)}
                    />

                    <Input 
                        id='fileSelector'
                        type="file" 
                        disableUnderline={true}
                        className="messageSender__fileSelector" 
                        onChange={handleChange} 
                        style={{display:'none'}}
                    />

                </form>
            </div>

            <div className="messageSender__bottom">

                <div className="messageSender__option" onClick={selectFile}>
                    <PhotoLibraryIcon 
                        style={{color:'green'}}
                    />
                    <h3>Photo</h3>
                   
                </div>

                <div className="messageSender__option" type="submit" onClick={handleSubmit}>
                    <SendIcon style={{color:'#EF9B0F'}} />
                    <h3>Post</h3>
                </div>

            </div>
        </div>
    )
}

export default MessageSender
