import {StyleSheet} from 'react-native'
import React,{ useContext} from 'react'
import { Context } from '../context/BlogContext';
import BlogForm from '../component/BlogForm';

const CreateScreen = ({navigation}) => {
 
  const {addBlogPosts}= useContext(Context);
   
  return (
  
  <BlogForm 
    onSubmit = {(id, title, content)=>{
       addBlogPosts( id, title, content , ()=>{
       navigation.navigate('Index')
      })
    }}
  />
  )
  
}
const Styles = StyleSheet.create({ 
}
)

export default CreateScreen