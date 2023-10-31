import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {RightArrowIcon} from '../assets';
import {COLORS} from '../values/color';

export const MyTicketsPage = () => {
  const [theme, setTheme] = useState<string>('light');
  const isFocused = useIsFocused();

  const getTheme = async () => {
    try {
      const storageTheme = await AsyncStorage.getItem('theme');
      if (storageTheme !== null) {
        setTheme(storageTheme);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTheme();
  }, [isFocused]);

  return (
    <SafeAreaView>
      <View
        style={
          theme === 'dark' ? darkTheme.pageContainer : lightTheme.pageContainer
        }>
        <Pressable
          style={
            theme === 'dark'
              ? darkTheme.ticketRedirect
              : lightTheme.ticketRedirect
          }>
          <Text
            style={
              theme === 'dark'
                ? darkTheme.ticketRedirectElement
                : lightTheme.ticketRedirectElement
            }>
            Ticket for: 28.10.2023
          </Text>
          <RightArrowIcon
            style={
              theme === 'dark'
                ? darkTheme.ticketRedirectElement
                : lightTheme.ticketRedirectElement
            }
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const lightTheme = StyleSheet.create({
  pageContainer: {
    width: '100%',
    height: '100%',
    padding: 16,
    display: 'flex',
    gap: 16,
    backgroundColor: COLORS.WHITE,
  },
  ticketRedirect: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.RED,
    borderRadius: 15,
  },
  ticketRedirectElement: {
    color: COLORS.WHITE,
  },
});

const darkTheme = StyleSheet.create({
  pageContainer: {
    width: '100%',
    height: '100%',
    padding: 16,
    display: 'flex',
    gap: 16,
    backgroundColor: COLORS.LIGHT_BLACK,
  },
  ticketRedirect: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.GREEN,
    borderRadius: 15,
  },
  ticketRedirectElement: {
    color: COLORS.LIGHT_BLACK,
  },
});
