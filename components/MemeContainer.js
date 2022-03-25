import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import Meme from './Meme';

class MemeContainer extends Component {
  state = {
    memes: [],
  };
  constructor(props) {
    super(props);
    axios
      .get('https://api.imgflip.com/get_memes')
      .then(response => this.setState({memes: response.data.data.memes}));
  }

  renderMemes() {
    this.state.memes.map(meme => {
      <Meme image={meme.}/>
    })
  }

  render() {
    console.log(this.state);
    return (
      <View>
        <Text>Hello people</Text>
      </View>
    );
  }
}

export default MemeContainer;
