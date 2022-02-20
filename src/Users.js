import { View, Text, StyleSheet,FlatList, Image, TouchableOpacity} from 'react-native'
import React,{useEffect,useState} from 'react'
import axios from "axios"; 




export default function Users({navigation}) {

   const[data,setData]=useState([]) 
   const[isLoading,setIsLoading] = useState(true);

     useEffect(() => {  
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then(({data}) => {
        console.log(data)
        setData(data);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
      }, [])


    
          return(
          <View style={styles.color}>
            <View style={styles.page}>
              <View style = {styles.main}>

                  {isLoading ? <Text>yükleniyor</Text>: (
                    <FlatList   
                    style ={styles.container}
                    data={data}
                    keyExtractor={(item,index) => {
                      return index.toString();
                    }}
                    renderItem ={({item})=>{                      
                      return <View style={styles.item}><Text >{item.name}</Text></View>
                    }}
                    />        
                  )}
              </View>
            <View style={styles.next}>
              <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} style={styles.button}>
                  <Text>
                    Anasayfa
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text>
                    Menü
                  </Text>
                </TouchableOpacity>
                </View>
              </View>
              </View>
          )
      }


const styles = StyleSheet.create({

  color:{
    backgroundColor:"#fedefb"
  },
  page:{
      flex:1,
      flexDirection:"column",
      marginTop:30,
      justifyContent:'flex-start',
      alignItems:"center",
     
  },

  main:{
 
  },
 
 container: {
     
  },
  next:{
      flex:1,
      justifyContent:'space-between',
      flexDirection:"row",
      alignItems:"center",
      margin:30,
      marginTop:5,
      padding:5,
      paddingTop:1,
  },
  button :{
    
       justifyContent:"",
        borderWidth:1,
        borderRadius:10,
        alignSelf:'auto',
        padding:10,
        margin:15,
        marginTop:10,
        backgroundColor:"white"
  },    

  item: {      
      flex:1,
      alignSelf:"auto",
      paddingLeft:50,
      padding:10,
      borderWidth:1,
      borderRadius:5,
      marginTop:5,
      margin:5,
      backgroundColor:"white"
     
    },
  });