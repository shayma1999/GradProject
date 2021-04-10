import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  
} from 'react-native';
import Constants from 'expo-constants';
//import data from './fruits.json';
// You can import from local files
import { Icon } from 'react-native-elements'

// or any pure javascript modules available in npm


const BreadCerealList=[
    {
        "name": "أرز ( مطبوخ )",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/219",
        "size": "كوب واحد",
        "protein": "4.25",
        "fats": "0.44",
        "carbohydrate": "44.51",
        "calories": "205.4"
       },
       {
        "name": "بخصم",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/212",
        "size": "قطعة واحدة",
        "protein": "1.2",
        "fats": "0.95",
        "carbohydrate": "6.84",
        "calories": "41.2"
       },
       {
        "name": "بسكويت بالجبن",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/222",
        "size": "قطعة واحدة",
        "protein": "0.1",
        "fats": "0.25",
        "carbohydrate": "0.58",
        "calories": "5.03"
       },
       {
        "name": "بسكويت بالقمح",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/224",
        "size": "قطعة واحدة",
        "protein": "0.17",
        "fats": "0.41",
        "carbohydrate": "1.3",
        "calories": "9.46"
       },
       {
        "name": "بسكويت مملح",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/223",
        "size": "قطعة واحدة",
        "protein": "0.22",
        "fats": "0.76",
        "carbohydrate": "1.83",
        "calories": "15.06"
       },
       {
        "name": "بقصمات",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/203",
        "size": "كوب",
        "protein": "14.4",
        "fats": "5.7",
        "carbohydrate": "77.7",
        "calories": "426.6"
       },
       {
        "name": "حبوب الذرة",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/193",
        "size": "كوب",
        "protein": "15.6",
        "fats": "7.9",
        "carbohydrate": "123.3",
        "calories": "605.9"
       },
       {
        "name": "حبوب القمح",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/199",
        "size": "كوب",
        "calories": "0"
       },
       {
        "name": "خبز أبيض",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/187",
        "size": "ربع خبز",
        "protein": "1.9",
        "fats": "0.8",
        "carbohydrate": "12.7",
        "calories": "66.5"
       },
       {
        "name": "خبز أبيض محمص",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/188",
        "size": "ربع خبز",
        "protein": "2",
        "fats": "0.9",
        "carbohydrate": "12",
        "calories": "64.5"
       },
       {
        "name": "خبز أسمر",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/189",
        "size": "ربع خبز",
        "protein": "3.6",
        "fats": "0.9",
        "carbohydrate": "11.6",
        "calories": "69.2"
       },
       {
        "name": "خبز الشوفان",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/206",
        "size": "شريحة صغيرة",
        "protein": "2.3",
        "fats": "1.2",
        "carbohydrate": "13.1",
        "calories": "72.6"
       },
       {
        "name": "خبز الشوفان بالنخالة",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/205",
        "size": "شريحة صغيرة",
        "protein": "3.1",
        "fats": "1.3",
        "carbohydrate": "11.9",
        "calories": "70.8"
       },
       {
        "name": "خبز بالجبن",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/215",
        "size": "قطعة واحدة",
        "protein": "4.69",
        "fats": "12.08",
        "carbohydrate": "28.84",
        "calories": "237.6"
       },
       {
        "name": "خبز بالنخالة",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/186",
        "size": "ربع خبز",
        "protein": "3.2",
        "fats": "1.2",
        "carbohydrate": "17.2",
        "calories": "89.3"
       },
       {
        "name": "خبز رول أبيض",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/201",
        "size": "واحدة متوسطة",
        "calories": "0"
       },
       {
        "name": "خبز رول أسمر",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/202",
        "size": "واحدة متوسطة",
        "calories": "0"
       },
       {
        "name": "خبز رول البرجر",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/200",
        "size": "واحدة",
        "protein": "4.1",
        "fats": "1.9",
        "carbohydrate": "21.3",
        "calories": "120"
       },
       {
        "name": "خبز فرنسي",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/190",
        "size": "شريحة صغيرة",
        "protein": "3.8",
        "fats": "0.6",
        "carbohydrate": "18.1",
        "calories": "92.5"
       },
       {
        "name": "دقيق الشوفان",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/210",
        "size": "ملعقتين طعام",
        "protein": "3.6",
        "fats": "1.8",
        "carbohydrate": "18.9",
        "calories": "105"
       },
       {
        "name": "دقيق الشوفان مطهي",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/211",
        "size": "كوب",
        "protein": "5.5",
        "fats": "3.2",
        "carbohydrate": "27.3",
        "calories": "159.1"
       },
       {
        "name": "رقائق الذرة ( المحلاة )",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/214",
        "size": "كوب واحد",
        "protein": "2.014",
        "fats": "0.532",
        "carbohydrate": "34.24",
        "calories": "148.58"
       },
       {
        "name": "رقائق الذرة العادي",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/213",
        "size": "كوب واحد",
        "protein": "1.84",
        "fats": "0.199",
        "carbohydrate": "24.22",
        "calories": "102.2"
       },
       {
        "name": "سكر أبيض",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/226",
        "size": "ملعقة شاي",
        "protein": "0",
        "fats": "0",
        "carbohydrate": "3.99",
        "calories": "15.48"
       },
       {
        "name": "سكر أسمر",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/227",
        "size": "ملعقة شاي",
        "protein": "0",
        "fats": "0",
        "carbohydrate": "2.92",
        "calories": "11.28"
       },
       {
        "name": "شوفان كويكر",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/207",
        "size": "ملعقتين ونصف",
        "protein": "6.8",
        "fats": "3.2",
        "carbohydrate": "25.2",
        "calories": "145.6"
       },
       {
        "name": "شوفان كويكر محضر بالماء",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/208",
        "size": "كوب",
        "protein": "4.8",
        "fats": "2.2",
        "carbohydrate": "17.5",
        "calories": "100.6"
       },
       {
        "name": "شوفان مطبوخ",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/209",
        "size": "كوب",
        "protein": "7",
        "fats": "1.9",
        "carbohydrate": "25.1",
        "calories": "87.6"
       },
       {
        "name": "طحين ابيض",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/218",
        "size": "كوب واحد",
        "protein": "12.19",
        "fats": "1.23",
        "carbohydrate": "95.39",
        "calories": "455"
       },
       {
        "name": "طحين الذرة",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/192",
        "size": "كوب",
        "calories": "0"
       },
       {
        "name": "طحين رز أبيض",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/196",
        "size": "كوب",
        "protein": "9.4",
        "fats": "2.2",
        "carbohydrate": "126.6",
        "calories": "578.3"
       },
       {
        "name": "طحين رز أسمر",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/195",
        "size": "كوب",
        "protein": "11.4",
        "fats": "4.4",
        "carbohydrate": "120.8",
        "calories": "573.5"
       },
       {
        "name": "طحين قمح أسمر",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/198",
        "size": "كوب",
        "protein": "16.4",
        "fats": "2.2",
        "carbohydrate": "87.1",
        "calories": "406.8"
       },
       {
        "name": "عسل",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/225",
        "size": "ملعقة طعام",
        "protein": "0.06",
        "fats": "0",
        "carbohydrate": "17.3",
        "calories": "63.84"
       },
       {
        "name": "قطع الخبز المحمص",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/204",
        "size": "كوب",
        "protein": "3.6",
        "fats": "2",
        "carbohydrate": "22",
        "calories": "122.1"
       },
       {
        "name": "كروسون بالجبن",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/216",
        "size": "قطعة متوسطة",
        "protein": "5.24",
        "fats": "11.91",
        "carbohydrate": "26.79",
        "calories": "235.98"
       },
       {
        "name": "كروسون بالزبدة",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/217",
        "size": "قطعة متوسطة",
        "protein": "4.67",
        "fats": "11.97",
        "carbohydrate": "26.11",
        "calories": "231.42"
       },
       {
        "name": "كيك عادي ( مافين )",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/228",
        "size": "حجم كبير",
        "protein": "4.49",
        "fats": "7.41",
        "carbohydrate": "26.91",
        "calories": "192.4"
       },
       {
        "name": "كينوا",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/229",
        "size": "كوب",
        "protein": "24",
        "fats": "10.3",
        "carbohydrate": "109.1",
        "calories": "625.6"
       },
       {
        "name": "معكرونة مطبوخة",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/220",
        "size": "كوب واحد",
        "protein": "6.68",
        "fats": "0.94",
        "carbohydrate": "39.68",
        "calories": "197.4"
       },
       {
        "name": "نخالة الذرة",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/191",
        "size": "كوب",
        "protein": "6.4",
        "fats": "0.7",
        "carbohydrate": "65.1",
        "calories": "170.2"
       },
       {
        "name": "نخالة الرز",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/194",
        "size": "كوب",
        "protein": "15.8",
        "fats": "24.6",
        "carbohydrate": "58.6",
        "calories": "372.9"
       },
       {
        "name": "نخالة القمح",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/197",
        "size": "كوب",
        "protein": "9",
        "fats": "2.5",
        "carbohydrate": "37.4",
        "calories": "125.3"
       },
       {
        "name": "نودلز مطبوخة",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/221",
        "size": "كوب واحد",
        "protein": "7.6",
        "fats": "2.35",
        "carbohydrate": "39.74",
        "calories": "212.8"
       }
];

