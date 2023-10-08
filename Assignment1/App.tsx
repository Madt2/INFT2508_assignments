import React from 'react';
import {StyleSheet, View} from 'react-native';
import {HamburgerMenu} from './components/HamburgerMenu';
import {store} from './store';

function App() {
  const page = store.useState(state => state.page);

  return (
    <View style={styles.View}>
      <HamburgerMenu />
      {page}
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  View: {
    height: '100%',
    width: '100%',
  },
});
