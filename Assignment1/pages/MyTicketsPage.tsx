import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {RightArrowIcon} from '../assets';
import {COLORS} from '../values/color';

export const MyTicketsPage = () => {
  return (
    <SafeAreaView>
      <View style={styles.pageContainer}>
        <Pressable style={styles.ticketRedirect}>
          <Text style={styles.ticketRedirectElement}>
            Ticket for: 28.10.2023
          </Text>
          <RightArrowIcon style={styles.ticketRedirectElement} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    padding: 16,
    display: 'flex',
    gap: 16,
  },
  ticketRedirect: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.RED,
    borderRadius: 15,
  },
  ticketRedirectElement: {
    color: COLORS.WHITE,
  },
});
