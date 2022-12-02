import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import ShopNavigator from './src/navigation/ShopNavigator';

export default function App() {

  const [fontsLoaded] = useFonts({
    Tillana: require('./src/fonts/Tillana-SemiBold.ttf'),
  });
  if (!fontsLoaded) return <Text>Probando</Text>;

  return (
    <ShopNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
