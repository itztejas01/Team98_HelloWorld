import React, { Component } from "react";
import { TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import { Label } from "../common";

class SuperAdminDashoard extends Component {
    render(){

        const {
            rootViewStyle,
            cardStyle,
        } = styles;

        return(
            <ScrollView>
                <View style={rootViewStyle}>
                    <TouchableOpacity style={cardStyle}>
                        <Label text={this.props.total_students} textSize={50} textColor='green' />
                        <Label text='Students' textSize={40} style={{alignSelf: 'flex-end', marginTop: 30}} textColor='green' />
                    </TouchableOpacity>
                    <TouchableOpacity style={cardStyle}>
                        <Label text={this.props.total_companies} textSize={50} textColor='green' />
                        <Label text='Companies' textSize={40} style={{alignSelf: 'flex-end', marginTop: 30}} textColor='green' />
                    </TouchableOpacity>
                    <TouchableOpacity style={cardStyle}>
                        <Label text={this.props.total_jobs} textSize={50} textColor='green' />
                        <Label text='Jobs' textSize={40} style={{alignSelf: 'flex-end', marginTop: 30}} textColor='green' />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    rootViewStyle: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: 'green',
        paddingBottom: 30,
    },
    cardStyle: {
        width: '90%',
        height: 200,
        backgroundColor: 'white',
        elevation: 5,
        padding: 20,
        marginTop: 20,
        borderRadius: 10,
    },
});

const mapStateToProps = state => {
    return{
        total_students: state.superAdmin.total_students,
        total_companies: state.superAdmin.total_companies,
        total_jobs: state.superAdmin.total_jobs,
    }
}

export default connect(mapStateToProps, {
    // code
}) (SuperAdminDashoard);