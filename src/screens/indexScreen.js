import { StyleSheet, Text, View } from 'react-native'
import React,{useContext} from 'react';
import BlogContext from '../context/BlogContext';

const indexScreen = () => {
    const value = useContext( BlogContext);
  return (
    <View>
      <Text>indexScreen</Text>
      <Text>{value}</Text>
    </View>
  )
}
const styles = StyleSheet.create({})

export default indexScreen

