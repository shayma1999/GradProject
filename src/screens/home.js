import React from 'react';
import { View, Text, StyleSheet, Button,Image,ScrollView,  SafeAreaView,  FlatList,  TouchableOpacity,
} from "react-native";import colors from './colors';
import Swiper from 'react-native-swiper'
import popularData from './popularData';
import Feather from 'react-native-vector-icons/Feather';

const Home = ({ navigation }) => {

  const renderCategoryItem = ({ item }) => {
    return (
      <View
        style={[
          styles.categoryItemWrapper,
          {
            backgroundColor: item.selected ? colors.primary : colors.white,
            marginLeft: item.id == 1 ? 20 : 0,
          },
        ]}>
          
        <Image source={item.image} style={styles.categoryItemImage} />
        <Text style={styles.categoryItemTitle}>{item.title}</Text>
        <View
          style={[
            styles.categorySelectWrapper,
            {
              backgroundColor: item.selected ? colors.white : colors.secondary,
            },
          ]}>
          <Feather
            name="chevron-right"
            size={8}
            style={styles.categorySelectIcon}
            color={item.selected ? colors.black : colors.white}
          />
        </View>
      </View>
    );
  };

  return (
  
    <View style={styles.container1}>
   


     
      
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
       <View style ={styles.sliderContainer}>
      <Swiper autoplay horizontal={false} highet={200}>
      <View style={styles.slide}>
      <Image source={require('../images/img1.jpg')}
     resizeMode="cover"
    style={styles.sliderImage}
     />

     </View>

     <View style={styles.slide}>
    <Image source={require('../images/img2.jpg')}
     resizeMode="cover"
     style={styles.sliderImage}
     />

     </View>

    <View style={styles.slide}>
    <Image source={require('../images/img3.jpg')}
    resizeMode="cover"
     style={styles.sliderImage}
     />

     </View>

    <View style={styles.slide}>
    <Image source={require('../images/img1.jpg')}
     resizeMode="cover"
     style={styles.sliderImage}
     />

     </View>


      </Swiper>
      </View>

  

        {/* Popular */}
        <View style={styles.popularWrapper}>
          <Text style={styles.popularTitle}>الشائع</Text>
          {popularData.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() =>
                navigation.navigate('Details', {
                  item: item,
                })
              }>
              <View
                style={[
                  styles.popularCardWrapper,
                  {
                    marginTop: item.id == 1 ? 10 : 20,
                  },
                ]}>
                <View>
                  <View>
                    <View style={styles.popularTopWrapper}>
                     
                    </View>
                    <View style={styles.popularTitlesWrapper}>
                      <Text style={styles.popularTitlesTitle}>
                        {item.title}
                      </Text>
                      <Text style={styles.popularTitlesWeight}>
                        Weight {item.weight}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.popularCardBottom}>
                    <View style={styles.addPizzaButton}>
                      <Feather name="plus" size={10} color={colors.textDark} />
                    </View>
                  
                  </View>
                </View>

                <View style={styles.popularCardRight}>
                  <Image source={{uri:item.image}} style={styles.popularCardImage} />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );

  
};

export default Home;

