import React from 'react'
import './blogpost.css'
import Post from '../post/post'
import Latestpost from '../latestpost/latestpost'

export default function Blogpost() {
  return (
    
    <div className='blogpost'>
        <div className='blogpost-1'>
            <Post/>
        </div>
        <div className='blogpost-2'>
            <Latestpost/>
        </div>

        
    </div>
  )
}
