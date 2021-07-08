/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import Calculator from './components/Calculator';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Calculator />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
