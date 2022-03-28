import React, {Component} from 'react';
import {StyleSheet, FlatList, SafeAreaView, View, Text} from 'react-native';
import axios from 'axios';
import Meme from './Meme';

class MemeContainer extends Component {
  state = {
    memes: [],
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios
      .get('https://api.imgflip.com/get_memes')
      .then(response => this.setState({memes: response.data.data.memes}));
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.memes}
          renderItem={({item}) => <Meme name={item.name} image={item.url} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  contentContainer: {
    backgroundColor: 'blue',
  },
});

export default MemeContainer;
