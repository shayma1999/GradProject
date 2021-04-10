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


const FatsOilsList=[
    {
        "name": "زبدة المارجرين ( بدون ملح )",
        "size": "ملعقة صغيرة",
        "protein": "0.02",
        "fats": "3.77",
        "carbohydrate": "0.02",
        "calories": "33.56"
       },
       {
        "name": "زبدة مارجرين ( مملحة )",
        "size": "ملعقة صغيرة",
        "protein": "0.04",
        "fats": "3.78",
        "carbohydrate": "0.04",
        "calories": "33.78"
       },
       {
        "name": "زيت الذرة",
        "size": "ملعقة صغيرة",
        "protein": "0",
        "fats": "13.64",
        "carbohydrate": "0",
        "calories": "120.55"
       },
       {
        "name": "زيت الزيتون",
        "size": "ملعقة صغيرة",
        "protein": "0",
        "fats": "13.51",
        "carbohydrate": "0",
        "calories": "119.44"
       },
       {
        "name": "زيت النخيل",
        "size": "ملعقة صغيرة",
        "protein": "0",
        "fats": "13.64",
        "carbohydrate": "0",
        "calories": "120.55"
       },
       {
        "name": "زيت دوار الشمس",
        "size": "ملعقة صغيرة",
        "protein": "0",
        "fats": "13.64",
        "carbohydrate": "0",
        "calories": "120.55"
       },
       {
        "name": "مايونيز",
        "size": "ملعقة صغيرة",
        "protein": "0.13",
        "fats": "4.91",
        "carbohydrate": "3.51",
        "calories": "57.29"
       }
];

export default function FatsOils() {
  
  
  const [selectedItem, setSelectedItem] = useState(null);
  const [allItems, setAllItems] = useState(FatsOilsList);
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