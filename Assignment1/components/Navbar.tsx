import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LottoLogo} from '../assets';
import HamburgerMenu from './navbar_components/HambugerMenu';
import LoginBtn from './buttons/LoginBtn';
import Back from './navbar_components/Back';

export default function Navbar() {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Back />
        <LottoLogo />
      </View>
      <View style={styles.headerRight}>
        <LoginBtn />
        <HamburgerMenu />
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
