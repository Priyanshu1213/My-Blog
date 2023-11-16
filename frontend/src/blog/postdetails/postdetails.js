import React from 'react'
import './postdetails.css'
import { useLocation } from 'react-router-dom';
export default function Postdetails() {
  
// const arr=[props.data]
// console.log(arr)
const location=new useLocation();
const item=location.state.item;
console.log(item)

    
  return (
    <div className='Postdetails'>
        
            <div className='Mapping-3'  >
            <div className='Map-3-img'><img src={item[0]}/></div>
            <h3>{item[1]}</h3>
            <p1>{item[2]}</p1>
        </div>
        
        
        
    </div>
  )
}
