import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import AvisosScreen from '../screens/AvisosScreen';
import CredentialScreen from '../screens/CredentialScreen';
import AccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();

const screenOptions = (route, color) => {
  let iconName;

  if (route.name === 'Home') {
    iconName = 'home';
  } else if (route.name === 'Notices') {
    iconName = 'bullhorn';
  } else if (route.name === 'Credential') {
    iconName = 'id-badge';
  } else if (route.name === 'Account') {
    iconName = 'user-circle';
  }

  return <FontAwesome5 name={iconName} size={20} color={color} />;
};

const BottomNavigation = ({ route }) => {
  const { officeLocation, givenName, surname, displayName, jobTitle, mail, photo } = route.params;

  let data = {
    officeLocation,
    givenName,
    surname,
    displayName,
    jobTitle,
    mail,
    photo,
  };

  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => screenOptions(route, color),
        tabBarStyle: {
          backgroundColor: '#1b396a',
          height: 70,
          paddingBottom: 12,
          paddingTop: 8,
        },
        tabBarActiveTintColor: '#f47b20',
        tabBarInactiveTintColor: '#ffffff',
      })}
    >
      <Tab.Screen
        name='Home'
        children={() => <HomeScreen data={data} />}
        options={{
          title: 'Inicio',
          headerShown: false,
          tabBarLabelStyle: { fontFamily: 'LatoRegular', fontSize: 12 },
        }}
      />
      <Tab.Screen
        name='Credential'
        children={() => <CredentialScreen data={data} />}
        options={{
          title: 'Mi Credencial',
          headerShown: false,
          tabBarLabelStyle: { fontFamily: 'LatoRegular', fontSize: 12 },
        }}
      />
      <Tab.Screen
        name='Notices'
        component={AvisosScreen}
        options={{
          title: 'Avisos',
          headerShown: false,
          tabBarLabelStyle: { fontFamily: 'LatoRegular', fontSize: 12 },
        }}
      />
      <Tab.Screen
        name='Account'
        children={() => <AccountScreen data={data} />}
        options={{
          title: 'Mi Cuenta',
          headerShown: false,
          tabBarLabelStyle: { fontFamily: 'LatoRegular', fontSize: 12 },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
