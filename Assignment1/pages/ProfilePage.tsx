import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS, TEXT_COLORS} from '../values/color';

type profileProps = {
  name: string;
  age: number;
  sex: string;
  address: string;
  bankAccountNr: number;
  theme: string;
};

type InformationRowProps = {
  label: string;
  info: string;
  theme: string;
};

const InformationRow = (props: InformationRowProps) => {
  const viewTheme: StyleProp<ViewStyle> =
    props.theme === 'dark'
      ? darkTheme.InformationRows
      : lightTheme.InformationRows;
  const labelTheme: StyleProp<TextStyle> =
    props.theme === 'dark' ? darkTheme.LabelText : lightTheme.LabelText;
  const infoTextTheme: StyleProp<TextStyle> =
    props.theme === 'dark' ? darkTheme.InfoText : lightTheme.InfoText;
  return (
    <View style={viewTheme}>
      <Text style={labelTheme}>{props.label}: </Text>
      <Text style={infoTextTheme}>{props.info}</Text>
    </View>
  );
};

const ProfileInfo = (props: profileProps) => {
  return (
    <View style={styles.informationRowContainer}>
      <InformationRow theme={props.theme} label="Name" info={props.name} />
      <InformationRow
        theme={props.theme}
        label="Age"
        info={props.age.toString()}
      />
      <InformationRow theme={props.theme} label="Sex" info={props.sex} />
      <InformationRow theme={props.theme} label="Adress" info={props.address} />
      <InformationRow
        theme={props.theme}
        label="Bank Account Number"
        info={
          props.bankAccountNr.toString().slice(0, 4) +
          ' ' +
          props.bankAccountNr.toString().slice(4, 6) +
          ' ' +
          props.bankAccountNr.toString().slice(6)
        }
      />
    </View>
  );
};

export const ProfilePage = () => {
  const [theme, setTheme] = useState<string>('light');
  const isFocused = useIsFocused();

  const getTheme = async () => {
    try {
      const storageTheme = await AsyncStorage.getItem('theme');
      if (storageTheme !== null) {
        setTheme(storageTheme);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTheme();
  }, [isFocused]);

  type profile = {
    name: string;
    age: number;
    sex: string;
    address: string;
    bankAccoutNr: number;
  };

  const [profile, setProfile] = useState<profile>({
    name: 'name',
    age: 0,
    sex: 'none',
    address: 'adress',
    bankAccoutNr: 0,
  });

  useEffect(() => {
    getProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProfile = async () => {
    const response = await fetch('http://localhost:3000/profile/');
    const data = await response.json();
    const responseProfile: profile = {
      name: data.name,
      age: data.age,
      sex: data.sex,
      address: data.address,
      bankAccoutNr: data.bankaccountnr,
    };
    setProfile(responseProfile);
  };

  const viewTheme: StyleProp<ViewStyle> =
    theme === 'dark' ? darkTheme.PageContainer : lightTheme.PageContainer;

  return (
    <View style={viewTheme}>
      {/* Image source: https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fportrait&psig=AOvVaw1WZRC0VmXbiwwfT9NbAWqK&ust=1697891975372000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIiu4tLShIIDFQAAAAAdAAAAABAE */}
      <Image
        style={styles.image}
        source={require('../assets/Images/StockImagePerson.jpg')}
      />
      <ProfileInfo
        theme={theme}
        name={profile.name}
        age={profile.age}
        sex={profile.sex}
        address={profile.address}
        bankAccountNr={profile.bankAccoutNr}
      />
    </View>
  );
};

const lightTheme = StyleSheet.create({
  PageContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    backgroundColor: COLORS.WHITE,
  },
  InformationRows: {
    width: '100%',
    padding: 10,
    backgroundColor: COLORS.GRAY,
    borderRadius: 10,
  },
  LabelText: {
    color: COLORS.WHITE,
  },
  InfoText: {
    color: TEXT_COLORS.LIGHT_BLUE,
  },
});

const darkTheme = StyleSheet.create({
  PageContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    backgroundColor: COLORS.LIGHT_BLACK,
  },
  InformationRows: {
    width: '100%',
    padding: 10,
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
  },
  LabelText: {
    color: COLORS.LIGHT_BLACK,
  },
  InfoText: {
    color: COLORS.BLUE,
  },
});

const styles = StyleSheet.create({
  informationRowContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
  },
  // https://stackoverflow.com/questions/50086665/react-native-rounded-image-with-a-border
  image: {
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: COLORS.GRAY,
  },
});
