import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/Home'
import Product_Detail from './src/screens/Product_Detail'
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Stack.Navigator initialRouteName="Product_Detail">
        <Stack.Screen name="Product_Detail" component={Product_Detail} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />
=======
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />

>>>>>>> 1e14a4437b830cb29643e7d8efb870ef62ef0895
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


