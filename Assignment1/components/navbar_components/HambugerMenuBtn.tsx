import React from 'react';
import {Pressable} from 'react-native';
import {HamburgerMenuIcon} from '../../assets';
import {ToggleHamburgerMenu} from '../../store';

export default function HamburgerMenuBtn() {
  return (
    <Pressable onPress={() => ToggleHamburgerMenu()}>
      <HamburgerMenuIcon width={24} height={24} />
    </Pressable>
  );
}
