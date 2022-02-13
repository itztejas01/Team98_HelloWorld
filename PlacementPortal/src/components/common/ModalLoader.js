import React, {Component} from 'react';
import {View, StyleSheet, Modal, ActivityIndicator} from 'react-native';
import {Label} from '.';

class ModalLoader extends Component {
  render() {
    const {modalBackground, activityIndicatorContainer} = styles;
    return (
      <Modal transparent={true} visible={true} animationType="slide">
        <View style={modalBackground}>
          <View style={activityIndicatorContainer}>
            <ActivityIndicator size="large" color='#1B5ADE'/>
            <Label
              textColor="#1B5ADE"
              textWeight={600}
              text="Loading..."
              textSize={16}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000040',
  },
  activityIndicatorContainer: {
    backgroundColor: 'white',
    height: 120,
    width: 120,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding:15,
  },
});
export {ModalLoader};
