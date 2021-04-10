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


const MeatGroupList=[
    {
        "name": "بط مشوي بدون الجلد",
        "size": "بحجم راحة اليد",
        "protein": "20",
        "fats": "9.5",
        "carbohydrate": "0",
        "calories": "170.8"
       },
       {
        "name": "بط مشوي مع الجلد",
        "size": "بحجم راحة اليد",
        "protein": "16.1",
        "fats": "24.1",
        "carbohydrate": "0",
        "calories": "286.4"
       },
       {
        "name": "حمام",
        "size": "بحجم الكف",
        "protein": "21.8",
        "fats": "3.3",
        "carbohydrate": "0",
        "calories": "117.8"
       },
       {
        "name": "حمام بدون الجلد",
        "size": "بحجم راحة اليد",
        "protein": "14.9",
        "fats": "6.4",
        "carbohydrate": "0",
        "calories": "120.7"
       },
       {
        "name": "حمام مطبوخ",
        "size": "بحجم راحة اليد",
        "protein": "20.3",
        "fats": "11",
        "carbohydrate": "0",
        "calories": "186.2"
       },
       {
        "name": "حمام مقلي",
        "size": "بحجم الكف",
        "protein": "27.8",
        "fats": "4.2",
        "carbohydrate": "0",
        "calories": "150"
       },
       {
        "name": "دجاج",
        "size": "بحجم راحة اليد",
        "protein": "18.2",
        "fats": "2.6",
        "carbohydrate": "0",
        "calories": "101.2"
       },
       {
        "name": "دجاج معلب",
        "size": "علبة",
        "protein": "30.9",
        "fats": "11.3",
        "carbohydrate": "0",
        "calories": "234.3"
       },
       {
        "name": "ربيان",
        "size": "5-6 حبات",
        "protein": "19.7",
        "fats": "0.8",
        "carbohydrate": "0",
        "calories": "87.1"
       },
       {
        "name": "ربيان مقلي",
        "size": "3-4 حبات متوسطة",
        "protein": "18.17",
        "fats": "10.43",
        "carbohydrate": "9.74",
        "calories": "205.71"
       },
       {
        "name": "سجق",
        "size": "قطعة واحدة",
        "protein": "6.84",
        "fats": "16.25",
        "carbohydrate": "1.03",
        "calories": "179.55"
       },
       {
        "name": "سلمون معلب",
        "size": "راحة اليد",
        "protein": "17.4",
        "fats": "6.21",
        "carbohydrate": "0",
        "calories": "130"
       },
       {
        "name": "سمان مطبوخ",
        "size": "بحجم راحة اليد",
        "protein": "21.3",
        "fats": "12",
        "carbohydrate": "0",
        "calories": "198.9"
       },
       {
        "name": "سمك الحمراء",
        "size": "راحة اليد",
        "protein": "22.37",
        "fats": "1.45",
        "carbohydrate": "0",
        "calories": "108.81"
       },
       {
        "name": "سمك تونا معلب",
        "size": "راحة اليد",
        "protein": "21.68",
        "fats": "0.69",
        "carbohydrate": "0",
        "calories": "98.61"
       },
       {
        "name": "شعري",
        "size": "بحجم الكف",
        "protein": "19.7",
        "fats": "1.1",
        "carbohydrate": "0",
        "calories": "89.8"
       },
       {
        "name": "شعري مقلي",
        "size": "بحجم الكف",
        "protein": "25.9",
        "fats": "7",
        "carbohydrate": "0",
        "calories": "167"
       },
       {
        "name": "صافي",
        "size": "بحجم الكف",
        "protein": "18.9",
        "fats": "7.3",
        "carbohydrate": "0.1",
        "calories": "141.8"
       },
       {
        "name": "صافي مشوي",
        "size": "بحجم الكف",
        "protein": "27.3",
        "fats": "4.3",
        "carbohydrate": "0",
        "calories": "148.9"
       },
       {
        "name": "صدر دجاج بروستد",
        "size": "½ صدر دجاجة صغيرة",
        "protein": "26.35",
        "fats": "3",
        "carbohydrate": "0",
        "calories": "140.26"
       },
       {
        "name": "صدر دجاج مقلي",
        "size": "½ صدر دجاجة صغيرة",
        "protein": "28.42",
        "fats": "4",
        "carbohydrate": "0.42",
        "calories": "158.94"
       },
       {
        "name": "فخد دجاج مقلي",
        "size": "فخد دجاجة متوسطة",
        "protein": "18.5",
        "fats": "13.73",
        "carbohydrate": "7.41",
        "calories": "232"
       },
       {
        "name": "فخذ دجاج بروستد",
        "size": "فخد دجاجة متوسطة",
        "protein": "22",
        "fats": "11.45",
        "carbohydrate": "0",
        "calories": "197.19"
       },
       {
        "name": "قرقفان",
        "size": "بحجم الكف",
        "protein": "19.9",
        "fats": "3.7",
        "carbohydrate": "0.4",
        "calories": "115"
       },
       {
        "name": "قرقفان مشوي",
        "size": "بحجم الكف",
        "protein": "22.8",
        "fats": "1.8",
        "carbohydrate": "0",
        "calories": "108.6"
       },
       {
        "name": "كبد دجاج",
        "size": "3 قطع متوسطة",
        "protein": "20.72",
        "fats": "4.65",
        "carbohydrate": "0.75",
        "calories": "133.5"
       },
       {
        "name": "كبدة لحم مطبوخة",
        "size": "4 قطع متوسطة",
        "protein": "22.73",
        "fats": "6.81",
        "carbohydrate": "6.67",
        "calories": "184.45"
       },
       {
        "name": "كنعد",
        "size": "بحجم الكف",
        "protein": "19.5",
        "fats": "9.3",
        "carbohydrate": "0",
        "calories": "161"
       },
       {
        "name": "كنعد مقلي",
        "size": "بحجم الكف",
        "protein": "26.7",
        "fats": "11.9",
        "carbohydrate": "0",
        "calories": "213.7"
       },
       {
        "name": "لحم بقر مسلوق (مطحون)",
        "size": "ملعقتين طعام",
        "protein": "20.45",
        "fats": "17.6",
        "carbohydrate": "0",
        "calories": "245.65"
       },
       {
        "name": "لحم بقر مقلي (مطحون)",
        "size": "ملعقتين طعام",
        "protein": "20.33",
        "fats": "19.2",
        "carbohydrate": "0",
        "calories": "260"
       },
       {
        "name": "لحم عجل مطبوخ",
        "size": "3 قطع صغيرة",
        "protein": "23.99",
        "fats": "8",
        "carbohydrate": "0",
        "calories": "175"
       },
       {
        "name": "ميد",
        "size": "بحجم الكف",
        "protein": "18.3",
        "fats": "16.1",
        "carbohydrate": "0",
        "calories": "216.7"
       },
       {
        "name": "ميد مشوي",
        "size": "بحجم الكف",
        "protein": "24.2",
        "fats": "10.5",
        "carbohydrate": "0",
        "calories": "191.2"
       },
       {
        "name": "هامور",
        "size": "بحجم الكف",
        "protein": "19.3",
        "fats": "3.4",
        "carbohydrate": "0.2",
        "calories": "109.3"
       },
       {
        "name": "هامور مع الرز",
        "size": "نصف كوب",
        "protein": "27.3",
        "fats": "3.2",
        "carbohydrate": "0",
        "calories": "139.2"
       },
       {
        "name": "ينم",
        "size": "بحجم الكف",
        "protein": "17.9",
        "fats": "10.4",
        "carbohydrate": "0",
        "calories": "164.7"
       },
       {
        "name": "ينم مشوي",
        "size": "بحجم الكف",
        "protein": "25.9",
        "fats": "5.6",
        "carbohydrate": "0",
        "calories": "154.8"
       }
      
];

export default function MeatGroup() {
  
  
  const [selectedItem, setSelectedItem] = useState(null);
  const [allItems, setAllItems] = useState(MeatGroupList);
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