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


const DairyProductsList=[
    {
        "name": "جبن بارميزان مبشور",
        "size": "ملعقة شاي",
        "protein": "1.9",
        "fats": "1.4",
        "carbohydrate": "0.2",
        "calories": "21.6"
       },
       {
        "name": "جبن تشيدر",
        "size": "ملعقتين طعام",
        "protein": "7",
        "fats": "9.3",
        "carbohydrate": "0.4",
        "calories": "112.8"
       },
       {
        "name": "جبن حلوم",
        "size": "كوب",
        "protein": "16.4",
        "fats": "29.4",
        "carbohydrate": "8.2",
        "calories": "363"
       },
       {
        "name": "جبن حليب الماعز جامد",
        "size": "ملعقتين طعام",
        "protein": "8.5",
        "fats": "10",
        "carbohydrate": "0.6",
        "calories": "126.6"
       },
       {
        "name": "جبن حليب الماعز لين",
        "size": "ملعقتين طعام",
        "protein": "5.2",
        "fats": "5.9",
        "carbohydrate": "0.2",
        "calories": "75"
       },
       {
        "name": "جبن حليب الماعز متوسط الليونة",
        "size": "ملعقتين طعام",
        "protein": "6",
        "fats": "8.4",
        "carbohydrate": "0.7",
        "calories": "101.9"
       },
       {
        "name": "جبن ريكوتا قليل الدسم",
        "size": "كوب",
        "protein": "14.1",
        "fats": "9.8",
        "carbohydrate": "6.4",
        "calories": "171.1"
       },
       {
        "name": "جبن ريكوتا كامل الدسم",
        "size": "كوب",
        "protein": "14",
        "fats": "16.1",
        "carbohydrate": "3.8",
        "calories": "215.8"
       },
       {
        "name": "جبن فيتا",
        "size": "ملعقتين طعام",
        "protein": "4",
        "fats": "6",
        "carbohydrate": "1.1",
        "calories": "73.9"
       },
       {
        "name": "جبن كريم",
        "size": "ملعقتين طعام",
        "protein": "0.9",
        "fats": "5.1",
        "carbohydrate": "0.6",
        "calories": "51.3"
       },
       {
        "name": "جبن كريم خالي الدسم",
        "size": "ملعقتين طعام",
        "protein": "4.4",
        "fats": "0.3",
        "carbohydrate": "2.1",
        "calories": "29.4"
       },
       {
        "name": "جبن كريم قليل الدسم",
        "size": "ملعقتين طعام",
        "protein": "2.2",
        "fats": "4.3",
        "carbohydrate": "2.3",
        "calories": "56.3"
       },
       {
        "name": "جبن كوتج < 5% دهون",
        "size": "كوب",
        "protein": "23.4",
        "fats": "0.7",
        "carbohydrate": "15.1",
        "calories": "162.7"
       },
       {
        "name": "جبن موازاريلا كامل الدسم",
        "size": "ملعقتين طعام",
        "protein": "6.2",
        "fats": "6.3",
        "carbohydrate": "0.6",
        "calories": "84"
       },
       {
        "name": "جبن موزاريلا خالي الدسم",
        "size": "ملعقتين طعام",
        "protein": "8.9",
        "fats": "0",
        "carbohydrate": "1",
        "calories": "41.7"
       },
       {
        "name": "جبن موزاريلا قليل الدسم",
        "size": "ملعقتين طعام",
        "protein": "6.8",
        "fats": "4.5",
        "carbohydrate": "0.8",
        "calories": "71.1"
       },
       {
        "name": "حليب مبخر",
        "size": "6 ملاعق طعام",
        "protein": "7",
        "fats": "7.9",
        "carbohydrate": "9.7",
        "calories": "137"
       },
       {
        "name": "حليب الغنم",
        "size": "كوب",
        "protein": "14.7",
        "fats": "17.2",
        "carbohydrate": "13.1",
        "calories": "264.6"
       },
       {
        "name": "حليب الماعز",
        "size": "كوب",
        "protein": "8.7",
        "fats": "10.1",
        "carbohydrate": "10.9",
        "calories": "168.4"
       },
       {
        "name": "حليب بالشوكولاتة قليل الدسم",
        "size": "كوب",
        "protein": "7.5",
        "fats": "4.8",
        "carbohydrate": "30.3",
        "calories": "190"
       },
       {
        "name": "حليب بالفراولة",
        "size": "كوب",
        "protein": "8",
        "fats": "8.2",
        "carbohydrate": "32.7",
        "calories": "234.1"
       },
       {
        "name": "حليب بودرة",
        "size": "ملعقتين طعام",
        "protein": "8.4",
        "fats": "8.5",
        "carbohydrate": "12.3",
        "calories": "158.7"
       },
       {
        "name": "حليب قليل الدسم",
        "size": "كوب",
        "protein": "8.1",
        "fats": "4.8",
        "carbohydrate": "11.4",
        "calories": "122"
       },
       {
        "name": "حليب كامل الدسم",
        "size": "ثلث كوب",
        "protein": "3.5",
        "fats": "3",
        "carbohydrate": "5.5",
        "calories": "64"
       },
       {
        "name": "حليب مبخر معلب منزوع الدسم",
        "size": "ملعقتين طعام",
        "protein": "2.4",
        "fats": "0.1",
        "carbohydrate": "3.6",
        "calories": "25"
       },
       {
        "name": "حليب مكثف محلى (معلب)",
        "size": "ملعقتين طعام",
        "protein": "3",
        "fats": "3.3",
        "carbohydrate": "20.7",
        "calories": "122"
       },
       {
        "name": "حليب منزوع الدسم",
        "size": "كوب",
        "protein": "8.3",
        "fats": "0.2",
        "carbohydrate": "12.2",
        "calories": "83.3"
       },
       {
        "name": "روب",
        "size": "ثلث كوب",
        "protein": "3.2",
        "fats": "2.6",
        "carbohydrate": "5.4",
        "calories": "59"
       },
       {
        "name": "روب قليل الدسم",
        "size": "كوب",
        "protein": "11.9",
        "fats": "3.5",
        "carbohydrate": "16",
        "calories": "143"
       },
       {
        "name": "روب قليل الدسم بالفانيلا",
        "size": "كوب",
        "protein": "11.2",
        "fats": "2.8",
        "carbohydrate": "31.3",
        "calories": "193"
       },
       {
        "name": "روب قليل الدسم بالفراولة",
        "size": "كوب",
        "protein": "9",
        "fats": "2.6",
        "carbohydrate": "42.3",
        "calories": "224.7"
       },
       {
        "name": "روب منزوع الدسم",
        "size": "كوب",
        "protein": "13",
        "fats": "0.4",
        "carbohydrate": "17.4",
        "calories": "127.1"
       },
       {
        "name": "روب منزوع الدسم بالشوكولاتة",
        "size": "كوب",
        "protein": "8",
        "fats": "0",
        "carbohydrate": "53.4",
        "calories": "245.2"
       },
       {
        "name": "روب منزوع الدسم بالفواكه",
        "size": "كوب",
        "protein": "10",
        "fats": "0.5",
        "carbohydrate": "43.1",
        "calories": "215.6"
       },
       {
        "name": "لبنة",
        "size": "كوب",
        "protein": "12.9",
        "fats": "10.8",
        "carbohydrate": "1",
        "calories": "154"
       }
];

export default function DairyProducts() {
  
  
  const [selectedItem, setSelectedItem] = useState(null);
  const [allItems, setAllItems] = useState(DairyProductsList);
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