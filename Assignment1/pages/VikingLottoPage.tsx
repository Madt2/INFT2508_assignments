import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Navbar from '../components/Navbar';
import {COLORS} from '../values/color';

export const VikingLottoPage = () => {
  return (
    <View style={styles.Background}>
      <SafeAreaView style={styles.SafeAreaView}>
        <Navbar />
        <View style={styles.Container}>
          <Text style={styles.Text}>Welcome to VikingLotto</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    zIndex: -10,
    height: '50%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Background: {
    zIndex: -10,
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.BLUE,
    padding: 16,
  },
  SafeAreaView: {
    height: '100%',
    width: '100%',
    padding: 16,
  },
  Text: {
    color: COLORS.WHITE,
    fontSize: 32,
  },
});