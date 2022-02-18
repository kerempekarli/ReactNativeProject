import { View, Text, StyleSheet,FlatList } from 'react-native'
import React,{useEffect,useState} from 'react'
import axios from "axios"; 



export default function Users() {

   const[users,setData]=useState("") 

    let data = () => {
     axios.get("https://jsonplaceholder.typicode.com/users")
    .then( users => setData(users))
    .catch(err => console.log(err))
    }

     useEffect(() => {
        data()
      }, [])

  return (
    <FlatList 
    keyExtractor={(item) => item.id} 
    data={users} 
    renderItem={({ users }) => ( 
      <Text style={styles.item}>{users}</Text>     
    )}
  />
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 10,
      paddingBottom: 20,
      backgroundColor: '#fff',
    },
    item: {
      flex: 1,
      marginHorizontal: 10,
      marginTop: 24,
      padding: 10,
      backgroundColor: '#e6f5f0',
      fontSize: 15,
    },
  });