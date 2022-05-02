import React from 'react';
import Home from '../pages/home';
import More from '../pages/more';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Screen = () => {
    return ( 
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{header: () => null}}/>
          <Stack.Screen name="More" component={More} options={{header: () => null}}/>
          <Stack.Screen name="tapMore" component={More} options={{header: () => null}}/>
          <Stack.Screen name="goBack" component={Home} options={{header: () => null}}/>
          </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Screen;