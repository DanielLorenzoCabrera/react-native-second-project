import React from 'react';
import {View, Image, Text} from 'react-native';

const Meme = props => (
  <View>
    <Image source={props.image} />
    <View>
      <Text>{props.name}</Text>
    </View>
  </View>
);
