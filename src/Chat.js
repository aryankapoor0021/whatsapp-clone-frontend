import React,{useState} from 'react'
import "./Chat.css"
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import {SearchOutlined} from '@mui/icons-material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import axios from "./axios.js";

function Chat({messages}) {

	const [input,setInput]=useState("");

	const sendMessage=async (e)=>{
		e.preventDefault();
		await axios.post('/messages/new',{
			message: input,
            name: "Aryan Kapoor",
            timestamp: `${new Date().toLocaleString("en-US", {timeZone: 'Asia/Kolkata'})}`,
            recieved: false,
		})
		setInput("");
	}
	return (
		<div className="chat">
		    <div className="chat__header">
		    	<Avatar/>
 
		    	<div className="chat__headerInfo">
		    		<h3>Room Name</h3>
		    		<p>Last Seen at...</p>
		    	</div> 

		    	<div className="chat__headerRight">
		    		<IconButton>
						<SearchOutlined/>
					</IconButton>
					<IconButton>
						<AttachFileIcon/>
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
		    	</div>
		    </div>
		    <div className="chat__body">
		    {messages.map((message)=>{
		    	return <p 
		    	className={`chat__message  ${message.recieved && "chat__reciever"}`}>
		    	    <span className="chat__name">{message.name}</span>
		    	    {message.message}
		    	    <span className="chat__timestamp">
		    	        {message.timestamp}
		    	    </span>
		    	</p>
		    })}
		    </div>
		    <div className="chat__footer">
		    	<InsertEmoticonIcon/>
		    	<form>
		    	    <input 
		    	    value={input}
		    	    onChange={(e)=>setInput(e.target.value)}
		    	    type="text"
		    	    placeholder="Type a message"
		    	    />
		    	    <button type="submit"
		    	    onClick={sendMessage}
		    	    >
		    	    Send a Message
		    	    </button>
		    	</form>
		    	<MicIcon/>
		    </div>
		</div>
	)
}

export default Chat;
