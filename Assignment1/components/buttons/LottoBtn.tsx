import React, {useState} from 'react';
import {GestureResponderEvent, Pressable, StyleSheet, Text} from 'react-native';
import mainStyles from '../../styles';
import {BUTTON_COLORS, COLORS, TEXT_COLORS} from '../../values/color';

type OneLabelProps = {
  label: string;
  onPress: (event: GestureResponderEvent) => void;
};

type TwoLabelProps = {
  label1: string;
  label2: string;
};

export const LottoBtnOneText = (props: OneLabelProps) => {
  return (
    <Pressable style={styles.BtnBorder} onPress={props.onPress}>
      <Text style={[mainStyles.Text, styles.BtnText]}>{props.label}</Text>
    </Pressable>
  );
};

export const LottoBtnTwoText = (props: TwoLabelProps) => {
  const [state, setState] = useState(false);

  return (
    <Pressable
      // eslint-disable-next-line react-native/no-inline-styles
      style={[styles.BtnBorder, {paddingTop: 8}]}
      onPress={() => {
        setState(!state);
      }}>
      <Text style={[mainStyles.Text, styles.BtnBigText]}>{props.label1}</Text>
      <Text style={[mainStyles.Text, styles.BtnSmallText]}>{props.label2}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  BtnBorder: {
    width: '48.5%',
    height: 56,
    backgroundColor: BUTTON_COLORS.LOTTO,
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BtnText: {
    fontSize: 18,
    color: COLORS.RED,
  },
  BtnBigText: {
    fontSize: 16,
    color: COLORS.RED,
  },
  BtnSmallText: {
    fontSize: 10,
    color: TEXT_COLORS.PRICE,
  },
});
