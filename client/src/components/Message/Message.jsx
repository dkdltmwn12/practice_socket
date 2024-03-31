import React from 'react'
import './Message.css'
//{adminMessage, userMessage, message, message : {user, text}, name}
export default function Message({message, message : {user, text}, name}) {
    let isSentByCurrentUser = false;
    let isSentByAdmin = false;
    let trimmedName = name.trim().toLowerCase();

    if(user === trimmedName) {
        isSentByCurrentUser = true;
    }

    if(user === 'admin') {
        isSentByAdmin = true;
    }

  return (
    <>
    {isSentByCurrentUser
    ? (
        <div className='messageContainer justifyEnd '>
            <p className='sentText pr-10'>{trimmedName}</p>
            <div className='messageBox backgroundYellow'>
                <p className='messageText colorDark'>{text}</p>
            </div>
        </div>
    )
    : isSentByAdmin
    ? (
        <div className='messageContainer justifyCenter'>
            <div >
                <p className='messageText colorDark'>{text}</p>
            </div>
        </div>
    )
    : 
    (
        <div className='messageContainer justifyStart'>
        <div className='messageBox backgroundLight'>
            <p className='messageText colorDark'>{text}</p>
        </div>
        <p className='sentText pl-10'>{user}</p>
    </div>
    )}
    </>
  )
}
