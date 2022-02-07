import React from 'react'
import "./Sidebar.css";
import SidebarChat from "./SidebarChat.js";
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {SearchOutlined} from '@mui/icons-material';

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar__header">
			   <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQGSjjRIZY2XWg/profile-displayphoto-shrink_800_800/0/1627012870524?e=1649289600&v=beta&t=2565sfqItZhwiFxWhfOg3yI_BprgPmzNjKdML_t75PQ"/> 
				<div className="sidebar__headerRight">
					<IconButton>
						<DonutLargeIcon/>
					</IconButton>
					<IconButton>
						<ChatIcon/>
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>	
			</div>

			<div className="sidebar__search">
				<div className="sidebar__searchContainer">
					<SearchOutlined/>
					<input 
					placeholder="Search or Start a new Chat" 
					type="text"/>
				</div>
			</div>

			<div className="sidebar__chats">
				<SidebarChat/>
				<SidebarChat/>
				<SidebarChat/>
			</div>
		</div>
	)
}

export default Sidebar;