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


const NutsList=[
    {
        "name": "جوز الهند",
        "size": "ملعقتين طعام",
        "protein": "1.5",
        "fats": "15.1",
        "carbohydrate": "6.9",
        "calories": "159.3"
       },
       {
        "name": "جوز الهند مجفف",
        "size": "ملعقتين طعام",
        "protein": "1.9",
        "fats": "18.1",
        "carbohydrate": "6.6",
        "calories": "184.8"
       },
       {
        "name": "حليب جوز الهند",
        "size": "كوب",
        "protein": "5.5",
        "fats": "57.2",
        "carbohydrate": "13.3",
        "calories": "552"
       },
       {
        "name": "فستق مجفف",
        "size": "ملعقتين طعام",
        "protein": "5.8",
        "fats": "12.4",
        "carbohydrate": "7.8",
        "calories": "156"
       },
       {
        "name": "فستق مجفف محمص",
        "size": "ملعقتين طعام (47 حبة)",
        "protein": "6",
        "fats": "12.9",
        "carbohydrate": "7.7",
        "calories": "159.9"
       },
       {
        "name": "فول الصويا محمص",
        "size": "كوب",
        "protein": "60.6",
        "fats": "43.7",
        "carbohydrate": "57.7",
        "calories": "810.1"
       },
       {
        "name": "فول الصويا محمص مجفف",
        "size": "ملعقتين طعام",
        "protein": "11.1",
        "fats": "6.1",
        "carbohydrate": "9.2",
        "calories": "126.3"
       },
       {
        "name": "لوز (بيذان)",
        "size": "ملعقتين طعام",
        "protein": "5.9",
        "fats": "13.8",
        "carbohydrate": "6.1",
        "calories": "161"
       },
       {
        "name": "ماء جوز الهند",
        "size": "كوب",
        "protein": "1.7",
        "fats": "0.5",
        "carbohydrate": "8.9",
        "calories": "45.6"
       },
       {
        "name": "مكسرات الذرة",
        "size": "ملعقتين طعام",
        "protein": "2.4",
        "fats": "4.4",
        "carbohydrate": "20.1",
        "calories": "124.9"
       },
       {
        "name": "مكسرات مشكلة محمصة",
        "size": "1/8 كوب",
        "protein": "4.8",
        "fats": "14.4",
        "carbohydrate": "7.1",
        "calories": "166.3"
       },
       {
        "name": "مكسرات مشكلة محمصة بالزيت",
        "size": "1/8 كوب",
        "protein": "4.7",
        "fats": "15.8",
        "carbohydrate": "6",
        "calories": "172.8"
       }
];

export default function Nuts() {
  
  
  const [selectedItem, setSelectedItem] = useState(null);
  const [allItems, setAllItems] = useState(NutsList);
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