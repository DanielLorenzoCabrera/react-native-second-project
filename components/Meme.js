import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const Meme = props => (
  <View style={styles.memeContainer}>
    <Image source={{uri: props.image}} style={styles.memeImage} />
    <View style={styles.memeData}>
      <Text style={styles.font}>{props.name}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  memeImage: {
    width: '100%',
    height: 300,
  },
  memeContainer: {
    marginVertical: 5,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
    maxHeight: '50%',
  },
  memeData: {
    backgroundColor: 'red',
    width: '100%',
  },
  font: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Meme;
