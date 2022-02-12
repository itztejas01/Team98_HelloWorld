import React, {Component} from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Label} from './';

class InfoCard extends Component {
  /*=====FUNCTION COMMENT BEGINS=====\n
          1. Developer Name: Jeet Bhanushali \n
          2. Developer Email ID: jeetkatariya01970@gmail.com \n
          3. Function Description:\n
          4. Date Created: DD/MM/YY \n
          5. Date Modified: DD/MM/YY \n
          6. Parameter List: \n
          7. Return type: \n
        ======FUNCTION COMMENT ENDS======*/

  render() {
    const {iconImage, buttonTitle, buttonDescription, onPress, style} =
      this.props;
    const {greyContainer, iconStyle, titleStyle, descriptionStyle} = styles;
    return (
      <View style={[greyContainer, style]}>
        {/* <TouchableOpacity onPress={onPress}> */}
        <Image source={iconImage} style={iconStyle} />
        <Label
          textColor="gray"
          text={buttonTitle}
          textSize={20}
          textWeight={50}
          style={titleStyle}
        />
        <Label
          textColor="gray"
          text={buttonDescription}
          textSize={14}
          textWeight={400}
          style={descriptionStyle}
        />
        {/* </TouchableOpacity> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  greyContainer: {
    //  flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EDF0F7',
    paddingVertical: 8,
    paddingHorizontal: 17,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '95%',
    borderRadius: 10,
    elevation: 1,
  },

  iconStyle: {
    height: 65,
    width: 100,
    resizeMode: 'contain',
    marginTop: 18,
    marginBottom: 25,
    justifyContent: 'center',
    tintColor: 'green',
  },

  titleStyle: {
    justifyContent: 'center',
    marginBottom: 10,
    textAlign: 'center',
    //  headerTitleAlign: 'center',
    //  backgroundColor: '#F6F7FB',
    //  fontFamily: 'Satoshi-Bold',
    //  fontSize: 20,
    //  color: '#333333',
    //  fontWeight:'300'
  },

  descriptionStyle: {
    justifyContent: 'center',
    lineHeight: 27,
    marginBottom: 15,
    marginHorizontal: 15,
    textAlign: 'center',
  },
});

export {InfoCard};
