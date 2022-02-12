import React, { Component } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Label } from "./";

class TitleViewAllButtonHeader extends Component {
  returnBorderBottomStyle(condition, bottomPadding) {
    if (condition) {
      if (bottomPadding) {
        return {
          width: '90%',
          paddingBottom: bottomPadding,
          borderBottomWidth: 0.5,
          alignSelf: 'center',
          borderColor: '#CCCCCC',
          color: 'black',
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
        };
      }
      return {
        width: '90%',
        paddingBottom: 17,
        borderBottomWidth: 0.5,
        alignSelf: 'center',
        borderColor: '#CCCCCC',
        color: 'black',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
      };
    } else {
      if (bottomPadding) {
        return {
          width: '90%',
          paddingBottom: bottomPadding,
          //borderBottomWidth: 0.5,
          alignSelf: 'center',
          //borderColor: '#CCCCCC',
          color: 'black',
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
        };
      }
      return {
        width: '90%',
        paddingBottom: 17,
        //borderBottomWidth: 0.5,
        alignSelf: 'center',
        //borderColor: '#CCCCCC',
        color: 'black',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
      };
    }
  }

  renderviewAllOnPress() {
    if (this.props.viewAllOnPress) {
      return (
        <TouchableOpacity
          onPress={this.props.viewAllOnPress}
          style={styles.viewAllButtonStyle}>
          <Label
            textWeight={400}
            text="VIEW ALL"
            textColor="#606060"
            textSize={13.5}
            style={{ letterSpacing: 2.5, marginRight: 6, }}
          />
          <Image
            style={styles.imageStyle}
            // source={require('../../assets/Icons/Other/arrows/chevron-forward/chevron-forward.png')}
          />
        </TouchableOpacity>
      );
    }
  }

  showHeaderLeftIcon() {
    if (this.props.headerLeftIcon) {
      return (
        <Image
          style={[styles.defaultLeftIconStyle, this.props.leftIconStyle]}
          source={this.props.headerLeftIcon}
        />
      );
    }
  }

  showHeaderRightIcon() {
    if (this.props.headerRightIcon) {
      return (
        <Image
          style={[styles.defaultRightIconStyle, this.props.rightIconStyle]}
          source={this.props.headerRightIcon}
        />
      );
    }
  }

  renderTextWeight() {
    if (this.props.textWeight) {
      return this.props.textWeight;
    } else {
      return 700;
    }
  }

  renderTextSize() {
    if (this.props.textSize) {
      return this.props.textSize;
    } else {
      return 17;
    }
  }

  renderTextColor() {
    if (this.props.textColor) {
      return this.props.textColor;
    } else {
      return 'black';
    }
  }

  checkCharacterSpacing() {
    if (this.props.characterSpacing) {
      return this.props.characterSpacing;
    } else {
      return 0;
    }
  }

  render() {
    const {
      title,
      style,
      headerStyle,
      viewAllOnPress,
      viewBorderBottom,
      headerRightIcon,
      rightIconStyle,
      headerLeftIcon,
      leftIconStyle,
      textSize,
      textWeight,
      textColor,
      paddingBottom,
    } = this.props;
    const {
      viewStyle,
      imageStyle,
      viewAllButtonStyle,
      defaultRightIconStyle,
      styleMain,
      defaultTextStyle,
    } = styles;

    return (
      <View
        style={[
          this.returnBorderBottomStyle(viewBorderBottom, paddingBottom),
          style,
        ]}>
        <View style={viewStyle}>
          {this.showHeaderLeftIcon()}
          <Label
            text={title}
            textSize={this.renderTextSize()}
            textWeight={this.renderTextWeight()}
            textColor={this.renderTextColor()}
            style={headerStyle}
            characterSpacing={this.checkCharacterSpacing()}
          />
          {this.showHeaderRightIcon()}
        </View>
        {this.renderviewAllOnPress()}
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flexDirection: "row",
    alignItems: 'center',
  },

  imageStyle: {
    width: 15,
    height: 15,

  },

  defaultLeftIconStyle: {
    width: 20,
    height: 20,
    marginRight: 15,
  },

  defaultRightIconStyle: {
    width: 20,
    height: 20,
    marginTop: 5,
    marginLeft: 5,
  },

  viewAllButtonStyle: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },

  viewIconOnHeader: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 3,
    height: 22,
    flexWrap: "wrap",
  },

  styleMain: {
    width: '100%',
    backgroundColor: "green"
  },
  defaultTextStyle: {
    fontFamily: 'Satoshi-Bold',
    color: 'black',
    fontSize: 17,
  },
};

export { TitleViewAllButtonHeader };
