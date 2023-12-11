import React from 'react'
import { ImageBackground, Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import city from '../../assets/citylight.jpeg'

const Dashboard = () => {
  return (
    <SafeAreaView >
      <View style={styles.citylightDiv}>
        <ImageBackground
          source={city}
          style={styles.cityImage}
        ></ImageBackground>
        <View style={styles.AlltextContainer}>
          <Text style={styles.textContainer}>
            <Text style={styles.overlayFuraiaText}>FUR</Text>
            <Text style={styles.highlightedText}>AI</Text>
            <Text style={styles.overlayFuraiaText}>A</Text>
          </Text>

          <Text style={styles.pointsTextContainer}>Karibu, Patrick</Text>

          <View style={styles.totalPointsDiv}>
            <Text style={styles.initialPointsDiv}>0</Text>
            <Text style={styles.blankPointsDiv}></Text>

          </View>
        </View>


      </View>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({

  AlltextContainer: {
    paddingTop: 16,
    paddingHorizontal: 8,
  },
  citylightDiv: {
    flexDirection: "column",


  },
  cityImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: 250,
    backgroundColor: "#fff",
    width: '100%',
  },

  textContainer: {
    fontSize: 26,
    fontWeight: "500",
    marginBottom: 32,


  },
  overlayFuraiaText: {
    color: "#fff",

  },
  highlightedText: {
    color: "#6ab053",

  },
  pointsTextContainer: {
    padding: 8,
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    backgroundColor: "rgba(255,255,255,0.3)",
    width: "100%",
    marginBottom: 6,

  },
  totalPointsDiv:{
    flexDirection:'row',
    gap: 6,

  },
  initialPointsDiv:{
    color: "#fff",
    backgroundColor: "rgba(255,255,255,0.3)",
    fontWeight: "600",
    fontSize: 18,
    flex:1,
    padding: 8,

  },
  blankPointsDiv:{
    color: "#fff",
    backgroundColor: "rgba(255,255,255,0.3)",
    fontWeight: "600",
    fontSize: 18,
    flex: 2,
    padding: 8,

  },

})
export default Dashboard;
