import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image 
} from 'react-native';



export default class Logo extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Image  style={{width:100, height:100}}
          			source={require('../images/logo.png')}/>
                      <Text style={styles.logoText}>اوريجانو</Text>
          		
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
   
        flexGrow: 1,
     justifyContent:'center',
    alignItems: 'center'
  },
  logoText : {
  	marginVertical: 15,
  	fontSize:30,
  	color:'rgba(0, 0, 0, 0.7)'
  }
  
   
  });