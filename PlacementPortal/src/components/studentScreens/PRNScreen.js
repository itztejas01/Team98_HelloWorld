import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {Button, Label, TextField} from '../common';
import HomeScreen from '../HomeScreen';

import {usernameTextFieldChanged, passwordTextFieldChanged} from '../../action';

class PRNScreen extends Component {
  passwordValidation = () => {
    if (this.props.password == '') {
    } else {
      this.props.mobilenumChanged('');
      this.props.navigation.navigate('Welcome', {
        screen: 'SignIn',
      });
    }
  };

  emailIdValidation = () => {
    var validEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (this.props.emailId == '' || !this.props.emailId.match(validEmail)) {
      //   code
    } else {
      this.props.usernameTextFieldChanged('');
      this.props.passwordTextFieldChanged('');
      this.props.loginAPI();
    }
  };

  render() {
    const {
      viewStyle,
      fieldStyle,
      buttonStyle,
      iconStyle,
      loginStyle,
      touchableStyle,
    } = styles;

    return (
      <View style={viewStyle}>
        <Image
          source={require('../../assets/images/school.png')}
          style={iconStyle}
        />
        <Label
          text="Enter your PRN Number..."
          textColor="green"
          style={loginStyle}
          textSize={20}
        />
        <TextField
          style={fieldStyle}
          //   placeholder={'Email'}
          placeholderTextColor="#606060"
          hasBorder={true}
          onChangeText={value => this.props.usernameTextFieldChanged(value)}
          highlightColor="#EDF0F7"
          maxLength={16}
          value={this.props.username}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="number"
          keyboardType="number-pad"
        />
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/right-button.png')}
            style={touchableStyle}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: '100%',
  },
  fieldStyle: {
    marginTop: 22,
    width: '85%',
    marginHorizontal: 24,
    backgroundColor: '#F6F7FB',
    borderRadius: 3,
  },
  buttonStyle: {
    width: '30%',
    marginTop: '10%',
    height: 50,
    backgroundColor: 'green',
    borderRadius: 10,
    marginBottom: 10,
  },
  iconStyle: {
    height: 100,
    width: 100,
    // marginTop: 100,
    tintColor: 'green',
  },
  loginStyle: {
    marginTop: 20,
  },
  touchableStyle: {
    height: 60,
    width: 60,
    tintColor: 'green',
    marginTop: 20,
  },
});

mapStateToProps = state => {
  return {
    username: state.login.username,
  };
};

export default connect(mapStateToProps, {
  usernameTextFieldChanged,
})(PRNScreen);
