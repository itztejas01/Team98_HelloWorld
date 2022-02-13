import React, {Component} from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Label} from '../common';
import {TextField} from '../common/TextField';
import { experienceCompanyNameTextChanged, experienceJobDescriptionTextChanged, experienceWorkingTextChanged } from '../../action/StudentActions';
import { connect } from 'react-redux';

class AddExperienceScreen extends Component {

  render() {
    const {iconImage, buttonTitle, buttonDescription, onPress, style} =
      this.props;
    const {greyContainer, touchableStyle, fieldStyle} = styles;
    return (
      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          // backgroundColor: 'green',
          flex: 1,
        }}>
        <View style={[greyContainer, style]}>
          {/* <TouchableOpacity onPress={onPress}> */}
          <Label text="Add your experience!!" textColor="gray" />
          <TextField
            style={fieldStyle}
            placeholder={'Company Name'}
            placeholderTextColor="#606060"
            hasBorder={true}
            onChangeText={value => this.props.experienceCompanyNameTextChanged(value)}
            highlightColor="#EDF0F7"
            maxLength={16}
            value={this.props.experience_company_name}
            autoCapitalize="none"
            autoCorrect={false}
            //   textContentType="number"
            //   keyboardType="number-pad"
          />
          <TextField
            style={fieldStyle}
            placeholder={'Job Description'}
            placeholderTextColor="#606060"
            hasBorder={true}
            onChangeText={value => this.props.experienceJobDescriptionTextChanged(value)}
            highlightColor="#EDF0F7"
            maxLength={16}
            value={this.props.experience_job_desp}
            autoCapitalize="none"
            autoCorrect={false}
            //   multiLine={true}
            //   textContentType="number"
            //   keyboardType="number-pad"
          />
          <TextField
            style={fieldStyle}
            placeholder={'Experience in years'}
            placeholderTextColor="#606060"
            hasBorder={true}
            onChangeText={value => this.props.experienceWorkingTextChanged(value)}
            highlightColor="#EDF0F7"
            maxLength={16}
            value={this.props.experience_working_years}
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
    // justifyContent: 'center',
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
    experience_company_name: state.student.experience_company_name,
    experience_job_desp: state.student.experience_job_desp,
    experience_working_years: state.student.experience_working_years,
  }
}

export default connect(mapStateToProps, {
  experienceCompanyNameTextChanged,
  experienceJobDescriptionTextChanged,
  experienceWorkingTextChanged,
}) (AddExperienceScreen);
