import React,{useReducer} from 'react';
import crateContextBlog from './crateContextBlog';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action)=>{
    switch (action.type){
        case 'get_blogPost':
            return action.payload;

        case 'add_blogpost':
            return [...state,{id: (Math.random() *99999),
                 title: action.payload.title,
                 content: action.payload.content,
                
                }];
        case 'edit_blogPost':
            return state.map((blogPost)=>{
                if (blogPost.id===action.payload.id){
                    
                    return action.payload;
                }
                else{
                    return blogPost
                }
            })
                
    

        case 'delete_blogPost':
            return state.filter((blogPost)=> blogPost.id !== action.payload);

         default :
            return state;

    }
};
const getBlogPosts = (dispatch) =>{
    return async()=>{
      const response =   await jsonServer.get("/blogPosts")
      dispatch({ type:'get_blogPost', payload:(response.data)})
    }
};

const addBlogPosts =(dispatch)=>{
    return async (title, content, callback)=> {
        await jsonServer.post('/blogPosts',{
            title: title, content: content
        })
        // dispatch({type:'add_blogpost' , payload:{title:title, content: content}} )
        if(callback){
        callback()
        }
    };
  
};
const deleteBlogPost =(dispatch)=>{
    return async (id)=>{
      
       await jsonServer.delete(`/blogPosts/${id}`);
         dispatch( {type: 'delete_blogPost', payload:id})
    };
}
const editBlogPost = (dispatch)=>{
    return async (id, title, content, callback) =>{
        await jsonServer.put(`/blogPosts/${id}`,{title, content})
        dispatch( {type: 'edit_blogPost', payload:{id:id, title:title, content: content}} )
        
        if(callback) {
            callback();
        }
    }
};

export const {Context,Provider} = crateContextBlog(
        blogReducer,
        {addBlogPosts,deleteBlogPost, editBlogPost,getBlogPosts},
        [ ]
);
