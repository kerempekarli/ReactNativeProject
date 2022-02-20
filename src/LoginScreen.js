
import React,{useState} from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Button} from "react-native";
import { auth } from "../firebase-config";




        const LoginScreen = ({navigation}) => {

            const [text,setText] = useState("kerempekarli@gmail.com");
            const [password,setPassword] = useState("123456");
            
                
         let login = (text,password)=>{

               auth.signInWithEmailAndPassword(text, password).then((uc)=>{
                   console.log(uc);
                   if(uc){
                       console.log("giriş yapıldı")
                       navigation.navigate("HomeScreen")                       
                   }
                   else{
                       console.log("kullanıcı bulunamadı")
                   }
               }).catch((error) => {console.log(error)})
               
           }

         let register = (text,password) => {
                auth.createUserWithEmailAndPassword(text,password)
                .then((uc)=>{
                    if(uc.user){
                    console.log("kullanıcı oluşturuldu");
                }
                    else{
                        console.log("kullanıcı yaratılamadı")
                    }
                }).catch((err) => {console.log(err)});

      
         }
       
           return (

            <View>
        
              <View style={styles.component}>
        
              <TextInput 
              style={styles.Input} 
              value={text} 
              onChangeText={(value) => setText(value)} 
              placeholder={"Please enter E-mail"}/>
        
              <TextInput 
              style={styles.Input} 
              value={password} 
              onChangeText={(value) => setPassword(value)}
              placeholder={"Please enter password"}/>
        
              </View>
        
        
        
              <View style={styles.main}>
              <TouchableOpacity style={styles.button}>
                <Text onPress={()=>{login(text,password)}} style={styles.textSize}>
                  Login
                </Text>
              </TouchableOpacity>
        
              <TouchableOpacity style={styles.button}>
                <Text onPress={()=>{register(text,password)}} style={styles.textSize}>
                  Sign up
                </Text>
              </TouchableOpacity>
              
              </View>
            </View>
          )
        }
       
       const styles = StyleSheet.create({
        component:{
      
          marginTop:100
      
        },
        Input:{
          borderWidth:3,
          borderColor:"green",
          borderRadius:5,
          margin:5,
          padding:10
        },
        button:{
          flex:1,
          borderWidth:3,
          borderRadius:5,
          width:30,
          height:40,
          margin:5,
          justifyContent:'center',
          alignItems:"center"
          
        },
        main:{
      
          borderColor:"green",
          flex:1,
          flexDirection:"row",
          justifyContent:"space-around",
          padding:10
        },
        textSize:{
            fontSize:20
        }
        
      
      })

      export default LoginScreen