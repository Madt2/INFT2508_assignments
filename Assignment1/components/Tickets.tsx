import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ArrowBackIcon} from '../assets';
import {COLORS, TEXT_COLORS} from '../values/color';

type SlotProps = {
  active: boolean;
  number: number;
};

const TicketSlot = (props: SlotProps) => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    setNumber(props.number);
  }, [props.number]);

  if (number === 0) {
    // Empty slot
    return <View style={styles.slotEmpty} />;
  } else {
    return (
      // Filled Slot
      <View style={styles.slotFilled}>
        <Text style={styles.text}>{props.number.toString()}</Text>
      </View>
    );
  }
};

type ticketRowProps = {
  number: number;
  active: boolean;
  slots: [number, number, number, number, number, number, number];
};

export const TicketRow = (props: ticketRowProps) => {
  const [slots, updateSlots] = useState(props.slots);

  useEffect(() => {
    updateSlots(props.slots);
  }, [props.slots]);

  return (
    <View style={styles.ticketRow}>
      <Text style={styles.ticketRowText}>{props.number}.</Text>
      <View style={styles.ticketSlotRow}>
        {slots.map((number, index) => (
          <TicketSlot
            key={'ticketRow' + index}
            active={props.active}
            number={number}
          />
        ))}
      </View>
      <ArrowBackIcon style={{color: TEXT_COLORS.GRAY}} />
    </View>
  );
};

const styles = StyleSheet.create({
  slotEmpty: {
    width: 22,
    height: 22,
    borderRadius: 22 / 2,
    backgroundColor: COLORS.GRAY,
  },
  slotFilled: {
    width: 33,
    height: 33,
    borderRadius: 33 / 2,
    backgroundColor: COLORS.RED,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: COLORS.WHITE,
  },
  backArrow: {
    color: TEXT_COLORS.GRAY,
  },
  ticketRow: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.LIGHT_GRAY,
    borderRadius: 15,
  },
  ticketRowText: {
    color: TEXT_COLORS.GRAY,
    width: 20,
  },
  ticketSlotRow: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
