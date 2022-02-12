import React, { Component } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Label } from '../common';

class Button extends Component {
  render() {

    const {
      leftIcon,
      rightIcon,
      buttonTitle,
      buttonTitleStyle,
      buttonTitleFontWeight,
      mode,
      borderStyle,
      tintColorRed,
      onPress,
      disabled,
      style,
    } = this.props;

    const {
      flexRow,
      flexMax,
      commonButtonStyle,
      lightButtonStyle,
      darkButtonStyle,
      greyBorderStyle,
      colorBorderStyle,
      redBorderStyle,
      buttonIconStyle,
      rightButtonIconStyle,
    } = styles;

    // default style set to light for wider support of icon png visibility.
    var finalButtonDarkOrLightStyle, finalButtonTextColor, finalButtonFontWeight, finalBorderStyle, finalIconColor;

    if (mode == 'dark') {
      finalButtonDarkOrLightStyle = darkButtonStyle;
      finalButtonFontWeight = 600;
      finalButtonTextColor = '#FFFFFF';
      finalIconColor = '#FFFFFF';
    } 
    else if(tintColorRed){
      finalBorderStyle = redBorderStyle;
      finalButtonTextColor = 'red';
      finalButtonDarkOrLightStyle = lightButtonStyle;
      finalButtonFontWeight = 400;
      finalIconColor = '#1B5ADE';
    }
    else {
      // border only if light button.
      if (borderStyle == 'color') {
        finalBorderStyle = colorBorderStyle;
      }
      else {
        finalBorderStyle = greyBorderStyle;
      }
      finalButtonTextColor = '#1B5ADE';
      finalButtonDarkOrLightStyle = lightButtonStyle;
      finalButtonFontWeight = 400;
      finalIconColor = '#1B5ADE';
    }

    if (buttonTitleFontWeight != undefined) {
      finalButtonFontWeight = buttonTitleFontWeight;
    }

    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[commonButtonStyle, finalButtonDarkOrLightStyle, finalBorderStyle, style]}
      >
        <View style={flexRow}>
          {/* {rightIcon && <View style={flexMax} />} */}
          {leftIcon && <Image
            source={leftIcon}
            style={[buttonIconStyle, { tintColor: finalIconColor }]}
            tintColor={finalIconColor}
          />}
          {buttonTitle && <Label
            text={buttonTitle}
            textColor={finalButtonTextColor}
            textSize={17}
            textWeight={finalButtonFontWeight}
            style={[{ letterSpacing: 0.4, }, buttonTitleStyle]}
          />}
          {/* {rightIcon && <View style={flexMax} />} */}
          {rightIcon && <Image
            source={rightIcon}
            style={[rightButtonIconStyle, { tintColor: finalIconColor }]}
            tintColor={finalIconColor}
          />}

        </View>
      </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexMax: {
    flex: 9,
  },
  commonButtonStyle: {
    paddingVertical: 12,
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightButtonStyle: {
    backgroundColor: '#F6F7FB',
  },
  darkButtonStyle: {
    backgroundColor: '#1B5ADE',
  },
  greyBorderStyle: {
    borderWidth: 1.7,
    borderColor: '#EDF0F7',
  },
  colorBorderStyle: {
    borderWidth: 1.7,
    borderColor: '#1B5ADE',
  },
  redBorderStyle:{
    borderWidth: 1.7,
    borderColor: 'red',
  },
  buttonIconStyle: {
    marginRight: 10,
    maxHeight: 22,
    maxWidth: 22,
  },
  rightButtonIconStyle: {
    marginLeft: 10,
    maxHeight: 22,
    maxWidth: 22,
  }
});

export { Button };