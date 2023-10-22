import React from 'react';
import {Alert, View} from 'react-native';
import mainStyles from '../styles';
import {LottoBtnOneText, LottoBtnTwoText} from './buttons/LottoBtn';

const LottoGrid = ({navigation}) => {
  return (
    <View style={mainStyles.Grid}>
      <LottoBtnTwoText label1="1 uke" label2="50kr" />
      <LottoBtnTwoText label1="5 uker" label2="250kr" />
      <LottoBtnOneText
        onPress={() => {
          Alert.alert('abonnerer nå');
        }}
        label="Abonner"
      />
      <LottoBtnOneText
        onPress={() => navigation.navigate('Fill In Ticket')}
        label="Fyll ut selv"
      />
    </View>
  );
};

export default LottoGrid;
