import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

class OnBoardingScreeen extends Component {
    render() {

        const {
            rootViewStyle,
        } = styles;

        return(
            <View style='rootViewStyle'>
                {/* code */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rootViewStyle: {
        flex: 1, 
    },
});

export default OnBoardingScreeen;