import React, {ReactElement} from 'react';
import {GestureResponderEvent, Pressable, StyleSheet, View} from 'react-native';
import {
  EurojackpotLogo,
  ExtraLogo,
  JokerLogo,
  KenoLogo,
  LottoLogo,
  NabolagetLogo,
  VikinglottoLogo,
} from '../../assets';
import {COLORS} from '../../values/color';

type BtnProps = {
  color: string;
  icon: ReactElement;
  isSmall: boolean;
  onPress: (event: GestureResponderEvent) => void;
};

const BtnBase = (props: BtnProps) => {
  return (
    <Pressable
      onPress={props.onPress}
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
  onPress: (event: GestureResponderEvent) => void;
};

export const LottoBtn = (props: BtnTypeProps) => {
  return (
    <BtnBase
      onPress={props.onPress}
      isSmall={props.isSmall}
      color={COLORS.RED}
      icon={<LottoLogo />}
    />
  );
};

export const VikinglottoBtn = (props: BtnTypeProps) => {
  return (
    <BtnBase
      onPress={props.onPress}
      isSmall={props.isSmall}
      color={COLORS.BLUE}
      icon={<VikinglottoLogo />}
    />
  );
};

export const NabolagetBtn = (props: BtnTypeProps) => {
  return (
    <BtnBase
      onPress={props.onPress}
      isSmall={props.isSmall}
      color={COLORS.ORANGE}
      icon={<NabolagetLogo />}
    />
  );
};

export const EurojackpotBtn = (props: BtnTypeProps) => {
  return (
    <BtnBase
      onPress={props.onPress}
      isSmall={props.isSmall}
      color={COLORS.LIGHT_BLACK}
      icon={<EurojackpotLogo />}
    />
  );
};

export const ExtraBtn = (props: BtnTypeProps) => {
  return (
    <BtnBase
      onPress={props.onPress}
      isSmall={props.isSmall}
      color={COLORS.PURPLE}
      icon={<ExtraLogo />}
    />
  );
};

export const JokerBtn = (props: BtnTypeProps) => {
  return (
    <BtnBase
      onPress={props.onPress}
      isSmall={props.isSmall}
      color={COLORS.YELLOW}
      icon={<JokerLogo />}
    />
  );
};

export const KenoBtn = (props: BtnTypeProps) => {
  return (
    <BtnBase
      onPress={props.onPress}
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
