import { View, StyleSheet,Text, TouchableOpacity, ImageBackground} from "react-native";
import React from 'react';
import { StatusBar } from "expo-status-bar";



export default function HomeScreen({navigation}) {
  return (
  
<ImageBackground source={require("./Images/pexels-roberto-nickson-2486168.jpg")} style={styles.image}  resizeMode="cover">
        <View>

    <TouchableOpacity style={styles.button}>
      <Text>
         Hello world!
      </Text>
    </TouchableOpacity>
              
    <TouchableOpacity style={styles.button}>
      <Text>
        Welcome!
      </Text>
    </TouchableOpacity>

        </View>
        <StatusBar style="auto"></StatusBar>
   </ImageBackground>
  
  )
}

const styles = StyleSheet.create({

    image:{
        flex: 1,
        justifyContent: "center"
    }
  
  })