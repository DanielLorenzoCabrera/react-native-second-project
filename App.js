/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Header from './components/Header';
import {Text, SafeAreaView} from 'react-native';
import AlbumContainer from './components/AlbumContainer';

const App = () => {
  return (
    <SafeAreaView>
      <Header title="Your albums" />
      <AlbumContainer />
    </SafeAreaView>
  );
};

export default App;
