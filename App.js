import * as React from 'react';
import SearchFunction from './Components/SearchFunction'

import personne from './Helpers/mock'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-paper'

export default class App extends React.Component {
  render() {
    return (
      <SearchFunction/>
    )
  }
}

