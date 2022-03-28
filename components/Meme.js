import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import colors from '../config/colors';

const Meme = props => {
  const {name, image} = props;
  const {memeContainer, imageContainer, memeImage, memeData, font} = styles;
  return (
    <View style={memeContainer}>
      <View style={imageContainer}>
        <Image source={{uri: image}} style={memeImage} />
      </View>
      <View style={memeData}>
        <Text style={font}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: 400,
    width: '100%',
    justifyContent: 'center',
  },
  memeImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  memeContainer: {
    marginVertical: 5,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: colors.base_color,
    flex: 1,
  },
  memeData: {
    backgroundColor: colors.secondary,
    width: '100%',
  },
  font: {
    textAlign: 'center',
    fontSize: 30,
    color: colors.base_color,
    fontFamily: 'Avenir-Roman'
  },
});

export default Meme;
