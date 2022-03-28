import React from 'react';
import {View, Component, TouchableHighlight, Text} from 'react-native';

class ActionBar extends Component {
  render() {
    return (
      <View>
        <View>
          <TouchableHighlight>
            <View>
              <Text>Like</Text>
              <Text>👍</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight></TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default ActionBar;
