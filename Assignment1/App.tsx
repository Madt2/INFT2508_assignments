/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {AgeRatingIcon} from './assets';
import ExtraLottoGrid from './components/ExtraLottoGrid';
import LottoGrid from './components/LottoGrid';
import Navbar from './components/Navbar';
import ResultBtn from './components/buttons/ResultBtn';
import mainStyles from './styles';
import {COLORS, TEXT_COLORS} from './values/color';

function App() {
  return (
    <View style={styles.Main}>
      {/* Background */}
      <View style={styles.RedBackground} />

      {/* Top Half of Lotto page */}
      <SafeAreaView style={styles.SafeAreaView}>
        <Navbar />

        <Text style={[mainStyles.Text, styles.BigText]}>
          Nye Lotto-millionærer hver lørdag
        </Text>

        <Text style={[mainStyles.Text, styles.MediumText]}>
          <Text>Ca </Text>
          <Text style={{color: TEXT_COLORS.GOLD}}>15 millioner</Text>
          <Text> i første premien</Text>
        </Text>

        <View>
          <Text style={[mainStyles.Text, styles.SmallText, {marginBottom: 8}]}>
            <Text>Spillefrist klokken </Text>
            <Text style={{color: TEXT_COLORS.LIGHT_BLUE}}>18</Text>
            <Text> på </Text>
            <Text style={{color: TEXT_COLORS.LIGHT_BLUE}}>lørdager</Text>
          </Text>

          <LottoGrid />
        </View>
      </SafeAreaView>

      {/* Bottom half of the Lotto page */}
      <SafeAreaView
        style={[styles.SafeAreaView, styles.SafeAreaViewBottom, {zIndex: -1}]}>
        <View style={styles.WinnerChangceView}>
          <AgeRatingIcon height={24} width={24} />
          <Text style={styles.WinnerChanceText}>
            Vinnersjanse 1. premie: 1:5,4 mill. per rekke.
          </Text>
        </View>

        <ExtraLottoGrid />

        <ResultBtn label1="Resultater" label2="Alle vinnertall og premier" />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  Main: {
    zIndex: -1000,
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
    height: '100%',
    width: '100%',
  },
  RedBackground: {
    zIndex: -999,
    backgroundColor: COLORS.RED,
    height: '50%',
    transform: [{rotate: '-8deg'}, {scale: 1.2}],
  },
  SafeAreaView: {
    position: 'absolute',
    gap: 30,
    margin: 16,
    height: '50%',
    flexDirection: 'column',
  },
  SafeAreaViewBottom: {
    height: '92%',
    gap: 18,
    justifyContent: 'flex-end',
  },
  BigText: {fontSize: 24},
  MediumText: {fontSize: 16},
  SmallText: {fontSize: 14},

  WinnerChanceText: {fontSize: 12, color: TEXT_COLORS.WINNER_CHANCE},
  WinnerChangceView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    transform: [{rotate: '-8deg'}],
    marginBottom: 46,
  },
});

export default App;
