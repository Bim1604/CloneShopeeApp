/* eslint-disable prettier/prettier */
import React from 'react';
import HomeComponent from '../components/HomeComponent';
import {createStackNavigator} from '@react-navigation/stack';
import ScanQRComponent from '../components/QRCodeComponent';

const Stack = createStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeComponent" component={HomeComponent} />
      <Stack.Screen name="ScanQRComponent" component={ScanQRComponent} />
    </Stack.Navigator>
  );
};

export default HomeScreen;
