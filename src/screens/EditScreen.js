import React, {useContext, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import BlogForm from '../component/BlogForm';
import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation}) => {

    const { state, editBlogPost} = useContext( Context );

        const id= navigation.getParam('id')
    const blogPost =  state.find(
        blogPost => blogPost.id === id

    );

    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);
   
    return (
       <BlogForm 
        initialValue={{title: blogPost.title, content: blogPost.content}}
        onSubmit ={(title,content) =>{
            editBlogPost(id, title,content, ()=>{ navigation.pop()})
        }
        }

       />
    );
}


const styles = StyleSheet.create({})

export default EditScreen;
