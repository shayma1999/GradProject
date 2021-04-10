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

const fruitsList =
 [
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
  ,{
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
  ,{
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
  ,{
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
 ,{
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
  ,
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
 , {
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
  ,{
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
   },
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


export default function Fruits() {
  
  
  const [selectedItem, setSelectedItem] = useState(null);
  const [allItems, setAllItems] = useState(fruitsList);
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
      <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
          marginVertical: 10,
          borderRadius: 20
        }}
      >
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={queryText => handleSearch(queryText)}
          placeholder="Search"
          style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
        />
      </View>
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