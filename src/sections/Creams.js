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


const CreamsList=[
    {
        "name": "كريم مبيض القهوة (خفيف)",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/38",
        "size": "ملعقة طعام",
        "protein": "0.4",
        "fats": "2.9",
        "carbohydrate": "0.5",
        "calories": "29.2"
       },
       {
        "name": "كريمة بودرة",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/40",
        "size": "ملعقة طعام",
        "protein": "0.3",
        "fats": "2.1",
        "carbohydrate": "3.3",
        "calories": "32.7"
       },
       {
        "name": "كريمة بودرة قليلة الدسم",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/41",
        "size": "ملعقة طعام",
        "protein": "0.1",
        "fats": "0.9",
        "carbohydrate": "4.4",
        "calories": "25.9"
       },
       {
        "name": "كريمة حامضة خالية الدهن",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/42",
        "size": "ملعقتين طعام",
        "protein": "0.9",
        "fats": "0",
        "carbohydrate": "4.7",
        "calories": "22.2"
       },
       {
        "name": "كريمة حامضة قليلة الدهن",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/43",
        "size": "ملعقتين طعام",
        "protein": "2.1",
        "fats": "4.2",
        "carbohydrate": "2.1",
        "calories": "54.3"
       },
       {
        "name": "كريمة سائلة (خفيفة)",
        "url": "https://www.moh.gov.bh/HealthInfo/FoodDetails/39",
        "size": "ملعقة طعام",
        "protein": "0.2",
        "fats": "1",
        "carbohydrate": "2.7",
        "calories": "21.3"
       }
];

export default function Creams() {
  
  
  const [selectedItem, setSelectedItem] = useState(null);
  const [allItems, setAllItems] = useState(CreamsList);
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