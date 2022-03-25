import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import colors from '../config/colors';

const Header = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.primary,
    paddingVertical: 10,
  },
  textHeader: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: colors.base_color,
  },
});

export default Header;
