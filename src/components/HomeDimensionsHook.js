import { StyleSheet, Text, useWindowDimensions, View, Platform } from 'react-native'
import React from 'react'
import HomeComponent from './HomeComponent';

const HomeDimensionsHook = () => {


  const windowDimensions = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Text>HomeDimensionsHook</Text>
      <Text style={styles.title}>{dimensions.width}px</Text>
      <Text style={styles.title}>{dimensions.height}px</Text>
      <View style={styles.redView}></View>
      <Text style={styles.title}>0S: {Platform.OS}</Text>
      <Text style={styles.title}>Version: {Platform.Version}</Text>
      <Text style={styles.title}>Constants: {JSON.stringify(Platform.constants)}</Text>
      <Text style={styles.title}>{ Platform.OS === "android" ? "Android gebruiker" : "IOS gebruiker"}
      </Text>
    </View>
  )
}

export default HomeDimensionsHook

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  title: {
    fontSize: 36,
  },
  redView: {
    backgroundColor: "red",

    height: 200,
  }
})