import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { io } from 'socket.io-client';
import './Chat.css'
import InfoBar from '../components/InfoBar/InfoBar';
import Input from '../components/Input/Input';
import MessageList from '../components/MessageList/MessageList';
const socket =  io.connect('http://localhost:4000')
export default function Chat() {
  const {state : {name, room}} = useLocation();
  const [text, setText] = useState('');
  const [chatList, setChatList] = useState([]);
  const [users, setUser] = useState('')


  useEffect(() => {

    
    socket.emit('join', {name, room}, () => {
    });

    return () => {
      // socket.emit('disconnected');
      // socket.off()
      socket.disconnect();
    }

  }, [ name, room]);

  useEffect(() => {
    socket.on('message', (message) => {
    setChatList([...chatList, message])
    })
    // socket.on('roomData', ({users}) => {
    //   console.log(users);
    //   setUser(users)
    // })
  }, [chatList])


  const onSubmitHandle = e => {
    e.preventDefault();
    socket.emit('sendMessage', text, () => setText(''))
    
  }

  // const onChangeHandle = e => setText(e.target.value);
  return (
    <div className='outerContainer'>
      <div className='container'>
        <InfoBar room={room}/>
        <MessageList messageList={chatList} name={name}/>
        <Input text={text} setText={setText} onSubmit={onSubmitHandle}/>
      </div>
    </div>
  )
}
