import React from 'react';
import { StyleSheet, Text,ActivityIndicator,Image,
  TouchableOpacity,ImageBackground, View, FlatList, Dimensions } from 'react-native';
import data from './s.json';
const CreamsList=[
    {
        "image": "https://www.tabeebi.net/wp-content/uploads/2018/02/%D9%81%D9%88%D8%A7%D8%A6%D8%AF-%D9%85%D9%86%D8%AA%D8%AC%D8%A7%D8%AA-%D8%A7%D9%84%D8%A3%D9%84%D8%A8%D8%A7%D9%86.jpg",
        "name": "الالبان والبيض"
       },
       {
         "image": "http://alqudsnews.net/uploads//images/07d1e45580cae56e68780dede9f552c2.jpg",
         "name": "مجموعة اللحوم"
        },
        {
         "image": "https://static.webteb.net/images/content/tbl_articles_article_17115_954d041478c-7b0a-4c07-999a-124ec4b6d983.jpg",
         "name": "الفواكه"
        },
        {
         "image": "https://www.sayidaty.net/sites/default/files/styles/800x510/public/2019/03/07/5027646-974726980.jpg",
         "name": "مكسرات"
        },
        {
         "image": "https://static.webteb.net/images/content/tbl_articles_article_23574_40589a60165-7880-4bda-a774-de24458bd85b.jpg",
         "name": "المشروبات"
        },
     
        {
         "image": "https://www.mammeto.me/wp-content/uploads/2018/09/%D9%81%D9%88%D8%A7%D8%A6%D8%AF-%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9-%D8%A7%D9%84%D8%AE%D8%A8%D8%B2-%D9%88%D8%A7%D9%84%D8%AD%D8%A8%D9%88%D8%A8-%D9%84%D9%84%D8%B1%D8%AC%D9%8A%D9%85.jpg",
         "name": "الخبز والحبوب"
        },
        {
         "image": "https://media.gemini.media/img/large/2020/5/26/2020_5_26_7_29_22_749.jpg",
         "name": "الخضروات"
        },
        {
         "image": "https://www.arageek.com/l/wp-content/uploads/anspress-uploads/cc9041a2475c13468982151821f8d216cbde70c1_86032.jpg",
         "name": "الدهون والزيوت"
        },
       {
        "image": "https://assets.nn.ps/CACHE/images/uploads/weblog/2019/05/26/different_names_for_spices_in_arab_regions_yawmiyati/60cc9f9fcb664f66deaa4ab2cf591cc3.jpg",
        "name": "الأعشاب والتوابل"
       }
     
];



const numColumns = 3;
export default function Test() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [allItems, setAllItems] = useState(CreamsList);
  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} 
      />;

    }
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.tem}>
      <TouchableOpacity style={styles.buttonFacebookStyle}
          activeOpacity={0.5}
          onPress={() => navigate(
            item.section
        )}>
      <ImageBackground source={{uri: item.image,}} style={styles.tinyLogo}>
    <Text style={styles.text}>{item.name}</Text>
  </ImageBackground>
  </TouchableOpacity>
       
      </View>
    );
  };

 
   
    return (
      <FlatList
      data={allItems}
        style={styles.container}
        renderItem={this.renderItem}
     //   numColumns={numColumns}
      />
     
    
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  item: {
    backgroundColor: '#4D243D',
    alignItems: 'center',
    justifyContent: 'center',
   // flex: 1,
    margin: 15,
    height: Dimensions.get('window').width / numColumns, // approximate a square
   // width: Dimensions.get('window').width / numColumns,

  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
  tinyLogo: {
    width: "100%",
    height: Dimensions.get('window').width / numColumns, // approximate a square
    

    
    
  },
  check:{
    
    fontSize:1

  },
  text: {
    color: "white",
    fontSize: 30,
   // fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },
  buttonFacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
      margin: 10,
  },
});