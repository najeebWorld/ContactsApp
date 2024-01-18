// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactsList from './src/ContactsList';
import ContactDetail from './src/ContactDetail';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ContactsList">
        <Stack.Screen name="ContactsList" component={ContactsList} />
        <Stack.Screen name="ContactDetail" component={ContactDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
