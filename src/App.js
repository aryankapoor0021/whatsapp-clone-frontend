import React,{useEffect,useState} from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Pusher from "pusher-js";
import axios from './axios.js';

function App() {

  const [messages,setMessages]=useState([]);

  useEffect(()=>{
    axios.get('/messages/sync')
      .then((response)=>{
        setMessages(response.data);
      })
  },[]);

  useEffect(()=>{
    const pusher = new Pusher('ce87683053603cd8cb95', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMsg) {
      //alert(JSON.stringify(newMsg));
      setMessages([...messages,newMsg]);
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  },[messages]);

  console.log(messages);
  return (

    <div className="app">
      <div className="app__body">
        <Sidebar/>
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
