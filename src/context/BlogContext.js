import React,{useReducer} from 'react';
import crateContextBlog from './crateContextBlog';




const blogReducer = (state, action)=>{
    switch (action.type){
        case 'add_blogpost':
            return [...state,{id: (Math.random() *99999),
                 title: action.payload.title,
                 content: action.payload.content,
                
                }];

        

        case 'delete_blogPost':
            return state.filter((blogPost)=> blogPost.id !== action.payload);

         default :
            return state;

    }
};
const addBlogPosts =(dispatch)=>{
    return (title, content, callback)=> {
        dispatch({type:'add_blogpost' , payload:{ title:title, content: content}} ),
        callback()
    };
  
};
const deleteBlogPost =(dispatch)=>{
    return (id)=>{
        dispatch( {type: 'delete_blogPost', payload:id})
    };
}

export const {Context,Provider} = crateContextBlog(
        blogReducer,
        {addBlogPosts,deleteBlogPost},
        []
);
