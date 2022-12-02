import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function BreadDetailScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BreadDetailScreen</Text>
      <Button title='Go to Home' onPress={() => navigation.navigate("Home")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 15,
    color: 'white',
    margin: 10,
  }

})