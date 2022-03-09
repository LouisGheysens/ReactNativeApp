import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const windowDimensionsWidth = Dimensions.get("window").width;
const windowDimensionsHeight = Dimensions.get("window").height;

const HomeComponent = () => {

    const [dimensions, setDimensions] = useState({ width: windowDimensionsWidth , height: windowDimensionsHeight});


  return (
    <ScrollView horizontal style={styles.container}>
      <Text>HomeComponent</Text>
      <Text>{Dimensions.get("window").width}px</Text>
      <Text>{Dimensions.get("window").height}px</Text>
      <View style={styles.redView}></View>
      <View style={styles.blueView}></View>
    </ScrollView>
  )
}

export default HomeComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        width: 750,
      },
      redView: {
          backgroundColor: "red",
          width: 750,
          height: 200,
      },
      blueView: {
          backgroundColor: "blue",
          width: windowDimensionsWidth * 0.75,
          height: 200,
      }
})