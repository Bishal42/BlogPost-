import { StyleSheet, Text, View,FlatList,Button} from 'react-native'
import React,{useContext} from 'react';
import BlogContext from '../context/BlogContext';

const indexScreen = () => {

    const {data,addBlogPosts} = useContext( BlogContext);
  return (
    <View>
      <Text>indexScreen</Text>
      <Button title='add Blog' onPress={addBlogPosts}/>
      <FlatList 
      data={data}
      keyExtractor={(blogPost)=>blogPost.title}
      renderItem={( {item} )=> {
       return <Text>{item.title}</Text>
      }}
       />
    </View>
  )
}
const styles = StyleSheet.create({})

export default indexScreen

