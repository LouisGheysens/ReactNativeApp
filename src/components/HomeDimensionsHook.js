import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'

const HomeDimensionsHook = () => {

  const windowDimensions = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Text>HomeDimensionsHook</Text>
      <Text style={styles.title}>{dimensions.width}px</Text>
      <Text style={styles.title}>{dimensions.height}px</Text>
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
  }
})