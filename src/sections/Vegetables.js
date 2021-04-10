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


const VegetablesList=[
    {
        "name": "البازلا الخضراء",
        "size": "كوب",
        "protein": "8.6",
        "fats": "0.4",
        "carbohydrate": "25",
        "calories": "134.4"
       },
       {
        "name": "البطاطا الحلوة",
        "size": "واحدة متوسطة",
        "protein": "2",
        "fats": "0.1",
        "carbohydrate": "26.2",
        "calories": "111.8"
       },
       {
        "name": "البقدونس",
        "size": "10 أغصان",
        "protein": "0.3",
        "fats": "0.1",
        "carbohydrate": "0.6",
        "calories": "3.6"
       },
       {
        "name": "الترمس",
        "size": "كوب",
        "protein": "25.8",
        "fats": "4.8",
        "carbohydrate": "16.4",
        "calories": "197.5"
       },
       {
        "name": "الجرجير",
        "size": "كوب",
        "protein": "0.8",
        "carbohydrate": "0.4",
        "calories": "3.7"
       },
       {
        "name": "الرجلة",
        "size": "كوب",
        "protein": "0.6",
        "carbohydrate": "1.5",
        "calories": "6.9"
       },
       {
        "name": "السبانخ",
        "size": "كوب",
        "protein": "0.9",
        "fats": "0.1",
        "carbohydrate": "1.1",
        "calories": "6.9"
       },
       {
        "name": "الفاصوليا السوداء",
        "size": "كوب",
        "protein": "14.5",
        "fats": "4.2",
        "carbohydrate": "45",
        "calories": "269"
       },
       {
        "name": "الفاصولياء",
        "size": "كوب",
        "protein": "15.3",
        "fats": "0.9",
        "carbohydrate": "40.4",
        "calories": "224.8"
       },
       {
        "name": "الفاصولياء الخضراء",
        "size": "كوب",
        "protein": "2",
        "fats": "0.1",
        "carbohydrate": "7.8",
        "calories": "34.1"
       },
       {
        "name": "الفجل الأحمر",
        "size": "شرائح (نصف كوب)",
        "protein": "0.4",
        "fats": "0.1",
        "carbohydrate": "2",
        "calories": "9.3"
       },
       {
        "name": "القرنبيط",
        "size": "كوب",
        "protein": "2",
        "fats": "0.1",
        "carbohydrate": "5.3",
        "calories": "25"
       },
       {
        "name": "الكراث (البقل)",
        "size": "4 ملاعق صغيرة",
        "protein": "1",
        "carbohydrate": "6.7",
        "calories": "28.8"
       },
       {
        "name": "الكزبرة",
        "size": "9 أغصان",
        "protein": "0.4",
        "fats": "0.1",
        "carbohydrate": "0.7",
        "calories": "4.6"
       },
       {
        "name": "اللفت",
        "size": "كوب مقطع شرائح",
        "protein": "2.2",
        "fats": "0.5",
        "carbohydrate": "6.7",
        "calories": "33.5"
       },
       {
        "name": "باذنجان",
        "size": "نصف كوب",
        "protein": "0.84",
        "fats": "0.15",
        "carbohydrate": "4.98",
        "calories": "21.32"
       },
       {
        "name": "بازلاء مثلجة",
        "size": "كوب",
        "protein": "1.8",
        "fats": "0.1",
        "carbohydrate": "4.8",
        "calories": "26.5"
       },
       {
        "name": "بامية",
        "size": "كوب",
        "protein": "2",
        "fats": "0.1",
        "carbohydrate": "7",
        "calories": "31"
       },
       {
        "name": "بروكولي",
        "size": "كوب",
        "protein": "2.6",
        "fats": "0.3",
        "carbohydrate": "6",
        "calories": "30.9"
       },
       {
        "name": "بصل",
        "size": "كوب (مفروم)",
        "protein": "1.8",
        "fats": "0.2",
        "carbohydrate": "14.9",
        "calories": "64"
       },
       {
        "name": "بطاطس",
        "size": "واحدة متوسطة",
        "protein": "4.3",
        "fats": "0.2",
        "carbohydrate": "37.2",
        "calories": "164"
       },
       {
        "name": "بوبر",
        "size": "كوب",
        "protein": "0.3",
        "carbohydrate": "1.1",
        "calories": "5"
       },
       {
        "name": "تبولة",
        "size": "ملعقتين طعام",
        "protein": "1",
        "fats": "2",
        "carbohydrate": "2",
        "calories": "30"
       },
       {
        "name": "ثوم",
        "size": "3 فصوص",
        "protein": "0.6",
        "carbohydrate": "3",
        "calories": "13.4"
       },
       {
        "name": "جزر",
        "size": "واحدة",
        "protein": "0.7",
        "fats": "0.2",
        "carbohydrate": "6.9",
        "calories": "29.5"
       },
       {
        "name": "جزر صغير",
        "size": "واحدة متوسطة",
        "protein": "0.1",
        "carbohydrate": "0.8",
        "calories": "3.5"
       },
       {
        "name": "حمص",
        "size": "ملعقة طعام",
        "protein": "1.1",
        "fats": "1.3",
        "carbohydrate": "2",
        "calories": "23.2"
       },
       {
        "name": "خيار",
        "size": "حبة كبيرة",
        "protein": "2",
        "fats": "0.3",
        "carbohydrate": "10.9",
        "calories": "45.2"
       },
       {
        "name": "خيار مخلل حامض",
        "size": "شريحة واحدة",
        "protein": "0.02",
        "fats": "0.01",
        "carbohydrate": "0.16",
        "calories": "0.77"
       },
       {
        "name": "ذرة طازج",
        "size": "نصف كوب",
        "protein": "3.68",
        "fats": "1.02",
        "carbohydrate": "39.07",
        "calories": "176.4"
       },
       {
        "name": "ذرة محلى ومعلب",
        "size": "كوب واحد",
        "protein": "4.3",
        "fats": "1.64",
        "carbohydrate": "30.49",
        "calories": "132.84"
       },
       {
        "name": "زيتون معلب",
        "size": "حبة واحدة",
        "protein": "0.08",
        "fats": "0.57",
        "carbohydrate": "0.47",
        "calories": "6.72"
       },
       {
        "name": "سلطة خضراوات",
        "size": "كوب",
        "protein": "0.93",
        "fats": "1.86",
        "carbohydrate": "4.51",
        "calories": "39.59"
       },
       {
        "name": "شمندر",
        "size": "شرائح (نصف كوب)",
        "protein": "1.1",
        "fats": "0.1",
        "carbohydrate": "6.5",
        "calories": "29.2"
       },
       {
        "name": "طعمية",
        "size": "حبة واحدة",
        "protein": "2.3",
        "fats": "3",
        "carbohydrate": "5.4",
        "calories": "56.6"
       },
       {
        "name": "طماطم",
        "size": "واحدة متوسطة",
        "protein": "1.1",
        "fats": "0.2",
        "carbohydrate": "4.8",
        "calories": "22.1"
       },
       {
        "name": "عدس",
        "size": "كوب",
        "protein": "17.9",
        "fats": "0.8",
        "carbohydrate": "39.9",
        "calories": "229.7"
       },
       {
        "name": "فاصوليا بيضاء",
        "size": "كوب",
        "protein": "17.4",
        "fats": "0.6",
        "carbohydrate": "44.9",
        "calories": "248.8"
       },
       {
        "name": "فاصولياء صفراء",
        "size": "كوب",
        "protein": "16.2",
        "fats": "1.9",
        "carbohydrate": "44.7",
        "calories": "254.9"
       },
       {
        "name": "فلفل أحمر حار",
        "size": "حبة واحدة",
        "protein": "0.8",
        "fats": "0.2",
        "carbohydrate": "4",
        "calories": "18"
       },
       {
        "name": "فلفل أخضر حار",
        "size": "حبة واحدة",
        "protein": "0.9",
        "fats": "0.1",
        "carbohydrate": "4.3",
        "calories": "18"
       },
       {
        "name": "فول الصويا",
        "size": "كوب",
        "protein": "28.6",
        "fats": "15.4",
        "carbohydrate": "17.1",
        "calories": "297.6"
       },
       {
        "name": "قلقاس",
        "size": "كوب",
        "protein": "1.6",
        "fats": "0.2",
        "carbohydrate": "27.5",
        "calories": "116.5"
       },
       {
        "name": "كراث (بقل)",
        "size": "صرة (كوب)",
        "protein": "1.3",
        "fats": "0.3",
        "carbohydrate": "12.6",
        "calories": "54.3"
       },
       {
        "name": "كرفس",
        "size": "حبة متوسطة الحجم",
        "protein": "0.3",
        "fats": "0.1",
        "carbohydrate": "1.2",
        "calories": "6.4"
       },
       {
        "name": "مشروم",
        "size": "شرائح (كوب)",
        "protein": "2.2",
        "fats": "0.2",
        "carbohydrate": "2.3",
        "calories": "15.4"
       },
       {
        "name": "معجون طماطم",
        "size": "168 جرام (علبة)",
        "protein": "7.3",
        "fats": "0.8",
        "carbohydrate": "32.1",
        "calories": "139.4"
       },
       {
        "name": "هليون",
        "size": "كوب",
        "protein": "2.9",
        "fats": "0.2",
        "carbohydrate": "5.2",
        "calories": "26.8"
       },
       {
        "name": "ورق العنب",
        "size": "كوب",
        "protein": "0.8",
        "fats": "0.3",
        "carbohydrate": "2.4",
        "calories": "13"
       }
];

export default function Vegetables() {
  
  
  const [selectedItem, setSelectedItem] = useState(null);
  const [allItems, setAllItems] = useState(VegetablesList);
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