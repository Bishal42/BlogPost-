import { StyleSheet, Text, View,FlatList,Button,TouchableOpacity} from 'react-native'
import React,{useContext} from 'react';
import { Context } from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons'; 

const indexScreen = ({navigation}) => {

    const { state ,addBlogPosts,deleteBlogPost} = useContext( Context);
  return (
    <View>
      <Text style={styles.title}>indexScreen</Text>
      <Button title='add Blog' onPress={addBlogPosts}/>
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
const styles = StyleSheet.create({
  title:{
    fontSize:17,
    color:'#AE892C',
    fontWeight:'bold',
    marginLeft:20,
    padding:10,
  },
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

export default indexScreen

