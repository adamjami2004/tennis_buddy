import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/Homescreen';
import Login from './screens/Log';
import Menu from './screens/Menu';
import Shop from './screens/Shop';
import Profil from './screens/Profil';
import Ball from './screens/Ball';
import Sign from './screens/Sign';
import CalendarScreen from './screens/calendar';
import Search from './screens/search';
import {User, onAuthStateChanged} from 'firebase/auth';
import { FIREBASE_AUTH } from './firebase';




const Stack = createNativeStackNavigator();
const InsideStack= createNativeStackNavigator();


export default function App() {

  

 
  

  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Sign' screenOptions={{headerShown: false,}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Log" component={Login}/>
        <Stack.Screen name="Menu" component={Menu}/>
        <Stack.Screen name="Shop" component={Shop}/>
        <Stack.Screen name="Profil" component={Profil}/>
        <Stack.Screen name="Ball" component={Ball}/>
        <Stack.Screen name="Sign" component={Sign}/>
        <Stack.Screen name="Calendar" component={CalendarScreen}/>
        <Stack.Screen name="Search" component={Search}/>

      </Stack.Navigator>

    </NavigationContainer>
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
