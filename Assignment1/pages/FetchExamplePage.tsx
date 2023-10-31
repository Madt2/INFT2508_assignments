import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../values/color';

// source for help: https://www.bezkoder.com/javascript-fetch/

export const FetchExamplePage = () => {
  const [status, setStatus] = useState('');
  const [data, setData] = useState<[data]>([
    {
      profile: {
        name: 'initial',
        age: 0,
        sex: 'initial',
        address: 'initial',
        bankaccountnr: 0,
      },
      id: 0,
    },
  ]);
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

  const fetchData = async () => {
    const response = await fetch('http://localhost:3000/testdata/');
    const payloadData = await response.json();
    setData(payloadData);
  };

  type data = {
    profile: {
      name: string;
      age: number;
      sex: string;
      address: string;
      bankaccountnr: number;
    };
    id: number;
  };

  const postTest = async () => {
    const postData = {
      profile: {
        name: 'Harald',
        age: 32,
        sex: 'male',
        address: 'Hakkebakkeskogen 15',
        bankaccountnr: 23475423578,
      },
    };

    try {
      const response = await fetch('http://localhost:3000/testdata/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        const message = 'Error with Status Code: ' + response.status;
        throw new Error(message);
      }

      const payloadData = await response.json();
      console.log(payloadData);
      setStatus('Successfully added a profile');
      fetchData();
    } catch (error) {
      console.log('Error: ' + error);
    }
  };

  const replaceData = async (id: number) => {
    const postData = {
      profile: {
        name: 'Terkel',
        age: 14,
        sex: 'male',
        address: 'Knipe gata 11',
        bankaccountnr: 49583795043,
      },
    };

    try {
      const response = await fetch('http://localhost:3000/testdata/' + id, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        const message = 'Error with Status Code: ' + response.status;
        throw new Error(message);
      }

      const payloadData = await response.json();
      console.log(payloadData);
    } catch (error) {
      console.log('Error: ' + error);
    }
  };

  const deleteData = async (id: number) => {
    try {
      const response = await fetch('http://localhost:3000/testdata/' + id, {
        method: 'delete',
      });

      if (!response.ok) {
        const message = 'Error with Status Code: ' + response.status;
        throw new Error(message);
      }

      const payloadData = await response.json();
      console.log(payloadData);
    } catch (error) {
      console.log('Error: ' + error);
    }
  };

  const replaceFirstElement = async () => {
    if (data.length > 0) {
      replaceData(data[0].id);
      setStatus('Successfully replaced the first profile');
      fetchData();
    } else {
      setStatus('cannot replace first item of an empty list!');
    }
  };

  const deleteAllData = async () => {
    for (let i = 0; i < data.length; i++) {
      deleteData(data[i].id);
    }
    setStatus('Successfully deleted all profiles');
    fetchData();
  };

  const buttonColor = theme === 'dark' ? COLORS.GREEN : COLORS.RED;

  return (
    <View style={theme === 'dark' ? darkTheme.Container : lightTheme.Container}>
      <Text style={theme === 'dark' ? darkTheme.Text : lightTheme.Text}>
        Profiles: {JSON.stringify(data)}
      </Text>
      <Button title="Add Profile" color={buttonColor} onPress={postTest} />
      <Button
        title="Replace first profile"
        color={buttonColor}
        onPress={replaceFirstElement}
      />
      <Button
        title="Delete all profiles"
        color={buttonColor}
        onPress={deleteAllData}
      />
      <Text style={theme === 'dark' ? darkTheme.Text : lightTheme.Text}>
        Status: {status}
      </Text>
    </View>
  );
};

const lightTheme = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.WHITE,
  },
  Text: {
    color: COLORS.GRAY,
  },
});

const darkTheme = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.LIGHT_BLACK,
  },
  Text: {
    color: COLORS.WHITE,
  },
});
