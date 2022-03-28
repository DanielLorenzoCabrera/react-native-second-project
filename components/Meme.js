import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import colors from '../config/colors';

const Meme = props => (
  <View style={styles.memeContainer}>
    <View style={styles.imageContainer}>
      <Image source={{uri: props.image}} style={styles.memeImage} />
    </View>
    <View style={styles.memeData}>
      <Text style={styles.font}>{props.name}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  imageContainer: {
    height: 400,
    width: '100%',
    justifyContent: 'center',
    padding: 0,
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
    color: colors.base_color,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Meme;
