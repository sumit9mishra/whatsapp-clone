import React,{useState,useEffect}  from 'react'
import './SidebarChat.css'
import { Avatar } from '@material-ui/core'

function SidebarChat( { addNewChat } ) {
    const [seed,setSeed]=useState('');
    useEffect(()=>{
       setSeed(Math.floor(
            Math.random()*1000)
        )

    },[])
    const createChat =()=>{
        const roomName = prompt("Please enter a room name for chat");

        if (roomName){
            
        }

    }
    //if its not the addnew chat
    return !addNewChat ?(
        <div className = 'sidebarChat'>
            <Avatar src= {`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p><em>Last message..</em></p>

            </div>
            
            
        </div>
    ):(
        //than  crate a new chat
        <div onClick = {createChat} className="saidebarChat">
                <h3><i>Add new chat</i></h3>

        </div>
    );
}

export default SidebarChat
