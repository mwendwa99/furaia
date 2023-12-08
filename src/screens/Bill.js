import React from 'react'
import { View, Text, StyleSheet, Image } from "react-native";

export const Bill = () => {
  return (
    <>
    <View  style={styles.container}>
      <Image
        source={require('./assets/left-arrow.png')} 
        style={styles.image}
      />
        <Text style={styles.title}>ALL BILLS</Text>
    </View>
    <View style={styles.billbody}>
    <Image
        source={require('./assets/left-arrow.png')} 
        style={styles.image}
      />
    <Text>Sorry you currently have no bills. Scan the QR Code on the table to order.</Text>

    </View>

    </>

    
  
)}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        
    },
    image : {
        backgroundColor: "#fff",

    },
    billbody : {
        backgroundColor:"#fff",
    },

})