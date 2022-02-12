import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Label } from '.';

class NewCommonRadioButton extends Component {
  state = {
    value:
      this.props.defaultSelected === undefined
        ? null
        : this.props.defaultSelected,
  };

  handleValue = (key, name) => {
    const {handleAnswers} = this.props;

    this.setState({
      value: key,
    });
    if (handleAnswers !== undefined) {
      handleAnswers(key, name);
    }
    // console.log(this.state.value);
  };
  render() {
    const {
      container,
      mainContainer,
      textStyle,
      unselectedTextStyle,
      radioCircle,
      invRadioCircle,
      conditionalBorderStyle,
    } = styles;
    const {value} = this.state;
    const {
      PROP,
      style,
      titleStyle,
      titleTextWeight,
      mainContentStyle,
      inv,
      buttonStyle,
      showSeparator,
      selectedRadioStyle,
    } = this.props;
    if (inv === true) {
      return (
        <>
          {PROP.map((res, index) => {
            return (
              <TouchableOpacity
                onPress={() => this.handleValue(res.key, res.name)}>
                <View style={[mainContainer, style]}>
                  <View style={container}>
                    <Label
                      text={res.name}
                      style={[
                        textStyle,
                        titleStyle,
                        value !== res.key ? unselectedTextStyle : null,
                      ]}
                      textWeight={
                        titleTextWeight == undefined ? 500 : titleTextWeight
                      }
                    />
                    {res.mainContent == undefined ? null : (
                      <Label
                        text={res.mainContent}
                        style={[
                          textStyle,
                          mainContentStyle,
                          value !== res.key ? unselectedTextStyle : null,
                        ]}
                        textWeight={500}
                      />
                    )}
                  </View>
                  <View style={[invRadioCircle, buttonStyle]}>
                    {value === res.key && <View style={styles.selectedRb} />}
                  </View>
                </View>
                {showSeparator && PROP[index + 1] && (
                  <View style={conditionalBorderStyle} />
                )}
              </TouchableOpacity>
            );
          })}
          {/* <Text> Selected: {this.state.value} </Text> */}
        </>
      );
    } else {
      return (
        <>
          {PROP.map((res, index) => {
            return (
              <TouchableOpacity
                onPress={() => this.handleValue(res.key, res.name)}>
                <View style={[mainContainer, style]}>
                  <View style={[radioCircle, buttonStyle]}>
                    {value === res.key && <View style={[styles.selectedRb,selectedRadioStyle]} />}
                  </View>
                  <View style={container}>
                    <Label
                      text={res.name}
                      style={[
                        textStyle,
                        titleStyle,
                        value !== res.key ? unselectedTextStyle : null,
                      ]}
                      textWeight={
                        titleTextWeight == undefined ? 500 : titleTextWeight
                      }
                    />
                    {res.mainContent == undefined ? null : (
                      <Label
                        text={res.mainContent}
                        style={[
                          textStyle,
                          mainContentStyle,
                          value !== res.key ? unselectedTextStyle : null,
                        ]}
                        textWeight={500}
                      />
                    )}
                  </View>
                </View>
                {showSeparator && PROP[index + 1] && (
                  <View style={conditionalBorderStyle} />
                )}
              </TouchableOpacity>
            );
          })}
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
  radioCircle: {
    height: 15,
    width: 15,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#8A8A8A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    marginTop: 4,
  },
  invRadioCircle: {
    height: 15,
    width: 15,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#8A8A8A',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
    marginTop: 4,
  },
  textStyle: {
    fontSize: 15,
    lineHeight: 22,
    color: '#4B4B4B',
  },
  unselectedTextStyle: {
    color: '#8A8A8A',
  },
  selectedRb: {
    height: 15,
    width: 15,
    borderRadius: 18,
    borderWidth: 4.5,
    // borderRadius: 14,
    borderColor: '#1B5ADE',
  },
  conditionalBorderStyle: {
    borderBottomWidth: 0.7,
    borderBottomColor: '#CCC',
  },
});

export { NewCommonRadioButton };
