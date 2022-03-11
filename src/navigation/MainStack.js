import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import BottomNavigation from './BottomNavigation';
import AuthSignIn from '../auth/AuthSignIn';
import UploadPhotoScreen from '../screens/UploadPhotoScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignIn' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='SignIn' component={SignInScreen} />
        <Stack.Screen name='BottomNavigation' component={BottomNavigation} />
        <Stack.Screen name='AuthSignIn' component={AuthSignIn} />
        <Stack.Screen name='UploadPhoto' component={UploadPhotoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
