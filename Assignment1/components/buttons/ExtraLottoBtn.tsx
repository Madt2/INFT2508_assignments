import React, {ReactElement, useState} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {BUTTON_COLORS, TEXT_COLORS} from '../../values/color';

type BtnProps = {
  label: string;
  icon: ReactElement;
};

const ExtraLottoBtn = (props: BtnProps) => {
  const [state, setState] = useState(false);

  return (
    <Pressable
      style={styles.BtnBorder}
      onPress={() => {
        setState(!state);
        console.log('extraLottoBtn ' + state);
      }}>
      <Text style={styles.BtnText}>{props.label}</Text>
      {props.icon}
    </Pressable>
  );
};

export default ExtraLottoBtn;

const styles = StyleSheet.create({
  BtnBorder: {
    width: '48.5%',
    height: 40,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: BUTTON_COLORS.EXTRA_LOTTO,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  BtnText: {
    fontFamily: 'Maven Pro',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    color: TEXT_COLORS.GRAY,
  },
});
