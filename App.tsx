import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {observer} from 'mobx-react-lite';
import {CalcScreen} from './src/screens/CalcScreen';

const App = observer(() => {
  return (
    <SafeAreaProvider style={styles.container}>
      <CalcScreen />
    </SafeAreaProvider>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
