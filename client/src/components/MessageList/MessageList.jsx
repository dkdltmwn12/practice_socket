import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from '../Message/Message';
import './MessageList.css'
export default function MessageList({messageList, name}) {
  const adminMessage = messageList.filter(message => message.user === 'admin');
  const userMessage = messageList.filter(message => message.user !== 'admin')
  return (
    <ScrollToBottom className='messages'>
      {messageList.map((message, index) => (
        <div key={index}>
            <Message message={message} adminMessage={adminMessage} userMessage={userMessage} name={name}/>
        </div>
      ))}
    </ScrollToBottom>
  )
}
