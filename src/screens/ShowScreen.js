import { View, Text } from 'react-native'
import React,{useContext} from 'react'
import { Context } from '../context/BlogContext';

const ShowScreen = ({navigation}) => {
   //const id = navigation.getParam('id');
   const{ state } = useContext(Context);

   const blogPost = state.find((blogPost)=> blogPost.id === navigation.getParam('id'));
  return (
    <View>  
      <Text>{blogPost.title}</Text>
    </View>
  )
}

export default ShowScreen