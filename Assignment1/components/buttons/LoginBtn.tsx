import React, {useState} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {BUTTON_COLORS, COLORS} from '../../values/color';

export default function LoginBtn() {
  const [state, setState] = useState(false);

  return (
    <Pressable
      style={styles.BtnBorder}
      onPress={() => {
        setState(!state);
      }}>
      <Text style={styles.BtnText}>Login</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  BtnBorder: {
    width: 80,
    height: 32,
    backgroundColor: BUTTON_COLORS.LOGIN,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: COLORS.WHITE,
    borderRadius: 20,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BtnText: {
    fontFamily: 'Maven Pro',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    color: COLORS.WHITE,
  },
});
