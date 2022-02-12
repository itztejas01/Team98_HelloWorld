import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';

class Label extends Component {

  textStyle(textColor, textWeight, textSize, textAlign, characterSpacing) {
    var fontFamily = '';

    if (textWeight <= 200) {
      fontFamily = 'Satoshi-Light';
    } else if (textWeight >= 201 && textWeight <= 400) {
      fontFamily = 'Satoshi-Regular';
    } else if (textWeight >= 401 && textWeight <= 600) {
      fontFamily = 'Satoshi-Medium';
    } else if (textWeight >= 601 && textWeight <= 700) {
      fontFamily = 'Satoshi-Bold';
    } else if (textWeight > 700) {
      fontFamily = 'Satoshi-Black';
    } else {
      fontFamily = 'Satoshi-Regular';
    }
    if (characterSpacing === undefined) {
      characterSpacing = 0;
    }

    return {
      color: textColor,
      fontFamily: fontFamily,
      fontSize: textSize,
      textAlign: textAlign,
      letterSpacing: characterSpacing,
    };
  }

  render() {
    const {
      text,
      textColor,
      textSize,
      textWeight,
      characterSpacing,
      style,
      ellippsizeMode,
      numberOfLines,
      children,
      textAlign,
    } = this.props;
    const {defaultTextStyle} = styles;

    return (
      <Text
        numberOfLines={numberOfLines}
        ellipsizeMode={ellippsizeMode}
        style={[
          defaultTextStyle,
          this.textStyle(
            textColor,
            textWeight,
            textSize,
            textAlign,
            characterSpacing,
          ),
          style,
        ]}>
        {text}
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  defaultTextStyle: {
    fontFamily: 'Satoshi-Black',
    color: 'black',
    fontSize: 10,
  },
});

export {Label};
