import AsyncStorage from '@react-native-async-storage/async-storage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {FetchExamplePage} from '../pages/FetchExamplePage';
import {MyTicketsPage} from '../pages/MyTicketsPage';
import {ProfilePage} from '../pages/ProfilePage';
import {SettingsPage} from '../pages/SettingsPage';
import {changeTheme, store} from '../store';
import {COLORS} from '../values/color';
import {StackNav} from './StackNav';

export const TabNav = () => {
  const Tab = createBottomTabNavigator();
  const theme = store.useState(s => s.theme);

  const getTheme = async () => {
    try {
      const storageTheme = await AsyncStorage.getItem('theme');
      if (storageTheme !== null) {
        changeTheme(storageTheme);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTheme();
  }, []);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({}) => ({
          tabBarActiveTintColor: theme === 'dark' ? COLORS.RED : COLORS.BLUE,
          tabBarInactiveTintColor:
            theme === 'dark' ? COLORS.WHITE : COLORS.GRAY,
          headerStyle: {
            backgroundColor: theme === 'dark' ? '#000000' : COLORS.WHITE,
          },
          headerTitleStyle: {
            color: theme === 'dark' ? COLORS.WHITE : COLORS.GRAY,
          },
          tabBarStyle: {
            backgroundColor: theme === 'dark' ? '#000000' : COLORS.WHITE,
          },
        })}>
        <Tab.Screen
          name="Home"
          component={StackNav}
          options={{headerShown: false}}
        />
        <Tab.Screen name="My Tickets" component={MyTicketsPage} />
        <Tab.Screen name="Profile" component={ProfilePage} />
        <Tab.Screen name="Fetch Example" component={FetchExamplePage} />
        <Tab.Screen name="Settings" component={SettingsPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
