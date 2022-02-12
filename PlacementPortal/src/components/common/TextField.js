import React, {Component} from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';

class TextField extends Component {
  state = {
    isFocused: false,
  };

  customTextInputStyle(hasIcon, textAlignVertical, fontColor, letterSpacing) {
    if (hasIcon) {
      if (textAlignVertical) {
        return {
          flex: 9,
          textAlignVertical: textAlignVertical,
          color: fontColor,
          fontFamily: 'Satoshi-Regular',
          letterSpacing: letterSpacing,
        };
      }
      return {
        flex: 9,
        color: fontColor,
        fontFamily: 'Satoshi-Regular',
        letterSpacing: letterSpacing,
        // textAlignVertical: 'center',
      };
    } else {
      if (textAlignVertical) {
        return {
          flex: 9,
          textAlignVertical: textAlignVertical,
          letterSpacing: letterSpacing,
          color: fontColor,
          fontFamily: 'Satoshi-Regular',
        };
      }
      return {
        flex: 1,
        color: fontColor,
        fontFamily: 'Satoshi-Regular',
        letterSpacing: letterSpacing,
        // textAlignVertical: 'center',
      };
    }
  }

  highlightColor(customBorderColor, highlightColor, defaultHightlightColor, validationTextField) {
    if (highlightColor !== undefined && this.state.isFocused) {
      return '#1B5ADE';
    }
    if (highlightColor !== undefined) {
      return highlightColor;
    }
    if (validationTextField) {
      return customBorderColor;
    }
    if (highlightColor === undefined && this.state.isFocused && validationTextField !== undefined) {
      return '#1B5ADE';
    }
    if (highlightColor === undefined) {
      return customBorderColor;
    } else {
      return customBorderColor;
    }
  }

  customTextInputViewStyle(
    hasBorder,
    customBorderColor,
    highlightColor,
    defaultHightlightColor,
    validationTextField,
  ) {
    if (hasBorder) {
      return {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        height: 46,
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: this.highlightColor(
          customBorderColor,
          highlightColor,
          defaultHightlightColor,
          validationTextField,
        ),
        paddingLeft: 15,
      };
    }
    // if (this.state.isFocused && hasBorder === true) {
    //   return {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     width: '95%',
    //     height: 46,
    //     borderWidth: 1,
    //     borderColor: 'black',
    //     paddingLeft: 15,
    //   };
    // }
    if (this.state.isFocused && highlightColor !== undefined) {
      return {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        height: 46,
        borderWidth: 1,
        borderColor: highlightColor,
        paddingLeft: 15,
        elevation: 10,
        backgroundColor: 'white',
        paddingLeft: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
      };
    }
    if (this.state.isFocused && highlightColor === undefined) {
      return {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        height: 46,
        borderWidth: 1,
        borderColor: '#1B5ADE',
        paddingLeft: 15,
        elevation: 10,
        backgroundColor: 'white',
        paddingLeft: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
      };
    } else {
      return {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        height: 46,
        elevation: 10,
        backgroundColor: 'white',
        paddingLeft: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
      };
    }
  }

  render() {
    const {
      onChangeText,
      placeholder,
      placeholderTextColor,
      onFocus,
      autoFocus,
      keyboardType,
      maxLength,
      children,
      value,
      style,
      editable,
      hasBorder,
      textFieldIcon,
      tintColor,
      onPressIn,
      onPressOut,
      multiline,
      numberOfLines,
      secureTextEntry,
      textAlignVertical,
      highlightColor,
      letterSpacing,
      validationErrorTextField,
    } = this.props;

    const {imageStyle} = styles;

    var customPlaceholderColor = 'black';
    var customBorderColor = '#606060';
    var imageColor = '#606060';
    var fontColor = 'black';
    var defaultHightlightColor = '#1B5ADE';

    var finalLetterSpacing = 0;

    if (letterSpacing) {
      finalLetterSpacing = letterSpacing;
    }

    if (tintColor) {
      customPlaceholderColor = tintColor;
      customBorderColor = tintColor;
      imageColor = tintColor;
      fontColor = tintColor;
    } else if (placeholderTextColor) {
      customPlaceholderColor = placeholderTextColor;
      imageColor = placeholderTextColor;
    }

    var errorBorderColor = 'red';

    if (validationErrorTextField) {
      var errorHasBorder = true;
      return(
        <View
          style={[
            this.customTextInputViewStyle(
              errorHasBorder,
              errorBorderColor,
              undefined,
              customBorderColor,
              validationErrorTextField,
            ),
            style,
          ]}>
          <TextInput
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={errorBorderColor}
            onFocus={onFocus}
            autoFocus={autoFocus}
            keyboardType={keyboardType}
            maxLength={maxLength}
            children={children}
            value={value}
            editable={editable}
            // style={this.customTextInputStyle(
            //   false,
            //   textAlignVertical,
            //   fontColor,
            // )}
            style={this.customTextInputStyle(
              false,
              textAlignVertical,
              customPlaceholderColor,
              finalLetterSpacing,
            )}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            multiline={multiline}
            numberOfLines={numberOfLines}
            secureTextEntry={secureTextEntry}
            onFocus={() => {
              this.setState({isFocused: true});
            }}
            onBlur={() => {
              this.setState({isFocused: false});
            }}
            selectionColor={errorBorderColor}
          />
        </View>
      )
    }

    if (textFieldIcon) {
      return (
        <View
          style={[
            this.customTextInputViewStyle(
              hasBorder,
              customBorderColor,
              defaultHightlightColor,
            ),
            style,
          ]}>
          <Image
            style={imageStyle}
            source={textFieldIcon}
            resizeMode="contain"
            tintColor={imageColor}
          />
          <TextInput
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={customPlaceholderColor}
            onFocus={onFocus}
            autoFocus={autoFocus}
            keyboardType={keyboardType}
            maxLength={maxLength}
            children={children}
            value={value}
            editable={editable}
            style={this.customTextInputStyle(
              true,
              textAlignVertical,
              fontColor,
              finalLetterSpacing,
            )}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            multiline={multiline}
            numberOfLines={numberOfLines}
            secureTextEntry={secureTextEntry}
            onFocus={() => {
              this.setState({isFocused: true});
            }}
            onBlur={() => {
              this.setState({isFocused: false});
            }}
            selectionColor={'#1B5ADE'}
          />
        </View>
      );
    } else {
      return (
        <View
          style={[
            this.customTextInputViewStyle(
              hasBorder,
              customBorderColor,
              highlightColor,
            ),
            style,
          ]}>
          <TextInput
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={customPlaceholderColor}
            onFocus={onFocus}
            autoFocus={autoFocus}
            keyboardType={keyboardType}
            maxLength={maxLength}
            children={children}
            value={value}
            editable={editable}
            // style={this.customTextInputStyle(
            //   false,
            //   textAlignVertical,
            //   fontColor,
            // )}
            style={this.customTextInputStyle(
              false,
              textAlignVertical,
              fontColor,
              finalLetterSpacing,
            )}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            multiline={multiline}
            numberOfLines={numberOfLines}
            secureTextEntry={secureTextEntry}
            onFocus={() => {
              this.setState({isFocused: true});
            }}
            onBlur={() => {
              this.setState({isFocused: false});
            }}
            selectionColor={'#1B5ADE'}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    flex: 1,
    marginLeft: -5,
  },
});

export {TextField};
