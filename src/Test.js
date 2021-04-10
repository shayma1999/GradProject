//import { Button } from 'native-base';
import React from 'react';
import { StyleSheet, Text,ActivityIndicator,Image,
  TouchableOpacity,ImageBackground, View, FlatList, Dimensions } from 'react-native';
//import CheckBox from 'react-native-checkbox';
import data from '../s.json';
//import { CheckBox } from 'react-native-elements'
//import ImageOverlay from "react-native-image-overlay";
//import OverlayImgView from 'react-native-image-overlay-gallery'

//const data = [
//  { key: 'A' }, { key: 'B' }, { key: 'C' }, { key: 'D' }, { key: 'E' }, { key: 'F' }, { key: 'G' }, { key: 'H' }, { key: 'I' }, { key: 'J' },
 // { key: 'K' },
 // { key: 'L' },
//];



const numColumns = 3;
export default class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true, // check if json data (online) is fetching
      dataSource: [], // store an object of json data
    };
  }
  componentDidMount() {
    
    this.setState({
      isLoading: false, // already loading
      dataSource: data.selection1
    });
  
}
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
            'Profile', { name: 'Jane' }
        )}
          >
      <ImageBackground source={{uri: item.image,}} style={styles.tinyLogo}>
    <Text style={styles.text}>{item.name}</Text>
  </ImageBackground>
  </TouchableOpacity>
       
      </View>
    );
  };

  render() {
   
    return (
      <FlatList
      data={this.state.dataSource}
        style={styles.container}
        renderItem={this.renderItem}
     //   numColumns={numColumns}
      />
     
    
    );
  }
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