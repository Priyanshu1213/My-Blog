import React from 'react'
import './button.css'
import { useNavigate } from 'react-router-dom'

export default function Button() {

  const Navigate= new useNavigate()
  function All(){
    Navigate('/')
  }
  return (
    <div className="myBtnContainer">
        <button className="btn" onClick={All}> All</button>
        <button className="btn"  > post</button>
        <button className="btn"  > travel</button>
        <button className="btn"  > commercial</button>
        
      </div>

   

  )
}
