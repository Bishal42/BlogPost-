import { View, Text, TextInput,StyleSheet,Button} from 'react-native'
import React,{useState, useContext} from 'react'
import { Context } from '../context/BlogContext';

const CreateScreen = ({navigation}) => {
  const[title,setTitle] = useState("");
  const[content,setContent] = useState("");
  const {addBlogPosts}= useContext(Context);
    return (
      <View style={Styles.form}>
          <Text style={Styles.text}>ADD Blog Title</Text>
          <TextInput value={title} onChangeText={(text)=>setTitle(text)} style={Styles.input}/>

          <Text style={Styles.text}>ADD Blog Content</Text>
          <TextInput value={content} onChangeText={(text)=>setContent(text)} style={Styles.input}/>

          <Button style={Styles.button} title='Submit' onPress={()=>{
            addBlogPosts(title,content,()=>{ navigation.navigate('Index')})
           
          }}/>
      </View>

    )
}
const Styles = StyleSheet.create({
  form:{
    margin:20,
  },
  input:{
   borderWidth:2,
   borderColor: "#506968",
   marginBottom:20,
   marginTop:5,
   height:40,
   paddingLeft:8,
  }, 
  text:{
    fontWeight:'bold',
    color:'#5D788C',
    fontSize:18,
  },
  
}
)

export default CreateScreen