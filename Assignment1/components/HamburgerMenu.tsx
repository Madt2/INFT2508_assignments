import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, View} from 'react-native';
import {ToggleHamburgerMenu, store} from '../store';
import {COLORS} from '../values/color';
import {
  EurojackpotBtn,
  ExtraBtn,
  JokerBtn,
  KenoBtn,
  LottoBtn,
  NabolagetBtn,
  VikinglottoBtn,
} from './buttons/TippeTypeBtns';

export const HamburgerMenu = () => {
  const showHamburgerMenu = store.useState(state => state.hamburgerMenu);
  if (showHamburgerMenu) {
    return (
      <View style={styles.Container}>
        <Pressable
          style={styles.CloseMenuArea}
          onPress={() => ToggleHamburgerMenu()}
        />
        <View style={styles.MenuArea}>
          <SafeAreaView>
            <View style={styles.HamburgerMenuView}>
              <LottoBtn isSmall={true} />
              <VikinglottoBtn isSmall={true} />
              <NabolagetBtn isSmall={true} />
              <EurojackpotBtn isSmall={true} />
              <ExtraBtn isSmall={true} />
              <JokerBtn isSmall={true} />
              <KenoBtn isSmall={true} />
            </View>
          </SafeAreaView>
        </View>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  Container: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
  },
  CloseMenuArea: {
    height: '100%',
    width: '50%',
  },
  MenuArea: {
    height: '100%',
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE,
    borderColor: COLORS.LIGHT_BLACK,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  HamburgerMenuView: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
});
