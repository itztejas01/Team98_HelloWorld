import React, {Component} from 'react';
import {StyleSheet, View, FlatList, ScrollView} from 'react-native';
// import {ScrollView} from 'react-native-gesture-handler';
import {InfoCard, Label, SmallInfoCard, TitleText} from './common';

const cardProp = [
  {
    image: require('../assets/images/briefcase.png'),
    title: 'PLACEMENTS',
    desc: 'TPO sessions are planned in the time table for SE,TE & BE students and grooming sessions are conducted every week to prepare the students for placements.',
  },
  {
    image: require('../assets/images/resume.png'),
    title: 'RESUME',
    desc: 'Resume guidance responsibility is shared by all HODs, placement committee and various professional bodies. The proctors play a major role in individual counselling of students.',
  },
  {
    image: require('../assets/images/briefcase.png'),
    title: 'STUDENTS PLACED',
    desc: 'Seminars/ workshops are arranged at departmental level. The alumni also visit and interact with present students to mentor them on individual basis.',
  },
];

const smallCardProp = [
  {
    image: require('../assets/images/user.png'),
    title: 'SIGNUP FOR INTERESTED STUDENTS',
  },
  {
    image: require('../assets/images/conversation.png'),
    title: 'PRE PLACEMENT TALK',
  },
  {
    image: require('../assets/images/counting.png'),
    title: 'SELECTION PROCESS',
  },
  {
    image: require('../assets/images/result.png'),
    title: 'RESULT DECLARATION & EMAIL COMMUNICATION',
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
      secondStyle,
      footerStyle,
    } = styles;

    return (
      <View style={mainViewStyle}>
        <ScrollView>
          {/* <Label
            textColor="gray"
            text="Placement Portal"
            textWeight={800}
            style={titleStyle}
          /> */}
          {/* <TitleText
            text="Welcome to this portal!"
            textInHighlightedColor="portal"
            basicTextColor="gray"
            highlightTextColor="green"
            highlightedTextWeight={800}
            textAlign="left"
            textSize={50}
          /> */}
          <TitleText
            text="Welcome to this Portal!"
            textInHighlightedColor="Portal!"
            highlightTextColor="green"
            highlightedTextWeight={700}
            basicTextColor="#333333"
            textWeight={700}
            textSize={36}
            textAlign="center"
            style={{margin: 23}}
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
          <View style={secondStyle}>
            <FlatList
              horizontal={true}
              data={smallCardProp}
              renderItem={({item}) => (
                <SmallInfoCard
                  iconImage={item.image}
                  buttonTitle={item.title}
                  buttonDescription={item.desc}
                  style={boxStyle}
                  onPress={()=>this.props.navigation.navigate('Login')}
                />
              )}
            />
          </View>
          <View style={footerStyle}>
            <Label text="tc" />
          </View>
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
    alignSelf: 'center',
    fontStyle: 'italic',
    color: 'green',
    fontWeight: '800',
    marginTop: 10,
  },
  secondStyle: {
    backgroundColor: 'green',
    marginTop: 10,
  },
  footerStyle: {
    height: 50,
  },
});

export default HomeScreen;
