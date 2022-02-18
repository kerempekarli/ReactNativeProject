import React from 'react'

import {StyleSheet, ImageBackground } from 'react-native'

// Function component tanımlandı
export default function Logo() {
  return <ImageBackground source={require("../../Explore.png")} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    width:null,
    height:null
   
  }
})