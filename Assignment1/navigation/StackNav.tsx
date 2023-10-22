import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {EuroJackpotPage} from '../pages/EuroJackpotPage';
import {ExtraPage} from '../pages/ExtraPage';
import {FinishedTicketsPage} from '../pages/FinishedTicketsPage';
import {JokerPage} from '../pages/JokerPage';
import {KenoPage} from '../pages/KenoPage';
import {LottoPage} from '../pages/LottoPage';
import {MainPage} from '../pages/MainPage';
import {MyTicketsPage} from '../pages/MyTicketsPage';
import {NabolagetPage} from '../pages/NabolagetPage';
import {ProfilePage} from '../pages/ProfilePage';
import {TicketsPage} from '../pages/TicketsPage';
import {VikingLottoPage} from '../pages/VikingLottoPage';

export const StackNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        {/* Main Page */}
        <Stack.Screen name="Home" component={MainPage} />
        {/* Pages connected to profile */}
        <Stack.Screen name="My Profile" component={ProfilePage} />
        <Stack.Screen name="My Tickets" component={MyTicketsPage} />
        {/* Different lotto pages */}
        <Stack.Screen name="Lotto" component={LottoPage} />
        <Stack.Screen name="Eurojackpot" component={EuroJackpotPage} />
        <Stack.Screen name="Extra" component={ExtraPage} />
        <Stack.Screen name="Joker" component={JokerPage} />
        <Stack.Screen name="Keno" component={KenoPage} />
        <Stack.Screen name="Nabolaget" component={NabolagetPage} />
        <Stack.Screen name="VikingLotto" component={VikingLottoPage} />
        {/* Tickets */}
        <Stack.Screen name="Fill In Ticket" component={TicketsPage} />
        <Stack.Screen name="Ticket Overview" component={FinishedTicketsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
