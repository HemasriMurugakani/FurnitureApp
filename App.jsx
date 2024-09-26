import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DiscoverScreen from './src/screens/DiscoverScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DiscoverScreen" screenOptions={{headerShown:false}}>
        <Stack.Screen name="DiscoverScreen" component={DiscoverScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


