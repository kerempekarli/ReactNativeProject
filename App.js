
import { StyleSheet, Text, View, Button } from 'react-native';
import LoginScreen from './src/loginscreen';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/homeScreen';
import Users from './src/Users';
import Shanghai from './src/Shangai';
import MainScreen from './src/MainScreen';

const Stack = createNativeStackNavigator();


  export default function App() {
      
  return (
    <View>
    <NavigationContainer>

      <Stack.Navigator initialRouteName='MainScreen'>

        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title:'Home' }}/>
        

        <Stack.Screen name="LoginScreen" options={{title:"Login Screen"}} component={LoginScreen} />
  

        <Stack.Screen name="Users" options={{title:"Users"}} component={Users} />
        <Stack.Screen name="Shanghai" component={Shanghai}></Stack.Screen>
        <Stack.Screen name="MainScreen" component={MainScreen}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,

  },
  backgroundImage :{
    flex:1,
  }
})

