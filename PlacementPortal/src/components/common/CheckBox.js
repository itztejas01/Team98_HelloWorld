import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Label} from '.';

class CheckBox extends Component {

  render() {
    const {
      container,
      mainContainer,
      textStyle,
      boxStyle,
      boxInv,
      mainContainerInv,
    } = styles;
    // const {} = this.state;
    const {titleText, mainText, style, titleStyle, mainContentStyle, inv, onPress, value} =
      this.props;
    if (inv === true) {
      return (
        <>
          <TouchableOpacity onPress={this.handleValue} onPressIn={onPress} >
            <View style={[mainContainerInv, style]}>
              <View style={container}>
                <Label
                  text={titleText}
                  style={[textStyle, titleStyle]}
                  textWeight={400}
                />
                {mainText == undefined ? null : (
                  <Label
                    text={mainText}
                    style={[textStyle, mainContentStyle]}
                    textWeight={400}
                  />
                )}
              </View>
              <View style={boxInv}>
                {value === false && (
                  <Image
                    source={require('../../assets/icons/checkbox.png')}
                    style={styles.selectedRb}
                  />
                )}
              </View>
            </View>
          </TouchableOpacity>
          {/* <Text> Selected: {this.state.value} </Text> */}
        </>
      );
    } else {
      return (
        <>
          <TouchableOpacity onPress={onPress} >
            <View style={[mainContainer, style]}>
              <View style={boxStyle}>
                {value === false && (
                  <Image
                    source={require('../../assets/icons/checkbox.png')}
                    style={styles.selectedRb}
                  />
                )}
              </View>
              <View style={container}>
                <Label
                  text={titleText}
                  style={[textStyle, titleStyle]}
                  textWeight={400}
                />
                {mainText == undefined ? null : (
                  <Label
                    text={mainText}
                    style={[textStyle, mainContentStyle]}
                    textWeight={400}
                  />
                )}
              </View>
            </View>
          </TouchableOpacity>
          {/* <Text> Selected: {this.state.value} </Text> */}
        </>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    // width: 309,
    // height: 132,
    // borderWidth: 1,
    // flex: 1,
    borderColor: 'black',
  },
  mainContainer: {
    // width: 327,
    // height: 132,
    // borderWidth: 1,
    // flex: 1,
    borderColor: 'black',
    flexDirection: 'row',
  },
  mainContainerInv: {
    borderColor: 'black',
    flexDirection: 'row',
  },
  boxStyle: {
    height: 20,
    width: 20,
    // borderRadius: 18,
    borderWidth: 1,
    borderColor: '#8A8A8A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    // marginTop: 1,
  },
  boxInv: {
    height: 20,
    width: 20,
    // borderRadius: 18,
    borderWidth: 1,
    borderColor: '#8A8A8A',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    // marginTop: 8,
  },
  textStyle: {
    fontSize: 15,
    lineHeight: 22,
    color: '#4B4B4B',
  },
  selectedRb: {
    width: 20,
    height: 20,
    // borderRadius: 14,
    backgroundColor: '#1B5ADE',
  },
});

export {CheckBox};
