/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Header from './components/Header';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import MemeContainer from './components/MemeContainer';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/*<Header title="Memeland" />*/}
      <MemeContainer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'yellow',
    
  },
});

export default App;
