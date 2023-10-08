import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {
  EurojackpotBtn,
  ExtraBtn,
  JokerBtn,
  KenoBtn,
  LottoBtn,
  NabolagetBtn,
  VikinglottoBtn,
} from '../components/buttons/TippeTypeBtns';

export const MainPage = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <ScrollView style={styles.ScrollView}>
        <View style={styles.View}>
          <LottoBtn isSmall={false} />
          <VikinglottoBtn isSmall={false} />
          <NabolagetBtn isSmall={false} />
          <EurojackpotBtn isSmall={false} />
          <ExtraBtn isSmall={false} />
          <JokerBtn isSmall={false} />
          <KenoBtn isSmall={false} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  View: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  ScrollView: {
    height: '100%',
    width: '100%',
    padding: 16,
  },
  SafeAreaView: {
    width: '100%',
    height: '100%',
  },
});
