import React, {useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
 
const initialState={
    query:"",
    nbpages:0,
    pages:0,
    posts:[],
}
const AppContext = React.createContext();

const AppProvider =({children})=>{

    const [state,dispatch]=useReducer(reducer,initialState); 

    const post =[
        { id: 1,img:"https://img.freepik.com/premium-photo/social-media-blog-concept-futuristic-icon-design-graphics-hand-with-smartphone_102583-6104.jpg", title: "My First Blog Post", content: "This is my first blog post." },
        { id: 2,img:"https://buffer.com/library/content/images/2023/10/free-images.jpg", title: "My First Blog Post", content: "This is my first blog post." },
        { id: 3,img:"https://buffer.com/library/content/images/2023/10/free-images.jpg", title: "Another Blog Post", content: "This is another blog post." },
        { id: 4,img:"https://img.freepik.com/premium-photo/social-media-blog-concept-futuristic-icon-design-graphics-hand-with-smartphone_102583-6104.jpg", title: "My First Blog Post", content: "This is my first blog post." },
        { id: 5,img:"https://buffer.com/library/content/images/2023/10/free-images.jpg", title: "Another Blog Post", content: "This is another blog post." },
        { id: 6,img:"https://buffer.com/library/content/images/2023/10/free-images.jpg", title: "My First Blog Post", content: "This is my first blog post." },
        { id: 7,img:"https://buffer.com/library/content/images/2023/10/free-images.jpg", title: "Another Blog Post", content: "This is another blog post." },
        { id: 8,img:"https://buffer.com/library/content/images/2023/10/free-images.jpg", title: "My First Blog Post", content: "This is my first blog post." },
        { id: 9,img:"https://buffer.com/library/content/images/2023/10/free-images.jpg", title: "My First Blog Post", content: "This is my first blog post." },
        { id: 10,img:"https://buffer.com/library/content/images/2023/10/free-images.jpg", title: "Another Blog Post", content: "This is another blog post." },
        { id: 11,img:"https://buffer.com/library/content/images/2023/10/free-images.jpg", title: "My First Blog Post", content: "This is my first blog post." },
        { id: 12,img:"https://buffer.com/library/content/images/2023/10/free-images.jpg", title: "Another Blog Post", content: "This is another blog post." },
        { id: 13,img:"https://buffer.com/library/content/images/2023/10/free-images.jpg", title: "My First Blog Post", content: "This is my first blog post." },
        { id: 14,img:"https://buffer.com/library/content/images/2023/10/free-images.jpg", title: "Another Blog Post", content: "This is another blog post." },
        { id: 15,img:"https://buffer.com/library/content/images/2023/10/free-images.jpg", title: "My First Blog Post", content: "This is my first blog post." },
        { id: 16,img:"https://buffer.com/library/content/images/2023/10/free-images.jpg", title: "My First Blog Post", content: "This is my first blog post." },
        { id: 17,img:"https://buffer.com/library/content/images/2023/10/free-images.jpg", title: "Another Blog Post", content: "This is another blog post." },
        { id: 18,img:"https://buffer.com/library/content/images/2023/10/free-images.jpg", title: "My First Blog Post", content: "This is my first blog post." },
        { id: 19,img:"https://buffer.com/library/content/images/2023/10/free-images.jpg", title: "Another Blog Post", content: "This is another blog post." },
        { id: 20,img:"https://buffer.com/library/content/images/2023/10/free-images.jpg", title: "My First Blog Post", content: "This is my first blog post." },
        { id: 21,img:"https://buffer.com/library/content/images/2023/10/free-images.jpg", title: "Another Blog Post", content: "This is another blog post." },
        { id: 22,img:"https://buffer.com/library/content/images/2023/10/free-images.jpg", title: "My First Blog Post", content: "This is my first blog post." },
        { id: 23,img:"https://buffer.com/library/content/images/2023/10/free-images.jpg", title: "My First Blog Post", content: "This is my first blog post." },
        { id: 24,img:"https://buffer.com/library/content/images/2023/10/free-images.jpg", title: "Another Blog Post", content: "This is another blog post." },
        { id: 25,img:"https://buffer.com/library/content/images/2023/10/free-images.jpg", title: "My First Blog Post", content: "This is my first blog post." },
        { id: 26,img:"https://buffer.com/library/content/images/2023/10/free-images.jpg", title: "Another Blog Post", content: "This is another blog post." },
        { id: 27,img:"https://buffer.com/library/content/images/2023/10/free-images.jpg", title: "My First Blog Post", content: "This is my first blog post." },
        { id: 28,img:"https://buffer.com/library/content/images/2023/10/free-images.jpg", title: "Another Blog Post", content: "This is another blog post." },

    
    ]
    
    
    

    useEffect(()=>{
        
        dispatch({
            type:"get_post",
            payload:{
                posts:post,
            }
        })
    },[])

    const searchpost=(item)=>{
        dispatch({
            type:"search_post",
            payload:{
                query:item,
                posts:post,
            }
         })
    }

    
    
    
    

    return(
    <AppContext.Provider value={{...state,searchpost}}>{children}</AppContext.Provider>
    )
}

const useGlobalContext=()=>{
    return useContext(AppContext);
}
export {AppContext,AppProvider,useGlobalContext };