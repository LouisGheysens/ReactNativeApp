import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import { React, useEffect, useState } from 'react'

const windowDimensionsWidth = Dimensions.get("window").width;
const windowDimensionsHeight = Dimensions.get("window").height;

const HomeComponent = () => {

    const [dimensions, setDimensions] = useState({ width: windowDimensionsWidth , height: windowDimensionsHeight});

    useEffect(() => {
        const subscribe = Dimensions.addEventListener("change", ({window}) => {
            setDimensions({ width: window.width, height: window.height})
        });
        return () =>subscribe?.remove();
    }, [input]);


  return (
    <ScrollView horizontal style={styles.container}>
      <Text>HomeComponent</Text>
      <Text>{dimensions.width}px</Text>
      <Text>{dimensions.height}px</Text>
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
          width: dimensions.width * 0.75,
          height: 200,
      }
})