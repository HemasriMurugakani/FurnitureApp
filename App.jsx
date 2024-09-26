import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/Home';
import ProfileScreen from './src/screens/profile'; 
import BottomNavigation from './src/components/home/bottomnavigation'; 
import DiscoverScreen from './src/screens/DiscoverScreen';
import Product_Detail from './src/screens/Product_Detail';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigation {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Discover" component={DiscoverScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Product_Detail" component={Product_Detail} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;