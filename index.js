/** @format */

import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Header from './src/components/header';

const App = () => <Header />;

AppRegistry.registerComponent('Albums', () => App);
