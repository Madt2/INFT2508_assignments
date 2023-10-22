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

export const MainPage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <ScrollView style={styles.ScrollView}>
        <View style={styles.View}>
          <LottoBtn
            onPress={() => navigation.navigate('Lotto')}
            isSmall={false}
          />
          <VikinglottoBtn
            onPress={() => navigation.navigate('VikingLotto')}
            isSmall={false}
          />
          <NabolagetBtn
            onPress={() => navigation.navigate('Nabolaget')}
            isSmall={false}
          />
          <EurojackpotBtn
            onPress={() => navigation.navigate('Eurojackpot')}
            isSmall={false}
          />
          <ExtraBtn
            onPress={() => navigation.navigate('Extra')}
            isSmall={false}
          />
          <JokerBtn
            onPress={() => navigation.navigate('Joker')}
            isSmall={false}
          />
          <KenoBtn
            onPress={() => navigation.navigate('Keno')}
            isSmall={false}
          />
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
