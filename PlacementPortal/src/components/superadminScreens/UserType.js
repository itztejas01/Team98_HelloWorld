import React, { Component } from 'react';
import { View } from 'react-native';
import { TextField,Label,ModalLoader } from '../common';

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
    
      handleAnswers = (key, type
      ) => {
        this.props.userTypeChanged(type);
        this.props.userKeyChanged(key);
        this.setModalVisible(false)
      };
    
    render() {
        const {viewStyle, fieldStyle, buttonStyle} = styles;
    
    return (
      <View style={viewStyle}>  
        <TextField
        style={fieldStyle}
        placeholder={'Username'}
        placeholderTextColor="#606060"
        hasBorder={true}
        onChangeText={value => this.props.usernameChanged(value)}
        highlightColor="#EDF0F7"
        value={this.props.username}
        />

        <TextField
          style={fieldStyle}
          placeholder={'Password'}
          placeholderTextColor="#606060"
          hasBorder={true}
          onChangeText={value => this.props.passwordChanged(value)}
          highlightColor="#EDF0F7"
          value={this.props.password}
        />

        <DropDown
        value={this.props.user_type}
        onPressMain={() => {
        this.setModalVisible(true);

        }}
        onPress={() => {
        this.setModalVisible(true);
        }}
        style={{ height: 48, paddingHorizontal: 20, marginTop: 24 }}
        textStyle={{ letterSpacing: 0.3, }}
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
                    style={{ backgroundColor: '#F6F7FB', paddingTop: 24 }}
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
                    <Image resizeMode='contain' onPress={() => { this.setModalVisible(false) }} style={{ width: 10, height: 10, }} source={require('../assets/Icons/NewIcons/Close-Button-Blue.png/Close-Button-Blue.png')} />
                </TouchableOpacity>
                </View>
                <NewCommonRadioButton
                PROP={TYPE}
                style={{ paddingTop: 16, paddingLeft: 17, }}
                defaultSelected={this.props.user_key}
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
    )
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
      width: '87%',
      marginHorizontal: 24,
      backgroundColor: '#F6F7FB',
    },
  });

  export default (UserType);