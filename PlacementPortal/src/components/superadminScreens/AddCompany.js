import React, {Component} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {Label, TextField} from '../common';
import {companyNameTextChanged} from '../../action';

class AddCompany extends Component {
  render() {
    const {rootViewStyle, labelStyle, fieldStyle} = styles;

    return (
      <ScrollView>
        <View style={rootViewStyle}>
          <Label
            style={labelStyle}
            text="Comapany Name -- "
            textSize={17}
            textColor="black"
          />
          <TextField
            style={fieldStyle}
            placeholder={'Email'}
            placeholderTextColor="#606060"
            hasBorder={true}
            onChangeText={value => this.props.companyNameTextChanged(value)}
            value={this.props.new_company_name}
          />
          {/* <CheckBox value={true} /> */}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  rootViewStyle: {
    flex: 1,
  },
  labelStyle: {
    marginLeft: 20,
    marginTop: 30,
  },
  fieldStyle: {
    marginTop: 14,
    width: '87%',
    marginHorizontal: 24,
    backgroundColor: '#F6F7FB',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
  },
});

const mapStateToProps = state => {
  return {
    new_username_name: state.superAdmin.new_company_name,
  };
};

export default connect(mapStateToProps, {
  companyNameTextChanged,
})(AddCompany);
