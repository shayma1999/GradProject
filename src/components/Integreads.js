import React, {Component} from 'react';
import {TouchableOpacity,Image, StyleSheet, Text, View,FlatList} from 'react-native';

export default class Tabkhat extends Component{
  

    state ={
        data:[]
      }
    
      fetchData= async()=>{
        const response = await fetch("http://192.168.0.103:3000/taabkh");
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
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_l1}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_l11}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_l3}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_l4}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_l5}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_l6}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_l7}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_l8}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_l9}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_l10}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_l111}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_l13}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_l15}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_l16}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_l17}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_l18}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_l19}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_way}</Text>
              <Text style={{color:'#000000', fontWeight:'bold'}}>{item.list_l1w}</Text>

              
              


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


   