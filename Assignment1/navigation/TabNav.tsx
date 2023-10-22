import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {MyTicketsPage} from '../pages/MyTicketsPage';
import {ProfilePage} from '../pages/ProfilePage';
import {StackNav} from './StackNav';

export const TabNav = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={StackNav}
          options={{headerShown: false}}
        />
        <Tab.Screen name="My Tickets" component={MyTicketsPage} />
        <Tab.Screen name="Profile" component={ProfilePage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
