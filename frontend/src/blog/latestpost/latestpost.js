import React from 'react'
import './latestpost.css'

export default function Latestpost() {

    const post =[
        { id: 1,img:"https://buffer.com/library/content/images/2023/10/free-images.jpg", title: "My First Blog Post", content: "This is my first blog post." },
        { id: 2,img:"https://buffer.com/library/content/images/2023/10/free-images.jpg", title: "Another Blog Post", content: "This is another blog post." },
        { id: 3,img:"https://buffer.com/library/content/images/2023/10/free-images.jpg", title: "My First Blog Post", content: "This is my first blog post." },
        { id: 4,img:"https://buffer.com/library/content/images/2023/10/free-images.jpg", title: "Another Blog Post", content: "This is another blog post." },
        { id: 5,img:"https://buffer.com/library/content/images/2023/10/free-images.jpg", title: "My First Blog Post", content: "This is my first blog post." },
        { id: 6,img:"https://buffer.com/library/content/images/2023/10/free-images.jpg", title: "Another Blog Post", content: "This is another blog post." },
    
    ]
  return (
    <div className='latestpost'>
        
        <div className='latestpost-1'>
        <h1>Latest Post</h1>
            {post.map((index) => 
            <div className='mapping-2' key={index.id}>

                <div className='maping-2-img'><img src={index.img} alt={index.title} /></div>
                <h2>{index.title}</h2>
                <p>{index.content}</p>
            </div>
            )}
        </div>
    </div>
    
  )
}
