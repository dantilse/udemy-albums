import React, { Component } from 'react';
import { Text, View } from 'react-native';

class AlbumList extends Component {
  componentWillMount() {
    console.log('component will mount Album List');
  }

  render() {
    return (
      <View>
        <Text>Album List</Text>
      </View>
    );
  }
}

export default AlbumList;
