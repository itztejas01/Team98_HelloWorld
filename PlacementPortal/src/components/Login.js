import React, { Component } from "react";
import { StyleSheet, View, } from "react-native";
import { connect } from "react-redux";
import { Button, Label, TextField} from "./common";
import HomeScreen from "./HomeScreen";

import { usernameTextFieldChanged, passwordTextFieldChanged,loginAPI } from "../actions";

class Login extends Component{
    constructor(props) {  
        super(props);  
        this.state = {email: '', password:''};
    }

    passwordValidation = () => {
        if (this.props.password == '') {

        } else {
          this.props.mobilenumChanged('')
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
            this.props.loginAPI();
            this.props.usernameTextFieldChanged('');
            this.props.passwordTextFieldChanged('');
        }
    };

    render(){

        const{
            viewStyle, fieldStyle, buttonStyle
        } = styles;

        return(
            <View style={viewStyle}>
                <TextField
                  style={fieldStyle}
                  placeholder={'Email'}
                  placeholderTextColor="#606060"
                  hasBorder={true}
                  onChangeText={value => this.props.usernameTextFieldChanged(value)}
                  highlightColor="#EDF0F7"
                  value={this.props.username}
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
                        if (this.state.email != '' || this.state.password != 'admin'){
                            console.log("Enter proper email");
                        }else{
                            this.props.navigation.navigate(HomeScreen);
                            // console.log(this.props.navigation)
                        }
                    }}
                    style={buttonStyle}

                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        height:'100%'
        
    },
    fieldStyle:{
        marginTop: 22,
        width: '87%',
        marginHorizontal: 24,
        backgroundColor: '#F6F7FB',
        
    },
    buttonStyle:{
        width:'30%',
        marginTop:'10%',
        height:50,
        

    },

});

const mapStateToProps = state => {
    return{
        username: state.login.username,
        password: state.login.password,
    }
}

export default connect(mapStateToProps, {
    usernameTextFieldChanged,
    passwordTextFieldChanged,
    loginAPI
}) (Login);