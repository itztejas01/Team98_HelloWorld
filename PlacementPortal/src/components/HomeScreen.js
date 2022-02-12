import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {InfoCard, Label} from './common';

const cardProp = [
  {
    image: require('../assets/images/briefcase.png'),
    title: 'PLACEMENTS',
    desc: 'TPO sessions are planned in the time table for SE,TE & BE students and grooming sessions are conducted every week to prepare the students for placements.',
  },
  {
    image: require('../assets/images/briefcase.png'),
    title: 'RESUME',
    desc: 'Resume guidance responsibility is shared by all HODs, placement committee and various professional bodies. The proctors play a major role in individual counselling of students.',
  },
  {
    image: require('../assets/images/briefcase.png'),
    title: 'STUDENTS PLACED',
    desc: 'Seminars/ workshops are arranged at departmental level. The alumni also visit and interact with present students to mentor them on individual basis.',
  },
];

class HomeScreen extends Component {
  render() {
    const {
      // code
      mainViewStyle,
      textStyle,
      boxStyle,
      titleStyle,
    } = styles;

    return (
      <View style={mainViewStyle}>
        <ScrollView>
          <Label
            textColor="gray"
            text="Placement Portal"
            textWeight={800}
            style={titleStyle}
          />
          <FlatList
            data={cardProp}
            renderItem={({item}) => (
              <InfoCard
                iconImage={item.image}
                buttonTitle={item.title}
                buttonDescription={item.desc}
                style={boxStyle}
              />
            )}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // code
  mainViewStyle: {
    backgroundColor: 'white',
    height: '100%',
  },
  textStyle: {
    color: 'black',
  },
  boxStyle: {
    marginTop: 10,
  },
  titleStyle: {
    // textSize: 200,
    fontSize: 28,
  },
});

export default HomeScreen;
