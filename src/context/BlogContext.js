import React,{useReducer} from 'react';
import crateContextBlog from './crateContextBlog';




const blogReducer = (state, action)=>{
    switch (action.type){
        case 'add_blogpost':
            return [...state,{id: (Math.random() *99999), title:`BlogPost # ${state.length+1}`}];

        

        case 'delete_blogPost':
            return state.filter((blogPost)=> blogPost.id !== action.payload);

         default :
            return state;

    }
};
const addBlogPosts =(dispatch)=>{
    return ()=> {dispatch({type:'add_blogpost'})};
  
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
