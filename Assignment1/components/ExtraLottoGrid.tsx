import React from 'react';
import {View} from 'react-native';
import {
  CakeDiagramIcon,
  HeartIcon,
  QuestionmarkIcon,
  StarIcon,
  TreeIcon,
} from '../assets';
import ExtraLottoBtn from './buttons/ExtraLottoBtn';
import mainStyles from '../styles';

const ExtraLottoGrid = () => {
  return (
    <View style={mainStyles.Grid}>
      <ExtraLottoBtn
        label="Lykkekupong"
        icon={<HeartIcon height={24} width={24} />}
      />
      <ExtraLottoBtn
        label="Andelsbank"
        icon={<CakeDiagramIcon height={24} width={24} />}
      />
      <ExtraLottoBtn
        label="Systemspill"
        icon={<TreeIcon height={24} width={24} />}
      />
      <ExtraLottoBtn
        label="Supertrekning"
        icon={<StarIcon height={24} width={24} />}
      />
      <ExtraLottoBtn
        label="Slik spiller du"
        icon={<QuestionmarkIcon height={24} width={24} />}
      />
    </View>
  );
};

export default ExtraLottoGrid;
