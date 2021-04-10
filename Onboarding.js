import React from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';
//import LinearGradient from 'react-native-linear-gradient';
import colors from './assets/colors/colors';
import {LinearGradient} from 'expo-linear-gradient';

const data = [
  {
    title: 'اهلا وسهلا بك ',
    text: 'قم بالانضمام لدينا لنزودك بكافة خدماتنا المميزة' ,
    image: require('./assets/images/logo.png'),
  },
  {
    title: 'هل انت جديدة في عالم الطبخ؟',
    text: 'ابحثي عن وصفة الطبخة التي تريدين وستجدينها بكل تفاصيلها',
    image: require('./assets/images/logo.png'),
  },
  {
    title: 'لديك اصناف محددة من الطعام وتبحثين عن طبخة بهذه الاصناف؟',
    text: 'فقط قومي بتحديد المكونات اللتي لديك وستجدين عدة وصفات بهذه الاصناف',
    image: require('./assets/images/logo.png'),
  },
];

const Onboarding = (props) => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.imageHeader} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const keyExtractor = (item) => item.title;

  const renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}>التالي</Text>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <LinearGradient
        colors={['#A5C8FF', '#23286B']}
        style={styles.linearGradient}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={styles.doneButtonWrapper}>
        <Text style={styles.doneButtonText}>تم</Text>
      </LinearGradient>
      // <View style={styles.doneButtonWrapper}>
      //   <Text style={styles.doneButtonText}>Done</Text>
      // </View>
    );
  };

  const renderPrevButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText}>السابق</Text>
      </View>
    );
  };

  const handleDone = () => {
    props.handleDone();
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={data}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton
        onDone={handleDone}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  image: {
    marginVertical: 60,
  },
  title: {
    fontSize: 24,
    color: colors.black,
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
    marginHorizontal: 60,
  },
  text: {
    fontSize: 14,
    color: colors.gray,
    textAlign: 'center',
    fontFamily: 'OpenSans-SemiBold',
    marginHorizontal: 60,
    marginTop: 20,
  },
  dotStyle: {
    backgroundColor: colors.blueFaded,
  },
  activeDotStyle: {
    backgroundColor: colors.blue,
  },
  rightTextWrapper: {
    width: 40,
    height: 40,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  rightText: {
    color: colors.blue,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
  },
  leftTextWrapper: {
    width: 40,
    height: 40,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  leftText: {
    color: colors.blue,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
  },
  doneButtonWrapper: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 50,
    paddingVertical: 10,
    borderRadius: 25,
    marginRight: -40,
  },
  doneButtonText: {
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    textAlign: 'center',
    color: colors.white,
  },
  imageHeader: {
    height: 270,
    width: 260
},
});

export default Onboarding;