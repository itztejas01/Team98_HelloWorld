import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {Button, Label, TextField,ModalLoader} from './common';
import HomeScreen from './HomeScreen';

import {
  usernameTextFieldChanged,
  passwordTextFieldChanged,
  loginAPI,
} from '../action';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};
  }

  submitForm = (userName, password) => {
    console.log(userName, password);
    var validEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (userName == '') {
      Alert.alert('Email are empty');
    } else if (password === '') {
      Alert.alert('password are empty');
    } else {
      this.props.loginAPI(userName, password, this.props.navigation)
      .then(response=>{
        if(response){
          this.props.usernameTextFieldChanged('')
          this.props.passwordTextFieldChanged('')
        }
      })
    }
  };

  loading(){
    if(this.props.login_loader){
      return <ModalLoader />
    }
  }
  render() {
    const {viewStyle, fieldStyle, buttonStyle, iconStyle, loginStyle} = styles;
    return (
      <View style={viewStyle}>
        <Image
          source={require('../assets/images/recruitment.png')}
          style={iconStyle}
        />
        <Label
          text="LOGIN"
          textColor="green"
          style={loginStyle}
          textSize={20}
        />
        <TextField
          style={fieldStyle}
          placeholder={'Email'}
          placeholderTextColor="#606060"
          hasBorder={true}
          value={this.props.username}
          onChangeText={value => this.props.usernameTextFieldChanged(value)}
          highlightColor="#EDF0F7"
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />

        <TextField
          style={fieldStyle}
          placeholder={'Password'}
          placeholderTextColor="#606060"
          hasBorder={true}
          onChangeText={value => this.props.passwordTextFieldChanged(value)}
          highlightColor="#EDF0F7"
          value={this.props.password}
        />

        <Button
          buttonTitle="Next"
          mode="dark"
          onPress={() => {
            this.submitForm(this.props.username, this.props.password);
          }}
          style={buttonStyle}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ForgotPassword')}>
          <Label
            text="Forgot Password? Click here..."
            textColor="gray"
            textSize={12}
          />
        </TouchableOpacity>
        {this.loading()}
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
  },
  loginStyle: {
    marginTop: 20,
  },
});

const mapStateToProps = state => {
  return {
    username: state.login.login_username,
    password: state.login.login_password,
    login_loader:state.login.login_loader
  };
};

export default connect(mapStateToProps, {
  usernameTextFieldChanged,
  passwordTextFieldChanged,
  loginAPI,
})(Login);
