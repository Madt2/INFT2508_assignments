import {StyleSheet} from 'react-native';
import {COLORS} from './values/color';

const mainStyles = StyleSheet.create({
  Text: {
    textAlign: 'center',
    fontFamily: 'Maven Pro',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: COLORS.WHITE,
  },
  BtnBorder: {
    width: '48.5%',
    height: 56,
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
  },
  Grid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
});

export default mainStyles;
