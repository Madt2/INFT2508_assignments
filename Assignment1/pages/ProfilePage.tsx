import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS, TEXT_COLORS} from '../values/color';

type profileProps = {
  name: string;
  age: number;
  sex: string;
  address: string;
  bankAccountNr: number;
};

type InformationRowProps = {
  label: string;
  info: string;
};

const InformationRow = (props: InformationRowProps) => {
  return (
    <View style={styles.InformationRows}>
      <Text style={styles.LabelText}>{props.label}: </Text>
      <Text style={styles.InfoText}>{props.info}</Text>
    </View>
  );
};

const ProfileInfo = (props: profileProps) => {
  return (
    <View style={styles.informationRowContainer}>
      <InformationRow label="Name" info={props.name} />
      <InformationRow label="Age" info={props.age.toString()} />
      <InformationRow label="Sex" info={props.sex} />
      <InformationRow label="Adress" info={props.address} />
      <InformationRow
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

  getProfile();

  return (
    <View style={styles.PageContainer}>
      {/* Image source: https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fportrait&psig=AOvVaw1WZRC0VmXbiwwfT9NbAWqK&ust=1697891975372000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIiu4tLShIIDFQAAAAAdAAAAABAE */}
      <Image
        style={styles.image}
        source={require('../assets/Images/StockImagePerson.jpg')}
      />
      <ProfileInfo
        name={profile.name}
        age={profile.age}
        sex={profile.sex}
        address={profile.address}
        bankAccountNr={profile.bankAccoutNr}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  PageContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    padding: 10,
  },
  InformationRows: {
    width: '100%',
    padding: 10,
    backgroundColor: COLORS.GRAY,
    borderRadius: 10,
  },
  informationRowContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
  },
  LabelText: {
    color: COLORS.WHITE,
  },
  InfoText: {
    color: TEXT_COLORS.LIGHT_BLUE,
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
