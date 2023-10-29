import React, {useEffect, useState} from 'react';
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

// Moved to Server
//
//   const randTicket = () => {
//     const ticket = [0, 0, 0, 0, 0, 0, 0];
//     const numberPool = [
//       1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
//       22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
//     ];
//     for (let i = 0; i < ticket.length; i++) {
//       const index = Math.floor(Math.random() * numberPool.length);
//       ticket[i] = numberPool[index];
//       numberPool.slice(index, 1);
//     }
//     return ticket as [number, number, number, number, number, number, number];
//   };

//   const ticketRow1 = (
//     <TicketRow number={1} active={false} slots={randTicket()} />
//   );
//   const ticketRow2 = (
//     <TicketRow number={2} active={false} slots={randTicket()} />
//   );

export const TicketsPage = ({navigation}) => {
  const [tickets, setTickets] = useState([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ]);

  const getTicketRow = async () => {
    const response = await fetch('http://localhost:3000/tickets/');
    const data = await response.json();
    setTickets(data);
  };

  useEffect(() => {
    getTicketRow();
  }, []);

  const ticketRow1 = () => {
    return <TicketRow number={1} active={false} slots={tickets[0]} />;
  };

  const ticketRow2 = () => {
    return <TicketRow number={2} active={false} slots={tickets[1]} />;
  };

  return (
    <SafeAreaView>
      <View style={styles.pageContainer}>
        <View style={styles.ticketRows}>
          {ticketRow1()}
          {ticketRow2()}
          <TicketRow number={3} active={false} slots={[0, 0, 0, 0, 0, 0, 0]} />
          <TicketRow number={4} active={false} slots={[0, 0, 0, 0, 0, 0, 0]} />
          <TicketRow number={5} active={false} slots={[0, 0, 0, 0, 0, 0, 0]} />
          <TicketRow number={6} active={false} slots={[0, 0, 0, 0, 0, 0, 0]} />
          <TicketRow number={7} active={false} slots={[0, 0, 0, 0, 0, 0, 0]} />
          <TicketRow number={8} active={false} slots={[0, 0, 0, 0, 0, 0, 0]} />
          <TicketRow number={9} active={false} slots={[0, 0, 0, 0, 0, 0, 0]} />
          <TicketRow number={10} active={false} slots={[0, 0, 0, 0, 0, 0, 0]} />
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            onPress={() => {
              Alert.alert('Not functional');
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>Fill this column</Text>
          </Pressable>
          <Pressable
            onPress={() =>
              navigation.navigate('Ticket Overview', {
                TicketRow1: ticketRow1(),
                TicketRow2: ticketRow2(),
              })
            }
            style={styles.button}>
            <Text style={styles.buttonText}>Fill the rest</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    gap: 24,
    padding: 16,
    display: 'flex',
    justifyContent: 'space-between',
  },
  ticketRows: {
    display: 'flex',
    gap: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: COLORS.RED,
    padding: 16,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: COLORS.WHITE,
    textAlign: 'center',
  },
});
