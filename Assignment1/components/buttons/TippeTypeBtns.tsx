import React, {ReactElement} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {
  EurojackpotLogo,
  ExtraLogo,
  JokerLogo,
  KenoLogo,
  LottoLogo,
  NabolagetLogo,
  VikinglottoLogo,
} from '../../assets';
import {EuroJackpotPage} from '../../pages/EuroJackpotPage';
import {ExtraPage} from '../../pages/ExtraPage';
import {JokerPage} from '../../pages/JokerPage';
import {KenoPage} from '../../pages/KenoPage';
import {LottoPage} from '../../pages/LottoPage';
import {NabolagetPage} from '../../pages/NabolagetPage';
import {VikingLottoPage} from '../../pages/VikingLottoPage';
import {ChangePage} from '../../store';
import {COLORS} from '../../values/color';

type BtnProps = {
  color: string;
  icon: ReactElement;
  isSmall: boolean;
  pageDirect: ReactElement;
};

const BtnBase = (props: BtnProps) => {
  return (
    <Pressable
      onPress={() => ChangePage(props.pageDirect)}
      style={[
        styles.BtnBase,
        {backgroundColor: props.color},
        // eslint-disable-next-line react-native/no-inline-styles
        props.isSmall ? {height: 56} : null,
      ]}>
      <View style={props.isSmall ? {transform: [{scale: 0.66}]} : null}>
        {props.icon}
      </View>
    </Pressable>
  );
};

type BtnTypeProps = {
  isSmall: boolean;
};

export const LottoBtn = (props: BtnTypeProps) => {
  return (
    <BtnBase
      pageDirect={LottoPage()}
      isSmall={props.isSmall}
      color={COLORS.RED}
      icon={<LottoLogo />}
    />
  );
};

export const VikinglottoBtn = (props: BtnTypeProps) => {
  return (
    <BtnBase
      pageDirect={VikingLottoPage()}
      isSmall={props.isSmall}
      color={COLORS.BLUE}
      icon={<VikinglottoLogo />}
    />
  );
};

export const NabolagetBtn = (props: BtnTypeProps) => {
  return (
    <BtnBase
      pageDirect={NabolagetPage()}
      isSmall={props.isSmall}
      color={COLORS.ORANGE}
      icon={<NabolagetLogo />}
    />
  );
};

export const EurojackpotBtn = (props: BtnTypeProps) => {
  return (
    <BtnBase
      pageDirect={EuroJackpotPage()}
      isSmall={props.isSmall}
      color={COLORS.LIGHT_BLACK}
      icon={<EurojackpotLogo />}
    />
  );
};

export const ExtraBtn = (props: BtnTypeProps) => {
  return (
    <BtnBase
      pageDirect={ExtraPage()}
      isSmall={props.isSmall}
      color={COLORS.PURPLE}
      icon={<ExtraLogo />}
    />
  );
};

export const JokerBtn = (props: BtnTypeProps) => {
  return (
    <BtnBase
      pageDirect={JokerPage()}
      isSmall={props.isSmall}
      color={COLORS.YELLOW}
      icon={<JokerLogo />}
    />
  );
};

export const KenoBtn = (props: BtnTypeProps) => {
  return (
    <BtnBase
      pageDirect={KenoPage()}
      isSmall={props.isSmall}
      color={COLORS.GRAY}
      icon={<KenoLogo />}
    />
  );
};

const styles = StyleSheet.create({
  BtnBase: {
    width: '100%',
    height: 96,
    paddingLeft: 16,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
