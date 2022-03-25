import React from 'react';
import {View, Image, Text} from 'react-native';

const Album = props => (
  <View>
    <Image source={props.image} />
    <View>
      <Text>{props.name}</Text>
      <Text>{props.power}</Text>
    </View>
  </View>
);
