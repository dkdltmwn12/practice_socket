import React from 'react'
import {MdOutlineOnlinePrediction, MdCancel} from 'react-icons/md'
import './InfoBar.css'
import { Link } from 'react-router-dom'
export default function InfoBar({room}) {
  return (
    <div className="infoBar">
    <div className="leftInnerContainer">
      <MdOutlineOnlinePrediction className='onlineIcon'/>
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <Link to={'/'}><MdCancel className='cancelIcon'/></Link>
    </div>
  </div>
  )
}
