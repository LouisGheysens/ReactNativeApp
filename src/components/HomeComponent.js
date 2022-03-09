import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeComponent = () => {
  return (
    <View style={styles.container}>
      <Text>HomeComponent</Text>
      <View style={styles.redView}></View>
      <View style={styles.blueView}></View>
    </View>
  )
}

export default HomeComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
      },
      redView: {
          backgroundColor: "red",
          width: 300,
          height: 200,
      },
      blueView: {
          backgroundColor: "blue",
          width: 400,
          height: 200
      }
})