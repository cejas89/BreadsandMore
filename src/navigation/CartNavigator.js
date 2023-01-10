import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from '../../constants/colors.js';
import CartScreen from '../screens/CartScreen.js';

const Stack = createNativeStackNavigator();

export default function CartNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: COLORS.secondary,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Bread"
        component={CartScreen}
        options={{ title: "Carrito" }}
      />
    </Stack.Navigator>
  );
};