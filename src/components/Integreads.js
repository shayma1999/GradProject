import React, {Component} from 'react';
import {TouchableOpacity,Image, StyleSheet, Text, View,FlatList} from 'react-native';

export default class Tabkhat extends Component{
  

    state ={
        data:[]
      }
    
      fetchData= async()=>{
        const response = await fetch("http://192.168.0.102:3000/taabkh");
        const customers = await response.json();
        this.setState({data: customers});
    
      }
    componentDidMount(){
      this.fetchData();
    }
      render() {
        return (
          <View >
          
           <FlatList
           data={this.state.data}
           keyExtractor={(item,index) => index.toString()}
           renderItem={({item}) =>
           
    
           <View style={{backgroundColor:'#fffafa',padding:10,margin:10}}>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_p}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_time}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_timeA}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_time1}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_time1A}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_count}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_countA}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_amount}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_name}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_Idiv}</Text>
            

             </View>
            
    
           }
    
           />
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fffafa',
      },
    });


   
