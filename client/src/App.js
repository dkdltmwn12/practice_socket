import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
//const socket = io.connect('http://localhost:4000');
import './App.css'
function App() {
  const [inputs, setInputs] = useState({
    name : '',
    room : '',
  })
  const {name, room} = inputs;
  const navigate = useNavigate();

  const onSubmitHandle = (e) => {
    e.preventDefault();
  }
  const onChangeHandle = (e) => {
    const {name, value} = e.target;
    setInputs({...inputs, [name]:value})
  }


  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">JOIN</h1>
          <form onSubmit={onSubmitHandle}>
            <input className="joinInput"
              type='text'
              name='name'
              placeholder='name'
              value={name}
              onChange={onChangeHandle}/>
            <input className="joinInput mt-20" 
              type='text'
              name='room'
              placeholder='room'
              value={room}
              onChange={onChangeHandle}/>
            <button className={'button mt-20'} onClick={() => navigate(`/chat`, {state : inputs})}>SIGN IN</button>
          </form>
      </div>
    </div>
  );
}

export default App;
