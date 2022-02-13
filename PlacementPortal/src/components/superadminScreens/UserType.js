import React, { Component } from 'react';
import { Image,View,StyleSheet,TouchableOpacity, Modal } from 'react-native';
import { Button,TextField,Label, DropDown,TitleViewAllButtonHeader,NewCommonRadioButton } from '../common';
import { connect } from 'react-redux';
import {
    usernameTypeChanged,
    passwordTypeChanged,
    usertypeNameChanged,
    usertypeKeyChanged,
  } from '../../action';

const TYPE = [
    {
      key: '1',
      name: 'Super Admin',
    },
    {
      key: '2',
      name: 'Departmental Admin',
    },
    {
      key: '3',
      name: 'Student Admin',
    },
  ];

class UserType extends Component {

    state = {
        modalVisible: false,
        userType: '',
        username: '',
        password: '',
      };
    
      setModalVisible = modalVisible => {
        this.setState({ modalVisible: modalVisible });
      };
    
      handleAnswers = (key, name
      ) => {
        this.props.usertypeNameChanged(name);
        this.props.usertypeKeyChanged(key);
        this.setModalVisible(false)
      };

      _onSubmit() {
        if (this.props.username_type === '') {
          this.setState({ username: 'red' });
        } else if (this.props.password_type === '') {
          this.setState({ password: 'red' });
        // } else (this.props.usertype_name === 'User-Type') {
        //   this.setState({ userType: 'red' });
        }
        this.setState({ username: '' });
        this.setState({ password: '' });
        this.setState({ userType: '' });
        this.props.usernameTypeChanged('');
        this.props.passwordTypeChanged('');
        this.props.usertypeNameChanged('User-Type');
      }
      
    render() {
        const {
            viewStyle, 
            fieldStyle, 
            buttonStyle,
            cardStyle,
            selectedRb} = styles;
        // console.log('password',this.props.password_type);
    
    return (
      <View style={viewStyle}>  
      <View style={cardStyle}>
        <TextField
        style={fieldStyle}
        placeholder={'Username'}
        placeholderTextColor="#606060"
        hasBorder={true}
        value={this.props.username_type}
        onChangeText={value => this.props.usernameTypeChanged(value)}
        highlightColor="#EDF0F7"
        validationErrorTextField={this.state.username == 'red' ? true : false}
        placeholder={
          this.state.username == 'red' ? 'Please enter your Username' : 'Username'
        }
        />

        <TextField
          style={fieldStyle}
          placeholder={'Password'}
          placeholderTextColor="#606060"
          hasBorder={true}
          onChangeText={passwordType => this.props.passwordTypeChanged(passwordType)}
          highlightColor="#EDF0F7"
          value={this.props.password_type}
          validationErrorTextField={this.state.password == 'red' ? true : false}
          placeholder={
            this.state.password == 'red' ? 'Please enter your password' : 'Password'
          }
        />

        <DropDown
        value={this.props.usertype_name}
        onPressMain={() => {
        this.setModalVisible(true);
        }}
        onPress={() => {
        this.setModalVisible(true);
        }}
        style={{ height: 48, paddingHorizontal: 20, marginTop: 24, width: '57%', borderRadius:10, borderColor:'green' }}
        textStyle={{ letterSpacing: 0.3, }}
        validationError={this.state.userType == 'red' ? true : false}
        placeholder={
          this.state.userType == 'red' ? 'Please enter a User-Type' : 'User-Type'
        }
        /> 

        <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
        this.setModalVisible(false);
        }}
        >
            <TouchableOpacity
            onPress={() => this.setModalVisible(false)}
            activeOpacity={1}
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                backgroundColor: '#00000040',
            }}
            >
            <TouchableOpacity activeOpacity={1} style={{ width: '90%', alignSelf: 'center', backgroundColor: '#F6F7FB', justifyContent: 'space-around', paddingBottom: 25, paddingHorizontal: 10 }}>
                <View >
                <TitleViewAllButtonHeader
                    title='SELECT USER-TYPE'
                    viewBorderBottom={true}
                    style={{ backgroundColor: '#F6F7FB', paddingTop: 24, width:'87%' }}
                    headerStyle={{ letterSpacing: 2, }}
                    textWeight={600}
                    textSize={12}
                    viewBorderBottom={true}
                    textColor="#8A8A8A"
                    onPress={() => { this.setModalVisible(false) }}
                />
                <TouchableOpacity
                    onPress={() => { this.setModalVisible(false) }}
                    style={{ position: 'absolute', right: 0, height: '80%', width: 30, paddingTop: 27 }}>
                    <Image resizeMode='contain' onPress={() => { this.setModalVisible(false) }} style={{ width: 10, height: 10, }}  />
                </TouchableOpacity>
                </View>
                <NewCommonRadioButton
                PROP={TYPE}
                style={{ paddingTop: 16, paddingLeft: 17, }}
                defaultSelected={this.props.usertype_key}
                titleStyle={{ fontSize: 17 }}
                titleTextWeight={600}
                buttonStyle={buttonStyle}
                selectedRb={selectedRb}
                handleAnswers={this.handleAnswers}
                />
            </TouchableOpacity>
            </TouchableOpacity>
         </Modal>
         </View>

        <Button
            buttonTitle="Submit"
            mode="dark"
            onPress={() => {
              this._onSubmit();
            }}
            style={{ marginTop: 36, marginBottom: 12, width: '50%' }}
          />
      </View> 
    )
  }
}

const styles = StyleSheet.create({
    viewStyle: {
      alignItems: 'center',
      // justifyContent: 'center',
      backgroundColor: 'white',
      height: '100%',
    },
    fieldStyle: {
      marginTop: 22,
      width: '87%',
      marginHorizontal: 24,
      borderRadius: 10,
      borderColor: 'green',
      backgroundColor: '#F6F7FB',
    },
    selectedRb: {
        height: 15,
        width: 15,
        borderRadius: 18,
        borderWidth: 4.5,
        borderColor: '#1B5ADE',
    },
    cardStyle:{
      // flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderWidth:2,
      borderTopLeftRadius:70,
      borderBottomRightRadius:70,
      borderColor:'black',
      paddingBottom:50,
      paddingTop:30,
      marginHorizontal:10,
      marginTop:30
    },
    buttonStyle: {
        height: 12,
        width: 12,
        borderRadius: 18,
        borderWidth: 1.3,
        borderColor: '#1B5ADE',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
        marginTop: 6,
      },
  });

const mapStateToProps = state => {
    return {
      username_type: state.superAdmin.user_name,
      password_type: state.superAdmin.password,
      usertype_name: state.superAdmin.usertype_name,
      usertype_key: state.superAdmin.usertype_key,
    }
}

  export default connect(mapStateToProps, {
    usernameTypeChanged,
    passwordTypeChanged,
    usertypeNameChanged,
    usertypeKeyChanged,
  })(UserType);