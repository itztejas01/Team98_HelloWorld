import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextField, NewCommonRadioButton} from '../common';

class StudentPersonalDetailsForm extends Component {
  render() {
    const {rootViewStyle} = styles;
    return (
      <View style="rootViewStyle">
        <TextField />
        <TextField />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootViewStyle: {
    flex: 1,
  },
});

export default StudentPersonalDetailsForm;
