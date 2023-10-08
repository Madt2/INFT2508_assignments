import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {LottoLogo} from '../assets/';
import {MainPage} from '../pages/MainPage';
import {ChangePage} from '../store';
import LoginBtn from './buttons/LoginBtn';
import Back from './navbar_components/Back';
import HamburgerMenuBtn from './navbar_components/HambugerMenuBtn';

export default function Navbar() {
  return (
    <View style={styles.header}>
      <Pressable
        onPress={() => ChangePage(MainPage())}
        style={styles.headerLeft}>
        <Back />
        <LottoLogo />
      </Pressable>
      <View style={styles.headerRight}>
        <LoginBtn />
        <HamburgerMenuBtn />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
  },
  headerLeft: {
    height: '100%',
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
  },
  headerRight: {
    height: '100%',
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 8,
  },
});
