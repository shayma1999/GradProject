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

const ingredientList = [
  {
    "name": "أفوكادو",
    "size": "كوب (شرائح)",
    "protein": "2.9",
    "fats": "21.4",
    "carbohydrate": "12.5",
    "calories": "233.6"
   },
   {
    "name": "أناناس",
    "size": "كوب (قطع)",
    "protein": "0.8",
    "fats": "0.2",
    "carbohydrate": "20.3",
    "calories": "77.5"
   },
   {
    "name": "البرتقال",
    "size": "واحدة متوسطة",
    "protein": "1.2",
    "fats": "0.2",
    "carbohydrate": "15.4",
    "calories": "61.6"
   },
   {
    "name": "التمر",
    "size": "4 حبات",
    "protein": "0.8",
    "fats": "0.1",
    "carbohydrate": "24",
    "calories": "90.2"
   },
   {
    "name": "التوت الأزرق",
    "size": "كوب",
    "protein": "1.1",
    "fats": "0.5",
    "carbohydrate": "21",
    "calories": "82.6"
   },
   {
    "name": "التوت الأسود",
    "size": "كوب",
    "protein": "2",
    "fats": "0.7",
    "carbohydrate": "13.8",
    "calories": "61.9"
   },
   {
    "name": "التوت البري",
    "size": "كوب",
    "protein": "0.4",
    "fats": "0.1",
    "carbohydrate": "11.6",
    "calories": "43.7"
   },
   {
    "name": "التين",
    "size": "واحدة متوسطة",
    "protein": "0.4",
    "fats": "0.2",
    "carbohydrate": "9.6",
    "calories": "37"
   },
   {
    "name": "الخوخ",
    "size": "واحدة متوسطة",
    "protein": "1.4",
    "fats": "0.4",
    "carbohydrate": "14.3",
    "calories": "58.5"
   },
   {
    "name": "الخوخ المجفف",
    "size": "كوب(أنصاف)",
    "protein": "5.8",
    "fats": "1.2",
    "carbohydrate": "98.1",
    "calories": "382.4"
   },
   {
    "name": "الشمام",
    "size": "كوب (قطع)",
    "protein": "1.5",
    "fats": "0.3",
    "carbohydrate": "14.4",
    "calories": "60.2"
   },
   {
    "name": "الكرز الحامض",
    "size": "كوب",
    "protein": "1",
    "fats": "0.3",
    "carbohydrate": "12.5",
    "calories": "51.5"
   },
   {
    "name": "الكرز الحلو",
    "size": "كوب",
    "protein": "1.2",
    "fats": "0.2",
    "carbohydrate": "18.7",
    "calories": "73.7"
   },
   {
    "name": "باباي",
    "size": "واحدة متوسطة",
    "protein": "1.9",
    "fats": "0.4",
    "carbohydrate": "29.8",
    "calories": "118.6"
   },
   {
    "name": "تفاح",
    "size": "واحدة متوسطة",
    "protein": "0.4",
    "fats": "0.2",
    "carbohydrate": "19.1",
    "calories": "71.8"
   },
   {
    "name": "تفاح مجفف",
    "size": "شريحة",
    "protein": "0.9",
    "fats": "0.3",
    "carbohydrate": "64.6",
    "calories": "238.1"
   },
   {
    "name": "تمر هندي",
    "size": "كوب",
    "protein": "3.4",
    "fats": "0.7",
    "carbohydrate": "75",
    "calories": "286.8"
   },
   {
    "name": "توت",
    "size": "كوب",
    "protein": "1.5",
    "fats": "0.8",
    "carbohydrate": "14.7",
    "calories": "64"
   },
   {
    "name": "جريب فروت",
    "size": "نصف واحدة متوسطة",
    "protein": "0.7",
    "fats": "0.1",
    "carbohydrate": "9.5",
    "calories": "37.8"
   },
   {
    "name": "جوافة",
    "size": "واحدة متوسطة",
    "protein": "2.3",
    "fats": "0.9",
    "carbohydrate": "12.9",
    "calories": "61.2"
   },
   {
    "name": "شيبس الموز",
    "size": "ملعقتين طعام",
    "protein": "0.6",
    "fats": "9.4",
    "carbohydrate": "16.4",
    "calories": "145.3"
   },
   {
    "name": "غوج",
    "size": "واحدة متوسطة",
    "protein": "0.5",
    "fats": "0.2",
    "carbohydrate": "7.5",
    "calories": "30.4"
   },
   {
    "name": "فراولة",
    "size": "كوب",
    "protein": "1",
    "fats": "0.4",
    "carbohydrate": "11.1",
    "calories": "46.1"
   },
   {
    "name": "قشر البرتقال",
    "size": "ملعقة شاي",
    "protein": "0.1",
    "carbohydrate": "1.5",
    "calories": "5.8"
   },
   {
    "name": "قشر الليمون",
    "size": "ملعقة شاي",
    "protein": "0.1",
    "carbohydrate": "1",
    "calories": "2.8"
   },
   {
    "name": "كمثرى",
    "size": "واحدة متوسطة",
    "protein": "0.6",
    "fats": "0.2",
    "carbohydrate": "25.7",
    "calories": "96.3"
   },
   {
    "name": "كمثرى مجفف",
    "size": "10 أنصاف",
    "protein": "3.3",
    "fats": "1.1",
    "carbohydrate": "122",
    "calories": "458.5"
   },
   {
    "name": "كيوي",
    "size": "واحدة متوسطة",
    "protein": "0.9",
    "fats": "0.4",
    "carbohydrate": "11.1",
    "calories": "46.4"
   },
   {
    "name": "ليمون",
    "size": "واحدة متوسطة",
    "protein": "0.6",
    "fats": "0.2",
    "carbohydrate": "5.4",
    "calories": "16.8"
   },
   {
    "name": "مانجو",
    "size": "واحدة متوسطة",
    "protein": "1.1",
    "fats": "0.6",
    "carbohydrate": "35.2",
    "calories": "134.6"
   },
   {
    "name": "مشمش",
    "size": "3 حبات",
    "protein": "1.5",
    "fats": "0.4",
    "carbohydrate": "11.7",
    "calories": "50.4"
   },
   {
    "name": "مشمش مجفف",
    "size": "كوب (أنصاف)",
    "protein": "2.2",
    "fats": "0.3",
    "carbohydrate": "40.7",
    "calories": "156.6"
   },
   {
    "name": "موز",
    "size": "واحدة متوسطة",
    "protein": "1.3",
    "fats": "0.4",
    "carbohydrate": "27",
    "calories": "105"
   },
   {
    "name": "نكتارين",
    "size": "واحدة متوسطة",
    "protein": "1.4",
    "fats": "0.4",
    "carbohydrate": "14.3",
    "calories": "59.8"
   }
];

export default function Sec() {
  
  
  const [selectedItem, setSelectedItem] = useState(null);
  const [allItems, setAllItems] = useState(ingredientList);

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