import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CategoriesScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home..</Text>
      <Button title='Go to Bread' onPress={()=>navigation.navigate("Bread")}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 15,
    color: 'white',
    margin: 10,
  }

})