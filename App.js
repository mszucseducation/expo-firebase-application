import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import React from 'react';
import Login from './screens/Login';
import Camera from './screens/Camera';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="starting">
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Camera" component={Camera}/>
      </Stack.Navigator>
    </NavigationContainer>  
  );
}


