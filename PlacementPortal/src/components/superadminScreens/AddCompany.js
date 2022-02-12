import React, { Component } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { connect } from "react-redux";
import { CheckBox, Label, TextField } from "../common";
import { companyNameTextChanged, companyCheckboxChanged } from "../../action/SuperadminActions";

class AddCompany extends Component {
    render() {

        const {
            rootViewStyle,
            labelStyle,
            fieldStyle,
            buttonStyle,
            buttonTextStyle,
        } = styles;

        return(
            <ScrollView>
                <View style={rootViewStyle}>
                    <Label style={labelStyle} text="Comapany Name -- " textSize={17} textColor= 'black' />
                    <TextField
                        style={fieldStyle}
                        placeholder={'Email'}
                        placeholderTextColor="#606060"
                        hasBorder={true}
                        onChangeText={value => this.props.companyNameTextChanged(value)}
                        value={this.props.new_company_name}
                    />
                    <CheckBox style={{marginLeft: 25,marginTop: 30}} onPress={()=>this.props.companyCheckboxChanged(this.props.checkboxValue)} value={this.props.checkboxValue} titleText='Dream Company' titleStyle={{fontSize: 17}} />
                    <TouchableOpacity style={buttonStyle}>
                        <Text style={buttonTextStyle}> Submit </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
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
    buttonStyle: {
        width: 120,
        height: 50,
        backgroundColor: 'green',
        marginTop: 30,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    buttonTextStyle: {
        color: 'white',
    }
});

const mapStateToProps = state => {
    return{
        new_username_name: state.superAdmin.new_company_name,
        checkboxValue: state.superAdmin.companyCheckbox,
    }
};

export default connect(mapStateToProps, {
    companyNameTextChanged,
    companyCheckboxChanged,
}) (AddCompany);