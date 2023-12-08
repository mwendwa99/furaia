import React from 'react'
import { View, Text, StyleSheet, Image } from "react-native";
// import backarrow from '../../assets/left-arrow.png'
import smile from '../../assets/smiley-sad.png'

 const Bill = () => {
  return (
    <>
    {/* <View  style={styles.billsDashboard}>
      <Image
        source={backarrow} 
        style={styles.backArrowImage}
      />
        <Text style={styles.title}>ALL BILLS</Text>
    </View> */}
    <View style={styles.billbody}>
    <Image
        source={smile} 
        style={styles.smileyImage}
      />
      <Text style={styles.noBill} >Sorry you currently have no bills. Scan the QR Code on the table to order.</Text>
      <Text style={styles.scanQrCodeText}>Scan the QR Code</Text>
    </View>

    </>
  
  
)}

const styles = StyleSheet.create({
  billsDashboard: {
        backgroundColor: "#fff",
        display:"flex",
        flexDirection: "row",
        alignItems: "baseline",
        
    
    },
    backArrowImageImage: {
        backgroundColor: "#fff",

    },
    title : {
      fontWeight:"bold",
    },
    billbody : {
        backgroundColor:"#fff",
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        width:"100%",
        
    },
    smileyImage: {
      backgroundColor: "#fff",
      height:50,
      width:50,
      marginBottom: 20,

    },
    noBill: {
      fontSize: 14,
      fontWeight:"700",
      color:"#d9d9d9",
      marginBottom: 20,

    },
    scanQrCodeText:{
      color: "#98c75c",
      fontWeight:"900",
      marginBottom: 20,
      fontSize: 14,

    },

})
export default Bill