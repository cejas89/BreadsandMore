import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function CategoryBreadScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category Bread Screen</Text>
      <Button title='Go to Detail' onPress={()=>navigation.navigate("Detail")}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 15,
    color: 'white',
    margin: 10,
  }
})