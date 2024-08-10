import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/Homescreen';
import Login from './screens/Log';
import Menu from './screens/Menu';






const Stack = createNativeStackNavigator();
const InsideStack= createNativeStackNavigator();


export default function App() {
 


  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false,}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Log" component={Login}/>
        <Stack.Screen name="Menu" component={Menu}/>

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
