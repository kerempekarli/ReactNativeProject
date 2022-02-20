import { View, Text, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native'
import React from 'react'

export default function MainScreen({navigation}) {
  return (
<ImageBackground source={require("./Images/thailand.jpg")} style={styles.image}  resizeMode="cover">
    <View style={styles.main}>
              <Text style={styles.top}>Thailand</Text>
    <TouchableOpacity onPress={()=>{navigation.navigate("Shanghai")}} style={styles.button}>
      <Text style={styles.text}>
        Shanghai
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{navigation.navigate("LoginScreen")}} style={styles.button}>
      <Text style={styles.text}>
        Login Screen
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{navigation.navigate("Users")}} style={styles.button}>
      <Text style={styles.text}>
        Users
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{navigation.navigate("HomeScreen")}} style={styles.button}>
      <Text style={styles.text}>
        Hawaii
      </Text>
    </TouchableOpacity>

    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
   
    main:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    marginTop:"15%"
   
    
},
    button:{

        padding:20,
        borderWidth:1,
        margin : 10,
        borderColor:"white"


    },
    text:{
        flex:1,
        flexDirection:'row',
        fontSize:20,
        alignSelf:'center',
        color:"white"
    },

    top:{
        flex:1,
        alignSelf:"center",
        fontSize:50,
        marginTop:"10%",
        color:"white"
    },
    image:{
        height:screen.availHeight,
        resizeMode:"cover",
        justifyContent: "center"
    }
})