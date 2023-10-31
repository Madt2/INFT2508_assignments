import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useMemo, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import {changeTheme} from '../store';
import {COLORS} from '../values/color';

export const SettingsPage = () => {
  const [theme, setTheme] = useState<string>('light');

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
  }, []);

  const saveTheme = async () => {
    try {
      AsyncStorage.setItem('theme', theme);
      changeTheme(theme);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    saveTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  // https://www.npmjs.com/package/react-native-radio-buttons-group

  const radioButtons: RadioButtonProps[] = useMemo(
    () => [
      {
        id: 'light', // acts as primary key, should be unique and non-empty string
        label: 'Light',
        color: theme === 'dark' ? COLORS.WHITE : COLORS.GRAY,
        labelStyle: {color: theme === 'dark' ? COLORS.WHITE : COLORS.GRAY},
      },
      {
        id: 'dark',
        label: 'Dark',
        color: theme === 'dark' ? COLORS.WHITE : COLORS.GRAY,
        labelStyle: {color: theme === 'dark' ? COLORS.WHITE : COLORS.GRAY},
      },
    ],
    [theme],
  );
  return (
    <View style={theme === 'dark' ? darkTheme.Container : lightTheme.Container}>
      <Text style={theme === 'dark' ? darkTheme.Text : lightTheme.Text}>
        Select Theme:
      </Text>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={setTheme}
        selectedId={theme}
      />
    </View>
  );
};

const darkTheme = StyleSheet.create({
  Container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.LIGHT_BLACK,
  },
  Text: {
    color: COLORS.WHITE,
  },
});

const lightTheme = StyleSheet.create({
  Container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.WHITE,
  },
  Text: {
    color: COLORS.GRAY,
  },
});
