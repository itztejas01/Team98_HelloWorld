import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {Label} from '.';

class TitleText extends Component {
  render() {
    const {
      text,
      textInHighlightedColor,
      highlightTextColor,
      highlightedTextWeight,
      textWeight,
      style,
      titleStyle,
      basicTextColor,
      textSize,
      textAlign,
      highlightedTextOnPress,
    } = this.props;

    const {defaultTextViewStyle} = styles;

    var coloredTextArray = textInHighlightedColor.trim().split(' ');
    var textArray = text.split(' ');
    var startText = '';
    var differentColorText = '';
    var endText = '';
    var count = 0;

    for (var i = 0; i < textArray.length; i++) {
      // console.log("in for");
      // console.log(count);
      if (coloredTextArray[0] == textArray[i]) {
        differentColorText = textInHighlightedColor + ' ';
        count += 1;
        continue;
      }
      if (count > 0) {
        if (count < coloredTextArray.length) {
          count += 1;
          continue;
        }
        endText = endText + textArray[i] + ' ';
      } else {
        // console.log("in else");
        startText = startText + textArray[i] + ' ';
      }
    }

    if (textInHighlightedColor) {
      if (highlightedTextOnPress) {
        return (
          <View style={[defaultTextViewStyle, style]}>
            <Label
              textAlign={textAlign}
              text={startText}
              textSize={textSize}
              textWeight={textWeight}
              textColor={basicTextColor}
              style={titleStyle}
            />
            <TouchableOpacity
              onPress={highlightedTextOnPress}
              activeOpacity={1}>
              <Label
                textAlign={textAlign}
                text={differentColorText}
                textSize={textSize}
                textWeight={[highlightedTextWeight]}
                textColor={highlightTextColor}
                style={titleStyle}
              />
            </TouchableOpacity>
            <Label
              textAlign={textAlign}
              text={endText}
              textSize={textSize}
              textWeight={textWeight}
              textColor={basicTextColor}
              style={titleStyle}
            />
          </View>
        );
      }
      return (
        <View style={[defaultTextViewStyle, style]}>
          <Label
            textAlign={textAlign}
            text={startText}
            textSize={textSize}
            textWeight={textWeight}
            textColor={basicTextColor}
            style={titleStyle}
          />
          <Label
            textAlign={textAlign}
            text={differentColorText}
            textSize={textSize}
            textWeight={[highlightedTextWeight]}
            textColor={highlightTextColor}
            style={titleStyle}
          />
          <Label
            textAlign={textAlign}
            text={endText}
            textSize={textSize}
            textWeight={textWeight}
            textColor={basicTextColor}
            style={titleStyle}
          />
        </View>
      );
    } else {
      return (
        <View style={[defaultTextViewStyle, style]}>
          <Label
            textAlign={textAlign}
            text={startText}
            textSize={textSize}
            textWeight={textWeight}
            textColor={basicTextColor}
            style={titleStyle}
          />
          <Label
            textAlign={textAlign}
            text={differentColorText}
            textSize={textSize}
            textWeight={[highlightedTextWeight]}
            textColor={highlightTextColor}
            style={titleStyle}
          />
          <Label
            textAlign={textAlign}
            text={endText}
            textSize={textSize}
            textWeight={textWeight}
            textColor={basicTextColor}
            style={titleStyle}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  defaultTextViewStyle: {
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export {TitleText};
