import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Button} from 'react-native';
import {AddCertificationCard} from '../common';

class TestScreen extends Component {
  render() {
    return (
      <View>
        <Button
          title="PRNScreen"
          onPress={() => this.props.navigation.navigate('PRNScreen')}></Button>
        <AddCertificationCard />
      </View>
    );
  }
}
export default TestScreen;
