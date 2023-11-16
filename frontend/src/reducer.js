import { useState } from "react";

const reducer =(state,action)=>{
    switch(action.type){
        case "get_post":
        return{
            ...state,
            posts:action.payload.posts,

        }
        case"search_post":
        let postss=action.payload.posts;
        let  query  = action.payload.query;
        const filteredPosts = postss.filter((post) => 
        //{
        //   return (
            post.title.toLowerCase().includes(query) || post.content.toLowerCase().includes(query)
        //   );
        // }
        );
        if(query===""){
            
            postss=action.payload.posts;
            
        }
        else(
            postss=filteredPosts
            
        )
        
        return{
            ...state,
            // query:action.payload.item,
            // posts:state.posts.filter((index)=>index.posts.includes(action.payload.item))
            query,
            posts:postss,
            
            
        }


       
         
    }
    return state; 
}; 
export default reducer;