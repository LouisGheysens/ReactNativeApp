import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const KeyboardAvoiding = () => {
  return (
    <View style={styles.container}>
      <Text>KeyboardAvoiding</Text>
      <View style={styles.redView}></View>
      <TextInput style={styles.textInput}></TextInput>
    </View>
  )
}

export default KeyboardAvoiding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
      },
      redView: {
          backgroundColor: "red",
          height: 700
      },
      textInput: {
          borderWidth: 2,
          fontSize: 20,
          padding: 8,
      }
})