import { StyleSheet, Text, View,FlatList,Button,TouchableOpacity} from 'react-native'
import React,{useContext, useEffect} from 'react';
import { Context } from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons'; 

const IndexScreen = ({navigation}) => {

    const { state ,addBlogPosts,deleteBlogPost,getBlogPosts} = useContext( Context);

  useEffect(()=>{
      getBlogPosts()
      const listener = navigation.addListener( 'didFocus',()=>{
        getBlogPosts();
      });
      return()=>{
        listener.remove();// thsi remove the listener functio when the screen is not display 
      }
    },[]);

  return (
    <View >
      
      <FlatList 

      data={state}
      keyExtractor={(blogPost)=>Math.random ()* 9999}
      renderItem={( {item} )=> {
       return (
        <TouchableOpacity
        onPress={()=>{
          navigation.navigate('Show',{id:item.id});
        }}>
          <View 
          style={styles.blogpost}
          >
            <Text style={styles.blog}>{item.title}</Text>
            <FontAwesome name="trash-o" size={24} color="black" 
            onPress={()=> deleteBlogPost(item.id)}
              
            />
        </View>
       </TouchableOpacity>
       )
      }}
       />
    </View>
  )
}
IndexScreen.navigationOptions= ({ navigation })=>{
  return {
    headerRight: () => (
      <TouchableOpacity style={{width:40}} onPress={() => navigation.navigate('Create')}>
        <FontAwesome name="plus" size={20} />
      </TouchableOpacity>
    ),
  };
}
const styles = StyleSheet.create({


 
  blog:{
    
    margin:3,
    fontSize:18,
    paddingLeft:15,
    fontWeight:'bold',
  },
  blogpost:{
    height:50,
    flexDirection:"row",
    borderWidth:2,
    borderColor:'#45D4CD',
    justifyContent:'space-between',
    paddingRight:5,
    margin:3
  }
})

export default IndexScreen

