import React from 'react';
import {View} from 'react-native';
import {LottoBtnOneText, LottoBtnTwoText} from './buttons/LottoBtn';
import mainStyles from '../styles';

const LottoGrid = () => {
  return (
    <View style={mainStyles.Grid}>
      <LottoBtnTwoText label1="1 uke" label2="50kr" />
      <LottoBtnTwoText label1="5 uker" label2="250kr" />
      <LottoBtnOneText label="Abonner" />
      <LottoBtnOneText label="Fyll ut selv" />
    </View>
  );
};

export default LottoGrid;
