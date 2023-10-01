import React, {useState} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import mainStyles from '../../styles';
import {COLORS} from '../../values/color';

type BtnProps = {
  label1: string;
  label2: string;
};

const ResultBtn = (props: BtnProps) => {
  const [state, setState] = useState(false);

  return (
    <Pressable
      style={styles.BtnBorder}
      onPress={() => {
        setState(!state);
        console.log('ResultBtn ' + state);
      }}>
      <Text style={[mainStyles.Text, styles.BtnBigText]}>{props.label1}</Text>
      <Text style={[mainStyles.Text, styles.BtnSmallText]}>{props.label2}</Text>
    </Pressable>
  );
};

export default ResultBtn;

const styles = StyleSheet.create({
  BtnBorder: {
    width: '100%',
    height: 64,
    backgroundColor: COLORS.RED,
    borderRadius: 10,
    padding: 16,

    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  BtnBigText: {
    fontSize: 20,
    color: COLORS.WHITE,
  },
  BtnSmallText: {
    fontSize: 12,
    color: COLORS.WHITE,
  },
});
