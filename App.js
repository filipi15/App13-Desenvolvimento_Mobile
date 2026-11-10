import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Detalhes from './src/pages/Detalhes';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Anúncios',
          headerStyle: {
            backgroundColor: 'maroon'
          },
          headerTintColor: '#FFF',
        }}
        />

        <Stack.Screen
        name="Detalhes"
        component={Detalhes}
        options={{
          headerStyle: {
            backgroundColor: 'maroon'
          },
          headerTintColor: '#FFF',
        }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
