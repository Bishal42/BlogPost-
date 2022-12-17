import { View, Text, TouchableOpacity } from 'react-native'
import React,{useContext} from 'react'
import { Context } from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons'; 

const ShowScreen = ({navigation}) => {
   const id = navigation.getParam('id');
   const{ state } = useContext(Context);

   const blogPost = state.find((blogPost)=> blogPost.id === id);
  return (
    <View>  
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
}


export default ShowScreen