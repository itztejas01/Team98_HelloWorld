import React, {Component} from 'react';
import {View, StyleSheet,Image,TouchableOpacity} from 'react-native';

import {Label} from './Label';

class DropDown extends Component {
  render() {
    const {value ='placeholder', onPress,onPressMain, style,validationError} = this.props;
    const {containerStyle,textStyle,iconStyle,containerNewStyle} = styles;
    return (
      <TouchableOpacity onPress={onPressMain}>
      <View style={[containerStyle,style,validationError?containerNewStyle:'']}>
        <Label
          style={textStyle}
          textWeight={400}
          text={value}
          textColor="#606060"
          textSize={14}
          numberOfLines={2}
          ellipsizeMode={'tail'}
        />
      <TouchableOpacity onPress={onPress}>
        {/* <Image  source={require('../../assets/Icons/Other/arrows/down.png/down.png')} style={iconStyle}/> */}
        </TouchableOpacity>
      </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EDF0F7',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:16,
    paddingVertical:12
  },
  containerNewStyle: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'red',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:16,
    paddingVertical:12
  },
  textStyle:{
//    marginTop:12,
//    marginBottom:12,

  },
  iconStyle:{
//    marginTop:21,
//    marginBottom:21,
  // marginLeft:5,
  }
});

export {DropDown};
