import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../values/color';

export const ExtraPage = () => {
  return (
    <View style={styles.Background}>
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.Container}>
          <Text style={styles.Text}>Welcome to Extra</Text>
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
    backgroundColor: COLORS.PURPLE,
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
