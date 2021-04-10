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


const DrinksList=[
    {
        "name": "أناناس معلب",
        "size": "كوب واحد",
        "protein": "0.89",
        "fats": "0.28",
        "carbohydrate": "51.51",
        "calories": "198.9"
       },
       {
        "name": "شاي بدون سكر",
        "size": "ثلاثة أرباع الكوب",
        "protein": "0",
        "fats": "0",
        "carbohydrate": "0.06",
        "calories": "0.3"
       },
       {
        "name": "شاي مثلج (Ice Tea)",
        "size": "كوب واحد",
        "protein": "0",
        "fats": "0",
        "carbohydrate": "28.59",
        "calories": "118.3"
       },
       {
        "name": "شاي مع سكر",
        "size": "ثلاثة أرباع الكوب",
        "protein": "0.03",
        "fats": "0",
        "carbohydrate": "2.75",
        "calories": "11.01"
       },
       {
        "name": "شراب برتقال",
        "size": "ثلاثة أرباع الكوب",
        "protein": "0",
        "fats": "0",
        "carbohydrate": "31.96",
        "calories": "126.37"
       },
       {
        "name": "شراب بنكهة الفواكه",
        "size": "كوب واحد",
        "protein": "2.11",
        "fats": "3.84",
        "carbohydrate": "58.37",
        "calories": "264.96"
       },
       {
        "name": "شراب عنب",
        "size": "ثلاثة أرباع الكوب",
        "protein": "0",
        "fats": "0",
        "carbohydrate": "28.77",
        "calories": "112.58"
       },
       {
        "name": "شراب ليمون",
        "size": "كوب واحد",
        "protein": "0",
        "fats": "0",
        "carbohydrate": "28.73",
        "calories": "11172"
       },
       {
        "name": "عصير أناناس",
        "size": "كوب واحد",
        "protein": "0.8",
        "fats": "0.2",
        "carbohydrate": "34.48",
        "calories": "140.11"
       },
       {
        "name": "عصير برتقال",
        "size": "ثلاثة أرباع الكوب",
        "protein": "1.74",
        "fats": "0.5",
        "carbohydrate": "25.79",
        "calories": "111.6"
       },
       {
        "name": "عصير برتقال مع المشمش",
        "size": "ثلاثة أرباع الكوب",
        "protein": "0.75",
        "fats": "0.25",
        "carbohydrate": "31.67",
        "calories": "127.19"
       },
       {
        "name": "عصير تفاح غير محلى",
        "size": "ثلاثة أرباع الكوب",
        "protein": "0.15",
        "fats": "0.27",
        "carbohydrate": "28.94",
        "calories": "116.46"
       },
       {
        "name": "عصير جريب فروت (غيرمحلى)",
        "size": "ثلاثة أرباع الكوب",
        "protein": "1.28",
        "fats": "0.25",
        "carbohydrate": "22.13",
        "calories": "93.86"
       },
       {
        "name": "عصير جريب فروت (محلى)",
        "size": "ثلاثة أرباع الكوب",
        "protein": "1.45",
        "fats": "0.22",
        "carbohydrate": "27.76",
        "calories": "114.72"
       },
       {
        "name": "عصير جزر",
        "size": "ثلاثة أرباع الكوب",
        "protein": "2.34",
        "fats": "0.37",
        "carbohydrate": "22.88",
        "calories": "98.4"
       },
       {
        "name": "عصير جوافة",
        "size": "ثلاثة أرباع الكوب",
        "protein": "0",
        "fats": "0",
        "carbohydrate": "21.63",
        "calories": "87.86"
       },
       {
        "name": "عصير طماطم",
        "size": "كوب واحد",
        "protein": "1.8",
        "fats": "0.15",
        "carbohydrate": "10.32",
        "calories": "41.48"
       },
       {
        "name": "عصير فواكه مشكلة",
        "size": "كوب واحد",
        "protein": "0.99",
        "fats": "0.18",
        "carbohydrate": "48.22",
        "calories": "186.15"
       },
       {
        "name": "عصير كمثرى",
        "size": "كوب واحد",
        "protein": "1.56",
        "fats": "0.08",
        "carbohydrate": "44.63",
        "calories": "181.61"
       },
       {
        "name": "عصير مانجو",
        "size": "ثلاثة أرباع الكوب",
        "protein": "0",
        "fats": "0",
        "carbohydrate": "21.63",
        "calories": "87.86"
       },
       {
        "name": "عصير مشمش",
        "size": "كوب واحد",
        "protein": "1.23",
        "fats": "0.23",
        "carbohydrate": "55.34",
        "calories": "214.14"
       },
       {
        "name": "قهوة جاهزة",
        "size": "كوب ونصف",
        "protein": "0.03",
        "fats": "0",
        "carbohydrate": "0.12",
        "calories": "0.6"
       },
       {
        "name": "قهوة كبتشينو",
        "size": "كوب ونصف",
        "protein": "0.06",
        "fats": "0.32",
        "carbohydrate": "1.64",
        "calories": "9.38"
       },
       {
        "name": "كولا ( دايت)",
        "size": "كوب ونصف",
        "protein": "0.2",
        "fats": "0",
        "carbohydrate": "0.3",
        "calories": "2"
       },
       {
        "name": "كولا( عادي )",
        "size": "كوب ونصف",
        "protein": "0.1",
        "fats": "0.1",
        "carbohydrate": "38.5",
        "calories": "151"
       },
       {
        "name": "ليمون صودا",
        "size": "كوب ونصف",
        "protein": "0",
        "fats": "0",
        "carbohydrate": "38.4",
        "calories": "149"
       },
       {
        "name": "نكتار الأجاص ( كمثرى )",
        "size": "كوب واحد",
        "protein": "0.67",
        "fats": "0.05",
        "carbohydrate": "34.6",
        "calories": "134.24"
       },
       {
        "name": "نكتار مشمش",
        "size": "ثلاثة أرباع الكوب",
        "protein": "0.93",
        "fats": "0.23",
        "carbohydrate": "36.12",
        "calories": "140.55"
       }
];

export default function Drinks() {
  
  
  const [selectedItem, setSelectedItem] = useState(null);
  const [allItems, setAllItems] = useState(DrinksList);
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