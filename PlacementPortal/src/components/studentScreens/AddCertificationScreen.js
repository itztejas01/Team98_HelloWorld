import React, {Component} from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Label} from '../common';
import {TextField} from '../common/TextField';

class AddCertificationScreen extends Component {
  /*=====FUNCTION COMMENT BEGINS=====\n
          1. Developer Name: Jeet Bhanushali \n
          2. Developer Email ID: jeetkatariya01970@gmail.com \n
          3. Function Description:\n
          4. Date Created: DD/MM/YY \n
          5. Date Modified: DD/MM/YY \n
          6. Parameter List: \n
          7. Return type: \n
        ======FUNCTION COMMENT ENDS======*/

  render() {
    const {iconImage, buttonTitle, buttonDescription, onPress, style} =
      this.props;
    const {greyContainer, touchableStyle, fieldStyle} = styles;
    return (
      <View style={{justifyContent: 'center', flex: 1}}>
        <View style={[greyContainer, style]}>
          {/* <TouchableOpacity onPress={onPress}> */}
          <Label text="Add New Certification!" textColor="gray" />
          <TextField
            style={fieldStyle}
            placeholder={'Certification Name'}
            placeholderTextColor="#606060"
            hasBorder={true}
            onChangeText={value => this.props.usernameTextFieldChanged(value)}
            highlightColor="#EDF0F7"
            maxLength={16}
            value={this.props.username}
            autoCapitalize="none"
            autoCorrect={false}
            //   textContentType="number"
            //   keyboardType="number-pad"
          />
          <TextField
            style={fieldStyle}
            placeholder={'Certification Authority'}
            placeholderTextColor="#606060"
            hasBorder={true}
            onChangeText={value => this.props.usernameTextFieldChanged(value)}
            highlightColor="#EDF0F7"
            maxLength={16}
            value={this.props.username}
            autoCapitalize="none"
            autoCorrect={false}
            //   textContentType="number"
            //   keyboardType="number-pad"
          />
          <TextField
            style={fieldStyle}
            placeholder={'Authentication Number'}
            placeholderTextColor="#606060"
            hasBorder={true}
            onChangeText={value => this.props.usernameTextFieldChanged(value)}
            highlightColor="#EDF0F7"
            maxLength={16}
            value={this.props.username}
            autoCapitalize="none"
            autoCorrect={false}
            //   textContentType="number"
            //   keyboardType="number-pad"
          />
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/add.png')}
              style={touchableStyle}
            />
          </TouchableOpacity>
          {/* </TouchableOpacity> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  greyContainer: {
    //  flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 4,
    borderColor: '#EDF0F7',
    paddingVertical: 8,
    paddingHorizontal: 17,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '90%',
    borderRadius: 10,
    elevation: 1,
  },
  touchableStyle: {
    height: 60,
    width: 60,
    tintColor: 'green',
    marginTop: 20,
  },
  fieldStyle: {
    marginTop: 22,
    width: '90%',
    marginHorizontal: 24,
    backgroundColor: '#F6F7FB',
    borderRadius: 3,
  },
});

export default AddCertificationScreen;
