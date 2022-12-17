import React,{useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';

const BlogForm = ({onSubmit, initialValue}) => {

    const[title,setTitle] = useState(initialValue.title);
    const[content,setContent] = useState(initialValue.content);
   
    return (
        <View style={Styles.form}>
            <Text style={Styles.text}>ADD Blog Title</Text>
            <TextInput value={title} onChangeText={(text)=>setTitle(text)} style={Styles.input}/>
  
            <Text style={Styles.text}>ADD Blog Content</Text>
            <TextInput value={content} onChangeText={(text)=>setContent(text)} style={Styles.input}/>
  
            <Button style={Styles.button} title='Submit'
             onPress={()=> onSubmit( title,  content)}
              
             />
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
})
BlogForm.defaultProps={
  initialValue:{
    title:'',
    content:''
  }
}

export default BlogForm;
