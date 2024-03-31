import React from 'react'
import './Input.css'
export default function Input({text, setText, onSubmit}) {
  return (
    <form className='form' onSubmit={onSubmit}>
        <input className='input'
            type='text'
            placeholder='Type a message..'
            value={text}
            onChange={({target : {value}}) => setText(value)}/>
        <button className='sendButton'>SEND</button>
    </form>
  )
}
