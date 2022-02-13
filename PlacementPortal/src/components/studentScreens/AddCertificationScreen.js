import React, {Component} from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Label} from '../common';
import {TextField} from '../common/TextField';
import { certificationAuthenticationTextChanged, certificationNameTextChanged, certificationAuthorityTextChanged } from '../../action/StudentActions';
import { connect } from 'react-redux';

class AddCertificationScreen extends Component {

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
            onChangeText={value => this.props.certificationNameTextChanged(value)}
            highlightColor="#EDF0F7"
            maxLength={16}
            value={this.props.certification_name}
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
            onChangeText={value => this.props.certificationAuthorityTextChanged(value)}
            highlightColor="#EDF0F7"
            maxLength={16}
            value={this.props.certification_authority}
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
            onChangeText={value => this.props.certificationAuthenticationTextChanged(value)}
            highlightColor="#EDF0F7"
            maxLength={16}
            value={this.props.certification_authentication_number}
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

const mapStateToProps = state => {
  return {
    certification_name: state.student.certification_name,
    certification_authority: state.staudent.certification_authority,
    certification_authentication_number: state.student.certificate_authentication_number,
  }
}

export default connect(mapStateToProps, {
  certificationAuthorityTextChanged,
  certificationAuthenticationTextChanged,
  certificationNameTextChanged,
}) (AddCertificationScreen);
