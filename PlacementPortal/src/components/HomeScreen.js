import React, { Component } from "react";
import { StyleSheet,View,Text } from "react-native";
import {InfoCard} from './common'

class HomeScreen extends Component{
    render(){

        const{
            // code
            mainViewStyle, 
            textStyle
        } = styles;

        return(
            <View style={mainViewStyle}>
                <Text style={textStyle}>This</Text>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    // code
    mainViewStyle:{
        backgroundColor:'white',
        flex:1
    },
    textStyle:{
        color:'black'
    }
});

export default HomeScreen;