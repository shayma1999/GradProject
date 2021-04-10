import React, { useRef } from 'react';
import {Text,  View } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import Footer from '../components/Footer';
import Page from '../components/Page';
import { useNavigation } from '@react-navigation/native';


const Onboarding = () => {
    const pagerRef = useRef(null);
    const navigation = useNavigation();
    const handlePageChange = pageNumber => {
        pagerRef.current.setPage(pageNumber);
      };

    return (
        <View style={{ flex: 1 }}>
     <ViewPager style={{ flex: 1 }} initialPage={0} ref={pagerRef}>
         
      <View style={{ flex: 1 }}>
        <ViewPager style={{ flex: 1 }}>
          <View key="1">
            <Page
              backgroundColor="#ffc93c"
              iconName="heart"
              title="اهلا وسهلا بك في صحتي"
            />
            <Footer
              backgroundColor="#ffc93c"
              rightButtonLabel="Next"
              rightButtonPress={() => {
                handlePageChange(1);
              }}
            />
          </View>
          <View key="2">
            <Page
              backgroundColor="#07689f"
              iconName="users"
              title="متخصصون"
            //  subtitle= "شارك بالتطبيق متخصصين من كافة مجالات الطب للاجابة عن استفساراتكم."
            />
            <Footer
              backgroundColor="#07689f"
              rightButtonLabel="Next"
              rightButtonPress={() => true}
              leftButtonLabel="Back"
              leftButtonPress={() => {
                handlePageChange(0);
              }}
            />
          </View>
          <View key="3">
            <Page
              backgroundColor="#eb8f8f"
              iconName="check"
              title="والمزيد من الخدمات اكتشفها بنفسك"
            />
            <Footer
              backgroundColor="#eb8f8f"
              leftButtonLabel="Back"
              leftButtonPress={() => {
                handlePageChange(0);
              }}
              rightButtonLabel="Continue"
              rightButtonPress={() => {
                navigation.navigate('index');
              }}
            />
          </View>
        </ViewPager>
      </View>

</ViewPager>
    </View>
    );
};

export default Onboarding;
