import React, { Component } from "react";
import { StyleSheet, View, } from "react-native";
import { Button, Label, TextField} from "./common";
import HomeScreen from "./HomeScreen";

class Login extends Component{
    constructor(props) {  
        super(props);  
        this.state = {email: '', password:''};  
    }  
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
                  onChangeText={value => this.setState({email:value})}
                  highlightColor="#EDF0F7"/>
                
                <TextField
                  style={fieldStyle}
                  placeholder={'Password'}
                  placeholderTextColor="#606060"
                  hasBorder={true}
                  onChangeText={value => this.setState({password:value})}
                  highlightColor="#EDF0F7" />
                
                <Button
                    buttonTitle="Next"
                    mode="dark"
                    onPress={() => {
                        if (this.state.email != 'admin' || this.state.password != 'admin'){
                            console.log("Enter proper email");
                        }else{
                            this.props.navigation.navigate(HomeScreen)
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

export default Login;
