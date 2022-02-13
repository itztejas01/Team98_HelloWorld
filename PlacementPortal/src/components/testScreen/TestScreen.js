import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Button} from 'react-native';
import {AddCertificationCard, AddExperienceCard} from '../common';

class TestScreen extends Component {
  render() {
    return (
      <View>
        <Button
          title="PRNScreen"
          onPress={() => this.props.navigation.navigate('PRNScreen')}></Button>
        {/* <AddCertificationCard /> */}
        <Button
          title="Add Experience"
          onPress={() =>
            this.props.navigation.navigate('AddExperienceScreen')
          }></Button>
        <Button
          title="AddCertification"
          onPress={() =>
            this.props.navigation.navigate('AddCertificationScreen')
          }></Button>
      </View>
    );
  }
}
export default TestScreen;