export default function BreadCereal() {
  
  
  const [selectedItem, setSelectedItem] = useState(null);
  const [allItems, setAllItems] = useState(BreadCerealList);
  const selectedIngredient = (item) => {
    console.log('selecionado: ' + item.name);
    setSelectedItem(item);
    /* Below operation can be improved by passing index to the function itself.
       so filtering would not be required
     */
    let temp = allItems.filter((parentItem) => parentItem.name !== item.name);
    item.selected = !item.selected;
    temp = temp.concat(item);
    temp.sort((a, b) => parseInt(a.name) - parseInt(b.name));
    setAllItems(temp);
    console.log(allItems);
  };


  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatlist}
      //  horizontal
        bounces={false}
        data={allItems}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.flatListItem}
            key={item.id}
            onPress={() => selectedIngredient(item)}>
            <Text>{item.name}</Text>
            {!item.selected ? (
              <Text style={{ color: 'red' }}>{'لم يتم الاخيار'}</Text>
            ) : (
              <Text style={{ color: 'green' }}>{'تم الاختيار'}</Text>
            )}
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.index}
      />
      
 <TouchableOpacity style={styles.icon}>
    <View>
      <Icon
        raised
        name="check-circle"
        type="Ionicons"
        color="black" 
        
        size={30} 
        onPress={() => this.goToStore()}
        containerStyle={{ backgroundColor: "#FA7B5F" }}
      />
    </View>
 </TouchableOpacity>
 </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
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
});