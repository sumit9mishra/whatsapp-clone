import React, { useState, useEffect } from 'react';
import './Chat.css';
import { Avatar, IconButton} from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons'
import AttachmentIcon from '@material-ui/icons/Attachment';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Chat() {
    const [seed,setSeed]= useState("")
    useEffect(()=>{
        setSeed(Math.floor(Math.random()*1000));

    },[])
    return (
        <div className="chat">

            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        < AttachmentIcon/>
                    </IconButton>
                    <IconButton>
                        < MoreHorizIcon/>
                    </IconButton>


                </div>

            </div>
            <div className="chat__body">
                
                <p className="chat__message"> 
                 <span className="chat__name">Sumit</span>
                    how u doiiiiiiing.....
                    <span className="chat__timestamp">
                        4:00 Am
                    </span>
                    
                    
                </p>
                <p className="chat__message chat__reciever ">
                    <span className="chat__name">Sumit</span>
                    Awesome..........
                    <span className="chat__timestamp">
                        4:100 Am
                    </span>


                </p>
                

            </div>
            <div className="chat__footer">

            </div>
            
        </div>
    )
}

export default Chat