const styles = StyleSheet.create({
  root:{
    flex:1,
    width:"100%"
},

    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginVertical: 10,
      borderRadius: 5,
    },
    title: {
      marginBottom: 48,

    },
    input: {
     
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginVertical: 10,
      borderRadius: 5,
      margin: 32,
      width: 350,
    },
    inputs: {
      width: 350,
      height: 55,
      backgroundColor: '#e6f3ff',
      margin: 10,
      padding: 8,
     // color: '#e6f3ff',
      borderRadius: 14,
      fontSize: 18,
      fontWeight: '500',
      textAlign: "center"

    },

    inputStyle:{
      margin:5
  },
    loginButton: {
      margin: 32,
      width: 350,
      borderRadius:350/4,

    },
    mycard:{
      margin:3,

      
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderContainer: {
    height: 200,
    width: '98%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
cardContent:{
  flexDirection:"row",
  padding:8
},
mytext:{
  fontSize:18,
  marginTop:3,
  marginLeft:5
},
box3: {
  position: 'absolute',
  top: "10%",
  //left: "37%",
  
},
container2: {
  flex: 1,
},
headerWrapper: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 20,
  paddingTop: 20,
  alignItems: 'center',
},
profileImage: {
  width: 40,
  height: 40,
  borderRadius: 40,
},
titlesWrapper: {
  marginTop: 30,
  paddingHorizontal: 20,
},
titlesSubtitle: {
  fontFamily: 'Montserrat-Regular',
  fontSize: 16,
  color: colors.textDark,
},
titlesTitle: {
  fontFamily: 'Montserrat-Bold',
  fontSize: 32,
  color: colors.textDark,
  marginTop: 5,
},
searchWrapper: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 20,
  marginTop: 30,
},
search: {
  flex: 1,
  marginLeft: 10,
  borderBottomColor: colors.textLight,
  borderBottomWidth: 2,
},
searchText: {
  fontFamily: 'Montserrat-Semibold',
  fontSize: 14,
  marginBottom: 5,
  color: colors.textLight,
},
categoriesWrapper: {
  marginTop: 30,
},
categoriesTitle: {
  fontFamily: 'Montserrat-Bold',
  fontSize: 16,
  paddingHorizontal: 20,
},
categoriesListWrapper: {
  paddingTop: 15,
  paddingBottom: 20,
},
categoryItemWrapper: {
  backgroundColor: '#F5CA48',
  marginRight: 20,
  borderRadius: 20,
  shadowColor: colors.black,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.05,
  shadowRadius: 10,
  elevation: 2,
},
categoryItemImage: {
  width: 60,
  height: 60,
  marginTop: 25,
  alignSelf: 'center',
  marginHorizontal: 20,
},
categoryItemTitle: {
  textAlign: 'center',
  fontFamily: 'Montserrat-Medium',
  fontSize: 14,
  marginTop: 10,
},
categorySelectWrapper: {
  alignSelf: 'center',
  justifyContent: 'center',
  marginTop: 20,
  width: 26,
  height: 26,
  borderRadius: 26,
  marginBottom: 20,
},
categorySelectIcon: {
  alignSelf: 'center',
},
popularWrapper: {
  paddingHorizontal: 20,
},
popularTitle: {
  fontFamily: 'Montserrat-Bold',
  fontSize: 16,
  textAlign: 'right' 
},
popularCardWrapper: {
  backgroundColor: colors.white,
  borderRadius: 25,
  paddingTop: 20,
  paddingLeft: 20,
  flexDirection: 'row',
  overflow: 'hidden',
  shadowColor: colors.black,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.05,
  shadowRadius: 10,
  elevation: 2,
},
popularTopWrapper: {
  flexDirection: 'row',
  alignItems: 'center',
},
popularTopText: {
  marginLeft: 10,
  fontFamily: 'Montserrat-SemiBold',
  fontSize: 14,
},
popularTitlesWrapper: {
  marginTop: 20,
},
popularTitlesTitle: {
  fontFamily: 'Montserrat-SemiBold',
  fontSize: 14,
  color: colors.textDark,
},
popularTitlesWeight: {
  fontFamily: 'Montserrat-Medium',
  fontSize: 12,
  color: colors.textLight,
  marginTop: 5,
},
popularCardBottom: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 10,
  marginLeft: -20,
},
addPizzaButton: {
  backgroundColor: colors.primary,
  paddingHorizontal: 40,
  paddingVertical: 20,
  borderTopRightRadius: 25,
  borderBottomLeftRadius: 25,
},
ratingWrapper: {
  flexDirection: 'row',
  alignItems: 'center',
  marginLeft: 20,
},
rating: {
  fontFamily: 'Montserrat-SemiBold',
  fontSize: 12,
  color: colors.textDark,
  marginLeft: 5,
},
popularCardRight: {
  marginLeft: 40,
},
popularCardImage: {
  width: 150,
  height: 115,
  resizeMode: 'contain',
},
headerWrapper: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 20,
  paddingTop: 20,
},
headerLeft: {
  borderColor: colors.textLight,
  borderWidth: 2,
  padding: 12,
  borderRadius: 10,
},
headerRight: {
  backgroundColor: colors.primary,
  padding: 12,
  borderRadius: 10,
  borderColor: colors.primary,
  borderWidth: 2,
},
titlesWrapper: {
  paddingHorizontal: 20,
  marginTop: 30,
},
title: {
  fontFamily: 'Montserrat-Bold',
  fontSize: 32,
  color: colors.textDark,
  width: '50%',
},
priceWrapper: {
  marginTop: 20,
  paddingHorizontal: 20,
},
priceText: {
  color: colors.price,
  fontFamily: 'Montserrat-Bold',
  fontSize: 32,
},
infoWrapper: {
  marginTop: 60,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},
infoLeftWrapper: {
  paddingLeft: 20,
},
infoItemWrapper: {
  marginBottom: 20,
},
infoItemTitle: {
  fontFamily: 'Montserrat-Medium',
  fontSize: 14,
  color: colors.textLight,
},
infoItemText: {
  fontFamily: 'Montserrat-SemiBold',
  fontSize: 18,
  color: colors.textDark,
},
itemImage: {
  resizeMode: 'contain',
  marginLeft: 50,
  width:150,
  height:150,
  right:10
},
ingredientsWrapper: {
  marginTop: 40,
},
ingredientsTitle: {
  paddingHorizontal: 20,
  fontFamily: 'Montserrat-Bold',
  fontSize: 16,
  color: colors.textDark,
  textAlign: 'center' 

},
ingredientsListWrapper: {
  paddingVertical: 20,
},
ingredientItemWrapper: {
  backgroundColor: colors.white,
  alignItems: 'center',
  justifyContent: 'center',
  padding: 10,
  marginRight: 15,
  borderRadius: 15,
 // shadowColor: colors.black,
 marginTop:10,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.05,
  shadowRadius: 10,
  elevation: 2,
},

ingredientItem:{
 // alignItems: 'center',
  justifyContent: 'center',
  padding: 10,
  //marginLeft: 20,
  shadowColor: colors.black,
  left:20,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.05,
  shadowRadius: 10,
  elevation: 2,
},
ingredientImage: {
  resizeMode: 'contain',
},
orderWrapper: {
  marginTop: 60,
  marginHorizontal: 20,
  backgroundColor: colors.primary,
  borderRadius: 50,
  paddingVertical: 25,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
},
orderText: {
  fontFamily: 'Montserrat-Bold',
  fontSize: 14,
  marginRight: 10,
},
flatListItem: {
  //width: 100,
 // height: 100,
  backgroundColor: 'white',
  margin: 10,
  padding:10,
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
},
selectedTextView: {
  flex: 8,
  backgroundColor: 'white',
  margin: 5,
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 20,
},
selectedText: {
  fontSize: 30,
},
icon: {
  position: "absolute",  
  bottom: 20,
 // width: "100%", 
  left: 290, 
  //zIndex: 1,
},
ic:{
  flexDirection:"row",
  justifyContent:"space-around",
  width:350,
  margin:5,
  justifyContent:"space-around",
  width:350,
  margin:5
}
  });