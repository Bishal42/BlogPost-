import { StyleSheet, Text, View,FlatList,Button,TouchableOpacity} from 'react-native'
import React,{useContext} from 'react';
import { Context } from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons'; 

const IndexScreen = ({navigation}) => {

    const { state ,addBlogPosts,deleteBlogPost} = useContext( Context);
  return (
    <View>
      
      <FlatList 

      data={state}
      keyExtractor={(blogPost)=>blogPost.id}
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

