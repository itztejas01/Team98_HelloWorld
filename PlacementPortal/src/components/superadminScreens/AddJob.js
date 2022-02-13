import React, { Component } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { connect } from "react-redux";
import { Label, TextField } from "../common";
import { jobTitleTextChanged, companyNameForJobChanged, jobCTCTextChanged, jobDespTextChanged } from "../../action";

class AddJob extends Component {
    render() {

        const {
            rootViewStyle,
            dropdownStyle,
            textStyle,
            textFieldStyle,
            submitButtonStyle,
        } = styles;

        return(
            <ScrollView>
                <View style='rootViewStyle'>
                    <TouchableOpacity style={dropdownStyle}>
                        <Label text={this.props.companyName} textColor='green' texSize={16} />
                    </TouchableOpacity>
                    <Label style={textStyle} text='Job Title' textColor='green' texSize={16} />
                    <TextField style={textFieldStyle} hasBorder={true} value={this.props.job_title} onChangeText={value => this.props.jobTitleTextChanged(value)} />
                    <Label style={textStyle} text='Job CTC' textColor='green' texSize={16} />
                    <TextField style={textFieldStyle} hasBorder={true} value={this.props.job_ctc} onChangeText={value => this.props.jobCTCTextChanged(value)} />
                    <Label style={textStyle} text='Job Description' textColor='green' texSize={16} />
                    <TextField style={[textFieldStyle, {height: 200}]} textAlignVertical="top" hasBorder={true} value={this.props.job_desp} onChangeText={value => this.props.jobDespTextChanged(value)} multiline={true} />
                    <TouchableOpacity style={submitButtonStyle}>
                        <Label text='Submit' textColor='white' textSize={18} />
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
    dropdownStyle:{
        width: 300,
        height: 50,
        borderColor: 'green',
        borderWidth: 2,
        borderRadius: 5,
        paddingLeft: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 30,
    },
    textStyle:{
        marginLeft: 26,
        marginTop: 30,
        fontSize: 17,
        marginBottom: 5,
    },
    textFieldStyle: {
        borderWidth: 2,
        borderColor: 'green',
        alignSelf: 'center',
        height: 50,
        width: 300,
        borderRadius: 5,
    },
    submitButtonStyle: {
        width: 120,
        height: 40,
        marginTop: 30,
        backgroundColor: 'green',
        alignSelf: 'center',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

const mapStateToProps = state => {
    return{
        job_title: state.superAdmin.job_title,
        companyName: state.superAdmin.companyNameForJob,
        job_desp: state.superAdmin.job_desp,
    }
}

export default connect(mapStateToProps, {
    jobTitleTextChanged,
    companyNameForJobChanged,
    jobCTCTextChanged,
    jobDespTextChanged,
}) (AddJob);