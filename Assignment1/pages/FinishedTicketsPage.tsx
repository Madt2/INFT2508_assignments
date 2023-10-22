import React from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TicketRow} from '../components/Tickets';
import {COLORS} from '../values/color';

export const FinishedTicketsPage = ({route}) => {
  const randTicket = () => {
    const ticket = [0, 0, 0, 0, 0, 0, 0];
    const numberPool = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
    ];
    for (let i = 0; i < ticket.length; i++) {
      const index = Math.floor(Math.random() * numberPool.length);
      ticket[i] = numberPool[index];
      numberPool.slice(index, 1);
    }
    return ticket as [number, number, number, number, number, number, number];
  };

  const {TicketRow1, TicketRow2} = route.params;

  return (
    <SafeAreaView>
      <View style={styles.pageContainer}>
        <View style={styles.ticketRows}>
          {TicketRow1}
          {TicketRow2}
          <TicketRow number={3} active={false} slots={randTicket()} />
          <TicketRow number={4} active={false} slots={randTicket()} />
          <TicketRow number={5} active={false} slots={randTicket()} />
          <TicketRow number={6} active={false} slots={randTicket()} />
          <TicketRow number={7} active={false} slots={randTicket()} />
          <TicketRow number={8} active={false} slots={randTicket()} />
          <TicketRow number={9} active={false} slots={randTicket()} />
          <TicketRow number={10} active={false} slots={randTicket()} />
        </View>
        <Pressable
          onPress={() => {
            Alert.alert('Directing to payment');
          }}
          style={styles.payBtn}>
          <Text>Pay</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    height: '100%',
    padding: 16,
    display: 'flex',
    justifyContent: 'space-between',
  },
  ticketRows: {
    display: 'flex',
    gap: 8,
  },
  payBtn: {
    width: '100%',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.GREEN,
    borderRadius: 15,
  },
});
